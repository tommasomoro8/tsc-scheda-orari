module.exports = () => {
    return /* html */ `

    <html lang="it">
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="homePage/style.css">
        <link rel="icon" type="image/x-icon" href="homePage/imgs/favicon.png">
        <title>TSC - Scheda Lavoro</title>
    </head>
    <body>

        <div id="error-message">
            <div id="error-message-left">
                <div id="error-message-text"></div>
                <div id="error-message-sub-text"></div>
            </div>
            <div id="error-message-right">
                <button id="error-message-close"><img class="main-action-plus x" src="homePage/icons/plus.svg" alt=""></button>    
            </div>
        </div>

        <div id="black-overlay-film-container">
            <div id="film-list">
                <div id="film-list-title">
                    <div class="lights-times-title-text">FILM</div>
                    <div class="lights-times-title-text">DIFFERENZA</div>
                </div>

                <!--div id="film-list-search"></div-->

                <div id="film-list-scroll-section" class="loading">
                    <img id="main-action-loading-scroll-film" src="homePage/icons/spin.svg" alt="">
                </div>
                
                <div id="lights-times-actions">
                    <button id="lights-times-actions-save-close" class="main-action save close"><img class="main-action-plus tick" src="homePage/icons/tick.svg" alt=""> Fatto</button>    
                </div>
            </div>
        </div>

        <div id="black-overlay">
            <div id="lights-times-bg">
                <div id="lights-times-title">
                    <div class="lights-times-title-text">FILM</div>
                    <div class="lights-times-title-text">ACCENSIONE LUCI DOPO</div>
                </div>
    
                <div id="scroll-section"></div>
                
                <div id="lights-times-actions">
                    <button id="lights-times-actions-back" class="main-action gray"><img class="main-action-plus x" src="homePage/icons/plus.svg" alt=""> Indietro</button>    
                    <button id="lights-times-actions-save" class="main-action save"><img class="main-action-plus tick" src="homePage/icons/tick.svg" alt=""> Fatto</button>    
                </div>
            </div>
        </div>
    
        <div id="gray-page">
            <div id="triangle"></div>
            <div id="rectangle"></div>
        </div>
    
        <div id="container">
            <div id="content">
                <div id="top-bar" class="top-bar">
                    <span id="screen-1-topbar">
                        <img id="tsc-logo" class="tsc-logo" src="homePage/imgs/tsclogo-noborder.jpeg" alt="TSC Logo">
                        <div class="top-bar-actions">
                            <button id="top-action" class="top-action"><img class="top-action-clock" src="homePage/icons/clock.svg" alt="">Consulta orari salvati</button>
                        </div>
                    </span>
                    <span id="screen-2-topbar" style="display: none;">
                        <div id="action-line">
                            <div id="action-bg-line"></div>
                            <div id="action-bg-line-orange"></div>
                            <div class="action-line-circle" id="action-line-circle-1">
                                <div class="action-line-inside-circle hide" id="action-line-inside-circle-1"></div>
                            </div>
                            <div class="action-line-circle" id="action-line-circle-2">
                                <div class="action-line-inside-circle" id="action-line-inside-circle-2"></div>
                            </div>
                            <div class="action-line-circle" id="action-line-circle-3">
                                <div class="action-line-inside-circle" id="action-line-inside-circle-3"></div>
                            </div>
    
                            <div id="action-line-text-container">
                                <div class="action-line-text" id="action-line-text-1">Carica l'XLS</div>
                                <div class="action-line-text" id="action-line-text-2">Inserisci orari luci</div>
                                <div class="action-line-text" id="action-line-text-3">Scarica la scheda</div>
                            </div>
    
                            <button id="back"><img class="back-orange-icon" src="homePage/icons/back-orange.svg" alt="">Indietro</button>
                        </div>
                    </span>
                </div>
    
                <div id="center-actions">
                    <span id="screen-1">
                        <div class="title">Scheda Lavoro</div>
                        <div class="sub-title">Quando sei pronto, crea una nuova scheda di lavoro<br>caricando il file XLS contenente gli orari di inizio dei film di oggi</div>
                        <button id="create-new-sheet" class="main-action"><img class="main-action-plus" src="homePage/icons/plus.svg" alt=""> Crea una nuova scheda lavoro</button>    
                    </span>
                    <span id="screen-2" style="display: none;">
                        <div class="title">Carica l’XLS</div>
                        <div class="sub-title screen2">Carica "Projection Schedule by Start Time". Se devi modificare l'orario d'inizio dei film,<br>fallo dall'excel prima di caricarlo e ricorda di modificare la fine dello stesso arco di tempo</div>
                        <label for="file-upload" id="file-upload-label" class="main-action lable">
                            <span id="file-upload-opacity">
                                <img class="main-action-upload" id="main-action-upload" src="homePage/icons/upload.svg" alt="">
                                <span id="file-upload-text">Carica il file XLS</span>
                                <img id="main-action-loading" style="display: none;" src="homePage/icons/spin.svg" alt="">
                            </span>
                        </label>
                        <input style="display: none;" type="file" id="file-upload" accept=".xls, .xlsx" />  
                    </span>
                    <span id="screen-3" style="display: none;">
                        <div class="title">Inserisci orari accensione luci</div>
                        <div class="sub-title">Controlla e inserisci gli orari in cui si accendono le luci dei film<br>per permettere agli addetti di sala di entrare al momento giusto</div>
                        <button id="open-lights-times" class="main-action"><img class="main-action-plus" src="homePage/icons/plus.svg" alt=""> Inserisci gli orari</button>    
                    </span>
                    <span id="screen-4" style="display: none;">
                        <div class="title">La scheda è pronta!</div>
                        <div class="sub-title">Ora puoi scaricare o stampare la scheda lavoro.<br>Sulla stessa sono presenti anche gli orari di chiusura delle sale.</div>
                        <button id="download-sheet" class="main-action"><img class="main-action-plus" src="homePage/icons/download.svg" alt=""> Scarica o stampa la scheda</button>    
                    </span>
                </div>
    
                <div id="bottom-bar" class="bottom-bar">
                    <!--button class="bottom-link" id="event-list">Lista eventi</button-->
                    <button class="bottom-link" id="github-link">Il mio GitHub</button>
                    <!--button class="bottom-link">Supporto</button-->
                    <button class="bottom-link" id="tsc-website">Sito ufficiale TSC</button>
                </div>
            </div>
        </div>
    
        <div id="hidden-url">${process.env.URL}</div>

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
        <script src="homePage/sheet.js"></script>
        <script src="homePage/app.js"></script>
    </body>
    </html>

    `
}