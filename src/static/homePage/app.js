const url = document.getElementById("hidden-url").innerText; //document.getElementById("hidden-url").remove()

function rimuoviVirgolette(str) {
    const virgolette = /["'`"]/g;
    return str.replace(virgolette, "");
}

// apertura pagina laterale grigia

let isGreyPageOpen = false

function openGreyPage(open = true) {
    transitionGoing = true

    if (open)
        document.getElementById("rectangle").style.transition = "width 1s cubic-bezier(0.6, 0, 0.29, 0.96)"
    else
        document.getElementById("rectangle").style.transition = "width 1s cubic-bezier(0.6, 0.29, 0, 0.96)"

    
    setTimeout(() => {
        document.getElementById("rectangle").style.transition = ""
        transitionGoing = false
    }, 1000)

    if (open) {
        document.getElementById("rectangle").classList.add("open")
        isGreyPageOpen = true
    }
    else {
        document.getElementById("rectangle").classList.remove("open")
        isGreyPageOpen = false
    }
}

// animazioni bottoni arancioni principali

const mainButtons = document.getElementsByClassName("main-action")
for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("mousedown", () => {
        mainButtons[i].classList.add("click")
    })
    mainButtons[i].addEventListener("mouseleave", () => {
        mainButtons[i].classList.remove("click")
    })
    mainButtons[i].addEventListener("mouseup", () => {
        mainButtons[i].classList.remove("click")
    })
}

// nasconde i 3 pulsanti a fondo pagina mentre si apre la scheda grigia laterale

function hideBottomBarFor500ms() {
    const bottomBar = document.getElementById("bottom-bar")
    bottomBar.classList.add("hide")
    setTimeout(() => {
        bottomBar.style.transition = "opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
        bottomBar.classList.remove("hide")
    }, 700)
}



let screenNum = 1
let transitionGoing = false

function screen1toScreen2() {
    transitionGoing = true

    if (screenNum != 1) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 2`)
        return
    }
    screenNum = 2

    document.getElementById("bottom-bar").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"

    document.getElementById("tsc-logo").classList.add("hide")
    document.getElementById("top-action").classList.add("hide")
    
        setTimeout(() => {
            document.getElementById("center-actions").classList.add("hide")
    
            hideBottomBarFor500ms()

            setTimeout(() => {
                openGreyPage()

                setTimeout(() => {
                    document.getElementById("content").classList.add("move-right")


                    setTimeout(() => {
                        document.getElementById("content").classList.add("show")

                        document.getElementById("center-actions").style.transition = "transform 0ms cubic-bezier(0.48, 0.02, 1, 1), opacity 0ms cubic-bezier(0.48, 0.02, 1, 1)"
                        document.getElementById("center-actions").classList.remove("hide")
                        
                        document.getElementById("screen-1").style.display = "none"
                        document.getElementById("screen-2").style.display = "block"
                        
                        document.getElementById("screen-1-topbar").style.display = "none"
                        document.getElementById("screen-2-topbar").style.display = "flex"

                        document.getElementById("screen-2-topbar").classList.add("show")

                        transitionGoing = false
                    }, 400)
                }, 250)
            }, 250)
        }, 20)

}

function screen2toScreen1() {
    transitionGoing = true

    if (screenNum != 2) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 1`)
        return
    }
    screenNum = 1

    document.getElementById("screen-2-topbar").classList.remove("show")

    document.getElementById("content").classList.remove("show")
    openGreyPage(false)
    setTimeout(() => {
        document.getElementById("screen-1").style.display = "block"
        document.getElementById("screen-2").style.display = "none"

        document.getElementById("content").classList.remove("move-right")

        setTimeout(() => {
            document.getElementById("screen-1-topbar").style.display = "flex"
            document.getElementById("screen-2-topbar").style.display = "none"

            document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
            document.getElementById("center-actions").classList.remove("hide")

            document.getElementById("top-action").style.transition = "transform 500ms cubic-bezier(0.03, 0.73, 1, 1), opacity 500ms cubic-bezier(0, 0.87, 1, 1)"
            document.getElementById("tsc-logo").style.transition = "transform 500ms cubic-bezier(0.03, 0.73, 1, 1), opacity 500ms cubic-bezier(0, 0.87, 1, 1)"
            setTimeout(() => {
                document.getElementById("top-action")

                document.getElementById("top-action").classList.remove("hide")
                document.getElementById("tsc-logo").classList.remove("hide")

                transitionGoing = false
            }, 100)
        }, 100)

    }, 400)

}

