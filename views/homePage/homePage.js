module.exports = () => {
    return /* html */ `

<html lang="it">
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/homePage/style.css">
    <link rel="icon" type="image/x-icon" href="">
    <title></title>
</head>
<body>
    <button id="scarica"><label for="file-upload" id="file-upload-label">Carica il file XLS</label></button>
    <input style="display: none;" type="file" id="file-upload" accept=".xls, .xlsx" />
    
    <br><button id="download-sheet">Scarica o stampa la scheda</button>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
    <script src="/homePage/sheet.js"></script>
    <script src="/homePage/app.js"></script>
</body>
</html>

    `
}