const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit') // use "node": "14.x" in glitch

const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

require('dotenv').config()
const dev = process.env.NODE_ENV === 'development'

/* middleware */
const secureHttps = require("./middleware/secureHttps")
const removeLastSlash = require("./middleware/removeLastSlash")

/* pages */
const homePage = require("./views/homePage/homePage")

/* services */
const { db } = require("./services/firebase")

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.socket.io", "https://cdnjs.cloudflare.com"],
            mediaSrc: ["'self'", "blob:", "https://firebasestorage.googleapis.com"],
            scriptSrcAttr: ["'unsafe-inline'"]
        },
    }
}))
app.use(rateLimit({
    windowMs: 60 * 1000,
    max: (dev) ? 99999999 : 200,
    message: 'Too many requests from this IP, please try again later',
    handler: (req, res) => {
        res.sendStatus(429)
    }
}))
app.set("trust proxy", true)
app.use(secureHttps(dev))
app.use(cookieParser())
app.use(removeLastSlash)
app.use(bodyParser.json())

app.use("/", express.static('./static'))


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.send(homePage())
})

app.get("/api/all-films", async (req, res) => {
    let startAfterId

    if (req.query.startAfter)
        startAfterId = req.query.startAfter

    let films = []
    try {
        let snapshot
        const limitNum = 100

        if (startAfterId)
            snapshot = await db.collection("films").orderBy("__name__").limit(limitNum).startAfter(startAfterId).get()
        else
            snapshot = await db.collection("films").orderBy("__name__").limit(limitNum).get()

        snapshot.forEach(doc => {
            const docData = doc.data()
            films.push({
                title: doc.id,
                endTimeDifference: docData["endTimeDifference"],
                lastUpdate: docData["lastUpdate"]
            })
        })
    } catch (error) {
        return res.status(500).send([])
    }


    res.send(films)
})

app.delete("/api/film/:filmId", async (req, res) => {
    if (!req.params.filmId)
        return res.sendStatus(400)

    try {
        await db.collection("films").doc(req.params.filmId).delete();   
    } catch (error) {
        res.sendStatus(500)
    }

    res.sendStatus(200)
})



app.get("/api/films", (req, res) => {
    if (!req.query || !req.query.list)
        return res.status(400).send("req.query.list not present")

    let queryList
    try {
        queryList = JSON.parse(req.query.list)
    } catch (error) {
        return res.status(400).send("cannot parse query.list")
    }

    if (typeof(queryList) != "object" || queryList.length == undefined)
        return res.status(400).send("req.query.list wrong input")


    if (queryList.length <= 0)
        return res.status(400).send("req.query.list empty")

    for (let i = 0; i < queryList.length; i++)
        if (typeof(queryList[i]) != "string" || queryList[i] == "")
            return res.status(400).send("req.query.list can contain only non-empty strings")


    const filmsNum = queryList.length
    const filmsResponse = []

    let endResponse = false

    let resNum = 0
    function checkIfRecivedAllRes(error) {
        if (endResponse == true) return

        resNum += 1

        if (error === "500-internal-error") {
            endResponse = true
            res.sendStatus(500)
        }

        if (filmsNum === resNum) {
            endResponse = true
            res.send(filmsResponse)
        }
    }
    
    for (let i = 0; i < queryList.length; i++) {
        const title = queryList[i]

        const documentRef = db.collection("films").doc(title)

        documentRef.get()
            .then(docSnapshot => {
                if (docSnapshot.exists) {

                    const docData = docSnapshot.data()

                    if (docData.endTimeDifference == undefined || docData.lastUpdate == undefined) {
                        filmsResponse.push({
                            title,
                            endTimeDifference: 0,
                            lastUpdate: 0,
                            status: 404
                        })
                    } else {
                        filmsResponse.push({
                            title,
                            endTimeDifference: docData.endTimeDifference,
                            lastUpdate: docData.lastUpdate,
                            status: 200
                        })
                    }

                } else {
                    filmsResponse.push({
                        title,
                        endTimeDifference: 0,
                        lastUpdate: 0,
                        status: 404
                    })
                }
                checkIfRecivedAllRes()
            })
            .catch(err => {

                console.log('Error getting document:', err);
                
                checkIfRecivedAllRes("500-internal-error")
            })
    }
})


app.post("/api/films", (req, res) => {
    if (!req.body)
        return res.status(400).send("req.body not present")

    const filmDurations = Object.entries(req.body)

    for (let i = 0; i < filmDurations.length; i++) {
        const filmDuration = filmDurations[i]

        if (typeof(filmDuration[0]) != "string" || typeof(filmDuration[1]) != "number" || filmDuration[0] == "" || filmDuration[1] <= 0) continue

        try {
            db.collection("films").doc(filmDuration[0]).set({
                endTimeDifference: filmDuration[1],
                lastUpdate: Date.now()
            })
        } catch (error) {
            console.error("errore nel salvataggio di un nuovo film", error)
        }
    }

    res.sendStatus(200)
})


app.get("*", (req, res) => {
    res.redirect("/")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendStatus(500)
})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`listening on port ${port} in ${process.env.NODE_ENV} mode...`)
})


/*
TO DO:
 - lista eventi in basso
*/