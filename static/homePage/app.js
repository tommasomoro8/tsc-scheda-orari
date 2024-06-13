const timetable = {
    "ME CONTRO TE - IL FILM - OPERAZIONE SPIE": 85,
    "THE WATCHERS - LORO TI GUARDANO": 126,
    "IF - GLI AMICI IMMAGINARI": 130,
    "HOTSPOT - AMORE SENZA RETE": 130,
    "HAIKYU!! - BATTAGLIA ALL'ULTIMO RIFIUTO": 99,
    "GARFIELD - UNA MISSIONE GUSTOSA": 120,
    "FURIOSA: A MAD MAX SAGA": 166,
    "IL REGNO DEL PIANETA DELLE SCIMMIE": 168,
    "KINDS OF KINDNESS": 190,
    "THE TUNNEL TO SUMMER - THE EXIT OF GOODBYES": 104,
    "LA STANZA DEGLI OMICIDI": 118,
    "(V.O.) KINDS OF KINDNESS": 190,
    "(3D) GRAVITY": 110,
    "L'ESORCISMO - ULTIMO ATTO": 119
}

function fromTimeToMinutes(time) {
    const splittedTime = time.split(":")

    const h = parseInt(splittedTime[0])
    const m = parseInt(splittedTime[1])

    return h*60 + m
}

function formatString(str) {
    while (str.length < 2)
        str = "0" + str
    
    return str
}

function fromMinutesToTime(minutes) {
    if (minutes >= 60 * 24)
        minutes -= 60 * 24

    const m = minutes % 60
    const h = (minutes - m)/60

    return formatString(`${h}`) + ":" + formatString(`${m}`)
}

document.getElementById("file-upload").addEventListener("change", event => {
    const files = Array.from(event.target.files)

    files.forEach(file => {
        let reader = new FileReader()

        reader.onload = e => {
            var data = e.target.result

            var workbook = XLSX.read(data, {
                type: 'binary',
                cellDates: true
            })
        
            workbook.SheetNames.forEach(sheetName => {
                const XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName])

                // aggiungi controlli qui sulla tabella excel per controllare sia quella giusta
            
                const date = getDate(XL_row_object)

                const films = getFilms(XL_row_object)


                // calcolo chiusure

                const closures = []
                for (let i = 0; i < films.length; i++)
                    if (films[i].lastProjectionInRoom)
                        closures.push(films[i])


                // calcolo film da mostrare

                const filmsToShow = []
                for (let i = 0; i < films.length; i++)
                    if (films[i].show)
                        filmsToShow.push(films[i])

                // gestire se i film sono più di 45



                showFilms(filmsToShow, date, closures)
            })
        }
    
        reader.onerror = ex => {
            console.log(ex)
        }
    
        reader.readAsBinaryString(file)
    })
})

function getFilms(XL_row_object) {
    const films = []

    for (let i = 0; i < XL_row_object.length; i++) {
        const row = Object.values(XL_row_object[i])

        if (isNaN(parseInt(row[0]))) continue

        const film = {
            room: parseInt(row[0]),
            title: row[4]
        }

        for (let i = 1; i < 3; i++) {
            if (typeof(row[i]) == "string")
                film[i == 1 ? "startTime" : "endTime"] = fromTimeToMinutes(row[i])
            else if (typeof(row[i]) == "object")
                film[i == 1 ? "startTime" : "endTime"] = fromTimeToMinutes(`${row[i].getHours()}:${row[i].getMinutes()}`)
            else {
                console.error("errore formattazione orario")
                return
            }
        }

        if (film.endTime <= 420) // la discriminante sono le 07:00
            film.endTime += 60*24

        films.push(film)
    }

    films.sort((a,b) => b.startTime - a.startTime) // ordine da quello che inizia dopo a quello che inizia prima

    const lastStartTimeSpan = 0 // quanto tempo (min) dopo l'orario d'ingresso dell'ultimo film vogliamo far uscire da davanti le persone (quindi le sale che finiscono vengono omesse dal foglio di lavoro)
    const lastStartTime = films[0].startTime + lastStartTimeSpan // tempo dopo il quale omettere la fine del film sul foglio (quando endTime > lastStartTime allora ometti dal foglio)




    // parte per calcolare orari reali

    const filmNames = []
    for (let i = 0; i < films.length; i++) {
        if (!filmNames.includes(films[i].title))
            filmNames.push(films[i].title)
    }
    console.log("filmNames")
    console.log(filmNames)

    const knownFilmNames = Object.keys(timetable)
    const unknownFilmNames = []

    for (let i = 0; i < filmNames.length; i++)
        if (!knownFilmNames.includes(filmNames[i]))
            unknownFilmNames.push(filmNames[i])

    if (unknownFilmNames.length != 0)
        return console.log("film time mancanti: ", unknownFilmNames)

    for (let i = 0; i < films.length; i++) {
        films[i].realEndTime = films[i].startTime + timetable[films[i].title]
    }




    films.sort((a,b) => a.realEndTime - b.realEndTime) // ordine da quello che finisce prima a quello che finisce dopo

    for (let i = 0; i < films.length; i++) {
        //controllo se mettere o meno nella tabella
        films[i].show = films[i].realEndTime < lastStartTime

        //controllo se la sala non riparte
        let lastProjectionInRoom = true

        for (let j = i+1; j < films.length; j++) { // importante che qui i film siano in ordine in cui finiscono
            if (films[i].room == films[j].room) {
                lastProjectionInRoom = false
                break
            }
        }

        films[i].lastProjectionInRoom = lastProjectionInRoom
    }

    return films
}

function getDate(XL_row_object) {
    for (let i = 0; i < XL_row_object.length; i++) {
        const row = Object.values(XL_row_object[i])

        if (typeof(row[0]) == "string" && row[0].includes("From")) {
            const splittedDate = row[0].split("From ")[1].split(" ")[0].split("/")
            return new Date(`${splittedDate[1]}/${splittedDate[0]}/${splittedDate[2]}`)
        }
    }
}


function showFilms(films, date, closures) {
    console.log(films, date, closures)

    const printWindow = window.open("", "Scheda Lavoro")
    
    printWindow.document.write(getSheet(films, date, closures))
  
    printWindow.focus()
    printWindow.print()
  
    // Close the new window after printing
    // printWindow.close()
}