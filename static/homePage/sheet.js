function getSheet(films, date, closures) {
    const pages = Math.ceil(films.length / 45)

    const page = /*html*/`
    <div class="center">
    
    <div class="day-title">SCHEDA LAVORO</div>

    <div class="container">
        <div class="container-section left">
            <div class="check">CHECK</div>
            <div class="lables">
                <div class="room-lable">SALA</div>
                <div class="time-lable">ORA</div>
                <div class="name-lable">NOME</div>
            </div>
            <div class="rooms">
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row no-border-bottom"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
            </div>
            <div class="cleaning">
                <div class="cleaning-row"> <div class="cleaning-task">ATRIO-BAR-SELF</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">TAVOLI-POSACENERI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">CORRIDOI-BAGNI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">SACCHI-CESTINI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">PERIMETRO LATO 6</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row no-border-bottom "> <div class="cleaning-task">PERIMETRO LATO 12</div> <div class="cleaning-name"></div> </div>
            </div>
        </div>
        <div class="container-section center">
            <div class="check">CHECK</div>
            <div class="lables">
                <div class="room-lable">SALA</div>
                <div class="time-lable">ORA</div>
                <div class="name-lable">NOME</div>
            </div>
            <div class="rooms">
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row no-border-bottom"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
            </div>
            <div class="cleaning">
                <div class="cleaning-row"> <div class="cleaning-task">ATRIO-BAR-SELF</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">TAVOLI-POSACENERI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">CORRIDOI-BAGNI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">SACCHI-CESTINI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">PERIMETRO LATO 6</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row no-border-bottom "> <div class="cleaning-task">PERIMETRO LATO 12</div> <div class="cleaning-name"></div> </div>
            </div>
        </div>
        <div class="container-section right">
            <div class="check">CHECK</div>
            <div class="lables">
                <div class="room-lable">SALA</div>
                <div class="time-lable">ORA</div>
                <div class="name-lable">NOME</div>
            </div>
            <div class="rooms">
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
                <div class="rooms-row no-border-bottom"> <div class="room"></div> <div class="time"></div> <div class="name"></div> </div>
            </div>
            <div class="cleaning">
                <div class="cleaning-row"> <div class="cleaning-task">ATRIO-BAR-SELF</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">TAVOLI-POSACENERI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">CORRIDOI-BAGNI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">SACCHI-CESTINI</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row"> <div class="cleaning-task">PERIMETRO LATO 6</div> <div class="cleaning-name"></div> </div>
                <div class="cleaning-row no-border-bottom "> <div class="cleaning-task">PERIMETRO LATO 12</div> <div class="cleaning-name"></div> </div>
            </div>
        </div>
        <div class="closures-section closures">
            <div class="closures-rooms">
                <div class="closures-row title"> CHIUSURE </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row no-border-bottom"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
            </div>

            <div class="closures-rooms">
                <div class="closures-row title"> PAUSE </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
                <div class="closures-row no-border-bottom"> <div class="closures-room"></div> <div class="closures-time"></div> </div>
            </div>
        </div>
    </div>
</div>
    `
    
    return /*html*/`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Scheda Lavoro</title>
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                -webkit-user-drag: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                -webkit-tap-highlight-color: transparent;
            }
    
            html {
                font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
            }
    
            .row {
                display: flex;
                flex-direction: row;
            }
    
            .column {
                display: flex;
                flex-direction: column;
            }
    
            .pointer {
                cursor: pointer;
            }
    
            .hidden {
                display: none;
            }
    
            @page {
                size: landscape; /* Set page orientation to landscape */
            }
    
            .day-title {
                width: 90vw;
                margin-right: 10vw;
                height: 4vh;
    
                display: flex;
                align-items: self-start;
                justify-content: center;
                font-weight: bold;
    
                font-size: 1.6vw;
    
            }
    
            .container {
                width: 100vw;
                height: 95vh;
                /* border-style: solid; */
    
                display: flex;
                flex-direction: row;
            }
    
            .container-section {
                width: calc(calc(90vw - 10vh)/3);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .container-section.left {
                margin-left: 0;
                margin-right: 2.5vh;
            }
            .container-section.center {
                margin-left: 2.5vh;
                margin-right: 2.5vh;
            }
            .container-section.right {
                margin-left: 2.5vh;
                margin-right: 0;
            }
    
            .closures-section {
                width: 10vw;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: self-end;
    
            }
    
            .check {
                width: 100%;
                height: 10vh;
                border-style: solid;
                border-width: 0.01vw;
                margin-bottom: 1vh;
                padding: 1.3%;
                font-size: 1vw;
                color: rgba(0, 0, 0, 0.63);
                border-color: black;
            }
    
            .lables {
                width: 100%;
                height: 1.5vh;
                margin-bottom: 0.5vh;
                display: flex;
                flex-direction: row;
    
                font-size: 1vw;
                color: rgba(0, 0, 0, 0.63);
    
            }
    
            .room-lable {
                width: 20%;
                height: 1vh;
                margin-bottom: 0.5vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
            .time-lable {
                width: 20%;
                height: 1vh;
                margin-bottom: 0.5vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
            .name-lable {
                width: 80%;
                height: 1vh;
                margin-bottom: 0.5vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
    
            .rooms {
                width: 100%;
                height: 60vh;
                border-style: solid;
                border-width: 0.01vw;
                margin-bottom: 2vh;
    
                display: flex;
                flex-direction: column;
    
                font-size: 1.2vw;
            }
    
            .rooms-row {
                width: 100%;
                height: 4vh;
                border-bottom-style: solid;
                border-bottom-width: 0.01vw;
    
                display: flex;
                flex-direction: row;
    
                font-size: 1.2vw;
            }
    
            .room{
                width: 20%;
                height: 4vh;
                border-right-style: solid;
                border-right-width: 0.01vw;
    
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
            .time{
                width: 20%;
                height: 4vh;
                border-right-style: solid;
                border-right-width: 0.01vw;
    
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
            .name{
                width: 78%;
                height: 4vh;
    
                padding-left: 2%;
    
                display: flex;
                justify-content: left;
                align-items: center;
    
                font-style: italic;
            }
    
            .rooms-row.no-border-bottom {
                border-bottom-style: hidden;
            }
    
            .cleaning {
                width: 100%;
                height: 20vh;
                border-style: solid;
                border-width: 0.01vw;
            }
    
            .closures-rooms {
                width: 90%;
                border-style: solid;
                border-width: 0.01vw;
            }
    
            .closures-row {
                width: 100%;
                height: 3.5vh;
                border-bottom-style: solid;
                border-bottom-width: 0.01vw;
    
                display: flex;
                flex-direction: row;
            }
    
            .closures-row.no-border-bottom {
                border-bottom-style: hidden;
            }
    
            .closures-row.title {
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
    
                font-size: 1.1vw;
            }
    
            .closures-room {
                width: 40%;
                height: 3.5vh;
    
                border-right-style: solid;
                border-right-width: 0.01vw;
    
                display: flex;
                justify-content: center;
                align-items: center;
    
                font-size: 1.1vw;
            }
    
            .closures-time {
                width: 60%;
                height: 3.5vh;
    
                display: flex;
                justify-content: center;
                align-items: center;
    
                font-size: 1.1vw;
            }
    
            .cleaning-row {
                width: 100%;
                height: calc(20vh / 6);
    
                border-bottom-style: solid;
                border-bottom-width: 0.01vw;
            }
            .cleaning-row.no-border-bottom {
                border-bottom-style: hidden;
            }
    
            .cleaning-task {
                margin-left: 1%;
                width: 44%;
                height: calc(20vh / 6);
    
                border-right-style: solid;
                border-right-width: 0.01vw;
    
                font-size: 1vw;
                display: flex;
                justify-content: flex-start;
                align-items: center;
    
                color: rgba(0, 0, 0, 0.63);
                border-color: black;
            }
        </style>
    </head>
    <body>

        ${
            (() => {
                let pageSum = ""

                for (let i = 0; i < pages; i++)
                    pageSum += page

                return pageSum
            })()
        }
 

        <script>
            const films = ${JSON.stringify(films)}
            const date = new Date(${JSON.stringify(date)})
            const closures = ${JSON.stringify(closures)}

            const months = ["GENNAIO", "FEBBRAIO", "MARZO", "APRILE", "MAGGIO", "GIUGNO", "LUGLIO", "AGOSTO", "SETTEMBRE", "OTTOBRE", "NOVEMBRE", "DICEMBRE"]


            const dayTitles = document.getElementsByClassName("day-title")
            const pageNum = dayTitles.length

            for (let i = 0; i < dayTitles.length; i++) {
                dayTitles[i].innerText = "SCHEDA LAVORO - " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + ((dayTitles.length > 1) ? " - PAGINA " + parseInt(i+1) : "")
            }

            document.title = "SCHEDA LAVORO - " + formatString(date.getDate().toString()) + "/" + formatString((date.getMonth() + 1).toString()) + "/" + date.getFullYear()

            console.log(films, date, closures)

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

                return formatString(h.toString()) + ":" + formatString(m.toString())
            }

            const rows = document.getElementsByClassName("rooms-row")

            for (let i = 0; i < films.length; i++) {
                rows[i].children[0].innerText = films[i].room
                rows[i].children[1].innerText = fromMinutesToTime(films[i].realEndTime)
                if (films[i].lastProjectionInRoom)
                    rows[i].children[2].innerText = "NR"
            }


            const closuresRows = document.getElementsByClassName("closures-row")
            console.log(closuresRows)

            for (let page = 0; page < pageNum; page++) {
                for (let i = 0; i < closures.length; i++) {
                    closuresRows[i + (12*(page*2)) + ((page*2)+1)].children[0].innerText = closures[i].room
                    closuresRows[i + (12*(page*2)) + ((page*2)+1)].children[1].innerText = fromMinutesToTime(closures[i].realEndTime)
                }
            }


        </script>
        
    </body>
    </html>`
}