document.getElementById("create-new-sheet").addEventListener("click", screen1toScreen2)
document.getElementById("create-new-sheet").addEventListener("touch", screen1toScreen2)


function activeLoading(active = true) {
    if (active) {
        document.getElementById("file-upload-opacity").classList.add("hide")
        setTimeout(() => {
            document.getElementById("file-upload-text").style.display = "none"
            document.getElementById("main-action-upload").style.display = "none"
            document.getElementById("file-upload-label").classList.add("loading")
            document.getElementById("main-action-loading").style.display = "block"

            document.getElementById("file-upload-opacity").classList.remove("hide")
        }, 200);

    } else {
        document.getElementById("main-action-loading").style.display = "none"
        document.getElementById("file-upload-label").classList.remove("loading")
        document.getElementById("file-upload-text").style.display = "block"
        document.getElementById("main-action-upload").style.display = "block"
    }
}



let skipScreen3 = false

document.getElementById("back").addEventListener("click", back)
document.getElementById("back").addEventListener("touch", back)

    
function back() {
    if (transitionGoing) return

    if (screenNum == 2) {
        screen2toScreen1()
        filmNames = []
        films404 = []
        filmsDataFromServer = []
        endTimeDifferences = {}
        date = undefined
        filmFromExcel = undefined
        lastStartTime = undefined
    }
    else if (screenNum == 3) screen3toScreen2()
    else if (screenNum == 4) {
        if (skipScreen3)
            screen4toScreen2()
        else
            screen4toScreen3()
    }
}





// movimento barra progressione schermata grigia --> moveProgressionLine(0 || 50 || 100)

function activeCircle(active, num, afterMs) {
    if (active) {
        setTimeout(() => {
            document.getElementById("action-line-circle-" + num).classList.add("active")
            document.getElementById("action-line-inside-circle-" + num).classList.add("hide")
        }, afterMs)
    } else {
        setTimeout(() => {
            document.getElementById("action-line-circle-" + num).classList.remove("active")
            document.getElementById("action-line-inside-circle-" + num).classList.remove("hide")
        }, afterMs)
    }
}

let lastPercent = 0

function moveProgressionLine(percent) {
    if (lastPercent == percent || (percent != 0 && percent != 50 && percent != 100)) return

    if (lastPercent == 0 && percent == 100) {
        activeCircle(true, 2, 250)
        setTimeout(() => document.getElementById("action-line-inside-circle-1").classList.remove("hide"), 1)
        activeCircle(true, 3, 500)
        setTimeout(() => document.getElementById("action-line-inside-circle-2").classList.remove("hide"), 251)
    } else if (lastPercent == 0 && percent == 50) {
        activeCircle(true, 2, 500)
        setTimeout(() => document.getElementById("action-line-inside-circle-1").classList.remove("hide"), 1)
    } else if (lastPercent == 50 && percent == 100) {
        activeCircle(true, 3, 500)
        setTimeout(() => document.getElementById("action-line-inside-circle-2").classList.remove("hide"), 1)

    } else if (percent == 0 && lastPercent == 100) {
        activeCircle(false, 3, 0)
        setTimeout(() => document.getElementById("action-line-inside-circle-2").classList.add("hide"), 1)
        activeCircle(false, 2, 250)
        setTimeout(() => document.getElementById("action-line-inside-circle-1").classList.add("hide"), 251)
    } else if (percent == 0 && lastPercent == 50) {
        activeCircle(false, 2, 0)
        setTimeout(() => document.getElementById("action-line-inside-circle-1").classList.add("hide"), 1)
    } else if (percent == 50 && lastPercent == 100) {
        activeCircle(false, 3, 0)
        setTimeout(() => document.getElementById("action-line-inside-circle-2").classList.add("hide"), 1)
    }

    document.getElementById("action-bg-line-orange").style.width = `${percent}%`
    lastPercent = percent
}


