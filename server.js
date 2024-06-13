const cookieParser = require("cookie-parser")
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

app.use("/", express.static('./static'))

// io.of("/").on('connection', async socket => {

//     console.log(socket.handshake.query)

//     socket.on('message', () => {
//         console.log("message")

//         io.emit("message", "hello")
//     })
    
//     socket.on('disconnect', () => {
//         console.log("bye bye " + JSON.stringify(socket.handshake.query))
//     })
// })

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.send(homePage())
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