function screen2toScreen3() {
    transitionGoing = true

    if (screenNum != 2) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 2`)
        return
    }
    screenNum = 3
    moveProgressionLine(50)

    document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
    document.getElementById("center-actions").classList.add("hide")

    setTimeout(() => {
        document.getElementById("center-actions").style.transition = "transform 1ms cubic-bezier(0.48, 0.02, 1, 1), opacity 1ms cubic-bezier(0.48, 0.02, 1, 1)"

        document.getElementById("center-actions").classList.remove("hide")
        document.getElementById("center-actions").classList.add("hideFromRight")
        
        document.getElementById("screen-2").style.display = "none"
        document.getElementById("screen-3").style.display = "block"
        setTimeout(() => {
            document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.02, 0.48, 1, 1), opacity 500ms cubic-bezier(0.02, 0.48, 1, 1)"

            document.getElementById("center-actions").classList.remove("hideFromRight")

            transitionGoing = false
        }, 100);
    }, 700);
}

function screen3toScreen2() {
    transitionGoing = true

    if (screenNum != 3) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 3`)
        return
    }
    screenNum = 2
    moveProgressionLine(0)

    document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
    document.getElementById("center-actions").classList.add("hideFromRight")

    setTimeout(() => {
        document.getElementById("center-actions").style.transition = "transform 1ms cubic-bezier(0.48, 0.02, 1, 1), opacity 1ms cubic-bezier(0.48, 0.02, 1, 1)"

        document.getElementById("center-actions").classList.remove("hideFromRight")
        document.getElementById("center-actions").classList.add("hide")
        
        document.getElementById("screen-3").style.display = "none"
        document.getElementById("screen-2").style.display = "block"
        setTimeout(() => {
            document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.02, 0.48, 1, 1), opacity 500ms cubic-bezier(0.02, 0.48, 1, 1)"

            document.getElementById("center-actions").classList.remove("hide")

            transitionGoing = false
        }, 100);
    }, 700);
}

document.getElementById("open-lights-times").addEventListener("click", openLightsTimesEventListener)
document.getElementById("open-lights-times").addEventListener("touch", openLightsTimesEventListener)
    
function openLightsTimesEventListener() {
    scrollSectionReset(filmsDataFromServer)

    openLightsTimes()
}

function openLightsTimes(open = true) {
    if (transitionGoing) return

    transitionGoing = true
    if (open) {
        document.getElementById("black-overlay").classList.add("active")
        setTimeout(() => {
            document.getElementById("lights-times-bg").classList.add("active")
            transitionGoing = false
        }, 200)
    } else {
        document.getElementById("lights-times-bg").classList.remove("active")
        setTimeout(() => {
            document.getElementById("black-overlay").classList.remove("active")
            transitionGoing = false
        }, 200)
    }
}

document.getElementById("lights-times-actions-back").addEventListener("click", lightsTimesActionsBack)
document.getElementById("lights-times-actions-back").addEventListener("touch", lightsTimesActionsBack)
function lightsTimesActionsBack() {
    openLightsTimes(false)
    setTimeout(scrollSectionReset, 500)
}


function screen3toScreen4() {
    transitionGoing = true

    if (screenNum != 3) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 4`)
        return
    }
    screenNum = 4
    moveProgressionLine(100)

    document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
    document.getElementById("center-actions").classList.add("hide")

    setTimeout(() => {
        document.getElementById("center-actions").style.transition = "transform 1ms cubic-bezier(0.48, 0.02, 1, 1), opacity 1ms cubic-bezier(0.48, 0.02, 1, 1)"

        document.getElementById("center-actions").classList.remove("hide")
        document.getElementById("center-actions").classList.add("hideFromRight")
        
        document.getElementById("screen-3").style.display = "none"
        document.getElementById("screen-4").style.display = "block"
        setTimeout(() => {
            document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.02, 0.48, 1, 1), opacity 500ms cubic-bezier(0.02, 0.48, 1, 1)"

            document.getElementById("center-actions").classList.remove("hideFromRight")
            
            transitionGoing = false
        }, 100);
    }, 700);
}

function screen4toScreen3() {
    transitionGoing = true

    if (screenNum != 4) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 3`)
        return
    }
    screenNum = 3
    moveProgressionLine(50)

    document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
    document.getElementById("center-actions").classList.add("hideFromRight")

    setTimeout(() => {
        document.getElementById("center-actions").style.transition = "transform 1ms cubic-bezier(0.48, 0.02, 1, 1), opacity 1ms cubic-bezier(0.48, 0.02, 1, 1)"

        document.getElementById("center-actions").classList.remove("hideFromRight")
        document.getElementById("center-actions").classList.add("hide")
        
        document.getElementById("screen-4").style.display = "none"
        document.getElementById("screen-3").style.display = "block"
        setTimeout(() => {
            document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.02, 0.48, 1, 1), opacity 500ms cubic-bezier(0.02, 0.48, 1, 1)"

            document.getElementById("center-actions").classList.remove("hide")

            transitionGoing = false
        }, 100);
    }, 700);
}


function screen2toScreen4() {
    transitionGoing = true
    skipScreen3 = true
    
    if (screenNum != 2) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 4`)
        return
    }
    screenNum = 4
    moveProgressionLine(100)

    document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
    document.getElementById("center-actions").classList.add("hide")

    setTimeout(() => {
        document.getElementById("center-actions").style.transition = "transform 1ms cubic-bezier(0.48, 0.02, 1, 1), opacity 1ms cubic-bezier(0.48, 0.02, 1, 1)"

        document.getElementById("center-actions").classList.remove("hide")
        document.getElementById("center-actions").classList.add("hideFromRight")
        
        document.getElementById("screen-2").style.display = "none"
        document.getElementById("screen-4").style.display = "block"
        setTimeout(() => {
            document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.02, 0.48, 1, 1), opacity 500ms cubic-bezier(0.02, 0.48, 1, 1)"

            document.getElementById("center-actions").classList.remove("hideFromRight")
            transitionGoing = false
        }, 100);
    }, 700);
}

function screen4toScreen2() {
    transitionGoing = true
    skipScreen3 = false
    
    if (screenNum != 4) {
        console.warn(`non puoi passare dalla schermata ${screenNum} alla 3`)
        return
    }
    screenNum = 2
    moveProgressionLine(0)

    document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.48, 0.02, 1, 1), opacity 500ms cubic-bezier(0.48, 0.02, 1, 1)"
    document.getElementById("center-actions").classList.add("hideFromRight")

    setTimeout(() => {
        document.getElementById("center-actions").style.transition = "transform 1ms cubic-bezier(0.48, 0.02, 1, 1), opacity 1ms cubic-bezier(0.48, 0.02, 1, 1)"

        document.getElementById("center-actions").classList.remove("hideFromRight")
        document.getElementById("center-actions").classList.add("hide")
        
        document.getElementById("screen-4").style.display = "none"
        document.getElementById("screen-2").style.display = "block"
        setTimeout(() => {
            document.getElementById("center-actions").style.transition = "transform 500ms cubic-bezier(0.02, 0.48, 1, 1), opacity 500ms cubic-bezier(0.02, 0.48, 1, 1)"

            document.getElementById("center-actions").classList.remove("hide")
            transitionGoing = false
        }, 100);
    }, 700);
}







// const timetable = {
//     "ME CONTRO TE - IL FILM - OPERAZIONE SPIE": 85,
//     "THE WATCHERS - LORO TI GUARDANO": 126,
//     "IF - GLI AMICI IMMAGINARI": 130,
//     "HOTSPOT - AMORE SENZA RETE": 130,
//     "HAIKYU!! - BATTAGLIA ALL'ULTIMO RIFIUTO": 99,
//     "GARFIELD - UNA MISSIONE GUSTOSA": 120,
//     "FURIOSA: A MAD MAX SAGA": 166,
//     "IL REGNO DEL PIANETA DELLE SCIMMIE": 168,
//     "KINDS OF KINDNESS": 190,
//     "THE TUNNEL TO SUMMER - THE EXIT OF GOODBYES": 104,
//     "LA STANZA DEGLI OMICIDI": 118,
//     "(V.O.) KINDS OF KINDNESS": 190,
//     "(3D) GRAVITY": 110,
//     "L'ESORCISMO - ULTIMO ATTO": 119
// }

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

let filmNames = []
let films404 = []
let filmsDataFromServer = []
let endTimeDifferences = {}
let date = undefined
let filmFromExcel = undefined
const lastStartTimeSpan = 0 // quanto tempo (min) dopo l'orario d'ingresso dell'ultimo film vogliamo far uscire da davanti le persone (quindi le sale che finiscono vengono omesse dal foglio di lavoro)
let lastStartTime = undefined // tempo dopo il quale omettere la fine del film sul foglio (quando endTime > lastStartTime allora ometti dal foglio)

document.getElementById("file-upload").addEventListener("change", event => {
    const files = Array.from(event.target.files)

    if (files.length <= 0) {
        //avvisa che non sono stati caricati file
        console.error("nessun file caricato")
        showErrorMessage("File excel non valido", 'Non è stato caricato nessun file')
        return
    }

    if (files.length > 1) {
        //avvisa che sono stati caricati più di un file e che verrà considerato solo il primo
        console.warn("sono stati caricati più di un file, verrà considerato solo il primo")
        showErrorMessage("Upload multiplo", 'Puoi caricare solo 1 file alla volta')
        return
    }

    const file = files[0]

    let reader = new FileReader()

    reader.onload = async e => {
        let data = e.target.result

        let workbook = XLSX.read(data, {
            type: 'binary',
            cellDates: true
        })

        // console.log(workbook)
        // console.log(workbook.SheetNames)

        if (workbook.SheetNames.length <= 0) {
            showErrorMessage("File excel non valido", 'Il file risulta vuoto')
            console.warn("file excel vuoto")
            return
            //errore file vuoto
        }

        if (workbook.SheetNames.length > 1) {
            //avvisa che il file excel ha più di una pagina, ma che verra considerata solo la prima
            showErrorMessage("File con più schede", 'Solo la prima tab del file verrà considerata')
            console.warn("il file excel contiene più di una pagina, verrà considerata solo la prima")
        }
        
            
        const XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]])

        // console.log(XL_row_object)


        // aggiungi controlli qui sulla tabella excel per controllare sia quella giusta
        if (Object.values(XL_row_object[0])[0] != "Projection Schedule by Start Time") {
            showErrorMessage("File excel non valido", 'Inserisci solo "Projection Schedby Start Time"')
            return console.warn("non è stato inserito il file corretto\ninserire il file xls fornito dal software Vista 'Projection Schedule by Start Time'\nnon effettuare modifiche al file ad eccezione eventualmente degli orari di inizio del film")
        }


        filmNames = getFilmNames(XL_row_object)
        date = getDate(XL_row_object)
        filmFromExcel = getFilmsFromExcel(XL_row_object)
        lastStartTime = filmFromExcel[0].startTime + lastStartTimeSpan
    
        console.log("filmFromExcel")
        console.log(filmFromExcel)

        activeLoading()

        const result = await fetch(url + "api/films?list=" + JSON.stringify(filmNames), {
            method: "get",
            redirect: "follow"
        })
        
        const resultCopy = result.clone()
        
        try {
            filmsDataFromServer = await result.json()
        } catch (error) {
            console.warn("error in response", await resultCopy.text())
            return
        }
        
        console.log("filmsDataFromServer")
        console.log(filmsDataFromServer)

        for (let i = 0; i < filmsDataFromServer.length; i++) {
            if (filmsDataFromServer[i].status == 200) {
                endTimeDifferences[filmsDataFromServer[i].title] = filmsDataFromServer[i].endTimeDifference
            }
        }

        let all200 = true
        for (let i = 0; i < filmsDataFromServer.length; i++) {
            if (filmsDataFromServer[i].status != 200) {
                all200 = false
                break
            }
        }

        errorMessageCloseEv()

        if (all200) {
            // prendi i dati dei film dall'excel e esegui i calcoli
            elaborateFilmFromExcel()

            screen2toScreen4()
        } else {

            screen2toScreen3()
        }

        setTimeout(() => activeLoading(false), 1000)
    }
    
    reader.onerror = ex => {

        // gestisci errore generico

        console.warn("errore nella conversione", ex)
        return

    }
    
    reader.readAsBinaryString(file)

    document.getElementById("file-upload").value = ""
})

document.getElementById("download-sheet").addEventListener("click", downloadSheetEv)
document.getElementById("download-sheet").addEventListener("touch", downloadSheetEv)
    
function downloadSheetEv() {

    // calcolo chiusure
    const closures = []
    for (let i = 0; i < filmFromExcel.length; i++)
        if (filmFromExcel[i].lastProjectionInRoom)
            closures.push(filmFromExcel[i])


    // calcolo film da mostrare
    const filmsToShow = []
    for (let i = 0; i < filmFromExcel.length; i++)
        if (filmFromExcel[i].show)
            filmsToShow.push(filmFromExcel[i])


    showFilms(filmsToShow, date, closures)
}


function getFilmNames(XL_row_object) {
    const filmNames_ = []

    for (let i = 0; i < XL_row_object.length; i++) {
        const row = Object.values(XL_row_object[i])

        if (isNaN(parseInt(row[0]))) continue

        const filmName = row[4]

        if (typeof(filmName) != "string" || filmName.length == 0) continue

        if (!filmNames_.includes(filmName))
            filmNames_.push(filmName)
    }

    return filmNames_
}



document.getElementById("lights-times-actions-save").addEventListener("touch", lightsTimesActionsSave) 
document.getElementById("lights-times-actions-save").addEventListener("click", lightsTimesActionsSave) 
    
function lightsTimesActionsSave() {

    let blockExecution = false
    Array.from(document.getElementsByClassName("film-time")).forEach(el => {
        for (let i = 0; i < filmFromExcel.length; i++) {
            if (filmFromExcel[i].title == el.id) {
                const timeInput = document.getElementById(el.id + "-time-input").value

                if (timeInput == undefined || timeInput == "") {
                    filmTimeShake(document.getElementById(el.id))
                    console.log("nessun orario inserito")
                    blockExecution = true
                    return
                }

                if (timeInput == "00:00") {
                    filmTimeShake(document.getElementById(el.id))
                    console.log("orario non valido")
                    blockExecution = true
                    return
                }

                if (fromTimeToMinutes(timeInput) >= filmFromExcel[i].duration) {
                    filmTimeShake(document.getElementById(el.id))
                    console.log("orario non valido")
                    blockExecution = true
                    return
                }
            }
        }  
    })

    if (blockExecution) return

    openLightsTimes(false)

    const films404TimeValues = []
    films404.forEach(film404 => {
        if (document.getElementById(`${film404.title}-time-input`).value != "")
            films404TimeValues.push({
                title: film404.title,
                durationWithoutCredits: fromTimeToMinutes(document.getElementById(`${film404.title}-time-input`).value)
            })
    })

    console.log("films404TimeValues")
    console.log(films404TimeValues)


    for (let j = 0; j < films404TimeValues.length; j++) {
        const films404TimeValue = films404TimeValues[j]

        for (let i = 0; i < filmFromExcel.length; i++) {
            if (films404TimeValue.title == filmFromExcel[i].title) {
                endTimeDifferences[films404TimeValue.title] = filmFromExcel[i].duration - films404TimeValue.durationWithoutCredits
                break
            }
        }
    }

    console.log("endTimeDifferences")
    console.log(endTimeDifferences)


    const films404TimeValuesToSendToServer = {}
    for (let i = 0; i < films404TimeValues.length; i++) {
        films404TimeValuesToSendToServer[films404TimeValues[i].title] = endTimeDifferences[films404TimeValues[i].title]
    }

    console.log("films404TimeValuesToSendToServer")
    console.log(films404TimeValuesToSendToServer)

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    fetch(url + "api/films", {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify(films404TimeValuesToSendToServer),
        redirect: "follow"
    })


    elaborateFilmFromExcel()


    console.log("filmFromExcel elaborati")
    console.log(filmFromExcel)


    screen3toScreen4()

}

function elaborateFilmFromExcel() {
    for (let i = 0; i < filmFromExcel.length; i++) {
        filmFromExcel[i].endTimeDifference = endTimeDifferences[filmFromExcel[i].title]
        filmFromExcel[i].realEndTime = filmFromExcel[i].endTime - endTimeDifferences[filmFromExcel[i].title]
    }

    filmFromExcel.sort((a,b) => a.realEndTime - b.realEndTime) // ordine da quello che finisce prima a quello che finisce dopo


    for (let i = 0; i < filmFromExcel.length; i++) {
        //controllo se mettere o meno nella tabella
        filmFromExcel[i].show = filmFromExcel[i].realEndTime < lastStartTime

        //controllo se la sala non riparte
        let lastProjectionInRoom = true

        for (let j = i+1; j < filmFromExcel.length; j++) { // importante che qui i film siano in ordine in cui finiscono
            if (filmFromExcel[i].room == filmFromExcel[j].room) {
                lastProjectionInRoom = false
                break
            }
        }

        filmFromExcel[i].lastProjectionInRoom = lastProjectionInRoom
    }
}

function scrollSectionReset(filmsDataFromServer) {
    const scrollSection = document.getElementById("scroll-section")

    scrollSection.innerHTML = ""

    if (filmsDataFromServer != undefined) {
        filmsDataFromServer.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))

        films404 = []
        filmsDataFromServer.forEach(film404 => {
            if (film404.status == 404) {
                films404.push(film404)
            }
        })
    
        films404.forEach(film404 => scrollSection.innerHTML += `
            <div class="film-time" id="${film404.title}">
                <div class="film-time-left">
                    <div class="film-name">${film404.title}</div>
                </div>
                <div class="film-time-right">
                    <input id="${film404.title}-time-input" type="time">
                    <div class="time-input-h">h</div>
                    <div class="time-input-min">min</div>
                </div>
            </div>
        `)
    }

}



function getFilmsFromExcel(XL_row_object) {
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

        film.duration = film.endTime - film.startTime

        films.push(film)
    }

    films.sort((a,b) => b.startTime - a.startTime) // IMPORTANTE NON CANCELLARE ordine da quello che inizia dopo a quello che inizia prima - così da trovare l'ultima partenza di film

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
    // console.log(films, date, closures)

    const printWindow = window.open("", "Scheda Lavoro")
    
    printWindow.document.write(getSheet(films, date, closures))
  
    printWindow.focus()

    printWindow.print()
  
    // Close the new window after printing
    // printWindow.close()
}


document.getElementById("github-link").addEventListener("click", () => window.open("https://github.com/tommasomoro8", '_blank').focus())
document.getElementById("github-link").addEventListener("touch", () => window.open("https://github.com/tommasomoro8", '_blank').focus())

document.getElementById("tsc-website").addEventListener("click", () => window.open("https://www.thespacecinema.it", '_blank').focus())
document.getElementById("tsc-website").addEventListener("touch", () => window.open("https://www.thespacecinema.it", '_blank').focus())




function filmTimeShake(el) {
    el.classList.add("red")
    el.classList.add("shake")
    setTimeout(() => el.classList.remove("red"), 500)
    setTimeout(() => el.classList.remove("shake"), 1000)
}


let isErrorMessageOpen = false
const errorMessageEl = document.getElementById("error-message")

function showErrorMessage(text, subtext) {
    document.getElementById("error-message-text").innerText = text
    document.getElementById("error-message-sub-text").innerText = subtext

    isErrorMessageOpen = true

    setTimeout(() => {
        errorMessageEl.classList.add("show")
    }, 100)
    

    setTimeout(() => {
        if (isErrorMessageOpen)
            errorMessageEl.classList.remove("show")
    }, 10000)
}

document.getElementById("error-message-close").addEventListener("click", errorMessageCloseEv)

function errorMessageCloseEv() {
    isErrorMessageOpen = false
    errorMessageEl.classList.remove("show")
}



function openFilmList(open = true) {
    if (transitionGoing) return

    transitionGoing = true
    if (open) {
        document.getElementById("black-overlay-film-container").classList.add("active")
        setTimeout(() => {
            document.getElementById("film-list").classList.add("active")
            transitionGoing = false
        }, 200)
    } else {
        document.getElementById("film-list").classList.remove("active")
        setTimeout(() => {
            document.getElementById("black-overlay-film-container").classList.remove("active")
            transitionGoing = false
        }, 200)
    }
}

let isTimetableOpen = false


function delateElement(elId) {
    const el = document.getElementById(elId)

    fetch(url + "api/film/" + conSenzaVirgolette[elId.split("-film-list")[0]], {
        method: "delete",
        redirect: "follow"
    })

    el.classList.add("delated")
    setTimeout(() => {
        el.remove()
    }, 510)
}

let conSenzaVirgolette = {}


async function openTopAction() {
    isTimetableOpen = true

    openFilmList()

    const result = await fetch(url + "api/all-films", {
        method: "get",
        redirect: "follow"
    })
    
    const resultCopy = result.clone()
    
    try {
        filmsDataFromServer = await result.json()
    } catch (error) {
        console.warn("error in response", await resultCopy.text())
        return
    }

    document.getElementById("film-list-scroll-section").classList.remove("loading")


    const filmScrollSection = document.getElementById("film-list-scroll-section")
    filmScrollSection.innerHTML = ""

    filmsDataFromServer.forEach(film => {
        filmScrollSection.innerHTML += `
            <div class="film-time filmscrollsect" id="${rimuoviVirgolette(film.title)}-film-list">
                <div class="film-time-left">
                    <div class="film-name">
                        <button onClick="delateElement('${rimuoviVirgolette(film.title)}-film-list')" class="main-action trash"><img class="main-action-plus trash" src="homePage/icons/trash.svg" alt=""></button>    
                        ${film.title}
                    </div>
                </div>
                <div class="film-time-right">
                    <div class="minDifference">- ${film.endTimeDifference} min</div>
                </div>
            </div>
        `
        conSenzaVirgolette[rimuoviVirgolette(film.title)] = film.title
    })

    reachTheBottom = false
    addElementToScroll()
}

document.getElementById("top-action").addEventListener("click", openTopAction)
document.getElementById("top-action").addEventListener("touch", openTopAction)



function closeTopAction() {
    isTimetableOpen = false
    openFilmList(false)

    setTimeout(() => {
        document.getElementById("film-list-scroll-section").innerHTML = ""
    }, 500)
}

document.getElementById("lights-times-actions-save-close").addEventListener("click", closeTopAction)
document.getElementById("lights-times-actions-save-close").addEventListener("touch", closeTopAction)



function isScrolledToBottom(element) {
    if (element.scrollHeight <= element.clientHeight)
        return true
  
    return element.scrollHeight - element.clientHeight - element.scrollTop <= 1;
}
  
const scrollableElement = document.getElementById("film-list-scroll-section")

let isLoadingMoreContent = false
  
scrollableElement.addEventListener('scroll', addElementToScroll)

let reachTheBottom = false

async function addElementToScroll()  {
    if (!isScrolledToBottom(scrollableElement)) return

    if (isLoadingMoreContent) return

    if (reachTheBottom) return


    const result = await fetch(url + "api/all-films?startAfter=" + document.getElementById("film-list-scroll-section").children[document.getElementById("film-list-scroll-section").children.length-1].id.split("-film-list")[0], {
        method: "get",
        redirect: "follow"
    })
    
    const resultCopy = result.clone()
    
    try {
        filmsDataFromServer = await result.json()
    } catch (error) {
        console.warn("error in response", await resultCopy.text())
        return
    }

    console.log(filmsDataFromServer)

    if (filmsDataFromServer.length == 0) reachTheBottom = true

    if (!isTimetableOpen) return

    const filmScrollSection = document.getElementById("film-list-scroll-section")

    filmsDataFromServer.forEach(film => {
        filmScrollSection.innerHTML += `
            <div class="film-time filmscrollsect" id="${rimuoviVirgolette(film.title)}-film-list">
                <div class="film-time-left">
                    <div class="film-name">
                        <button onClick="delateElement('${rimuoviVirgolette(film.title)}-film-list')" class="main-action trash"><img class="main-action-plus trash" src="homePage/icons/trash.svg" alt=""></button>    
                        ${film.title}
                    </div>
                </div>
                <div class="film-time-right">
                    <div class="minDifference">- ${film.endTimeDifference} min</div>
                </div>
            </div>
        `
    })

    addElementToScroll()
}