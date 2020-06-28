function generatePDFReport(table){
    var dataForPDF = table.id
    var getDataForPDF =  document.getElementById(`${dataForPDF}`).innerHTML;

    var windowPDFSave = window.open('','','width=800,height=800');
    windowPDFSave.document.write('<html><head>')
    windowPDFSave.document.write(`
        <title>Relatorio PDF</title></head>
        <style>
        body{
            background-color: #F3F3F3;
        }
        .table{
            margin-left: 15%;
        }
        </style>
        <body>
            <div style="text-align:center;">
            <img src="../../../../assets/img/logo/logo-black.png" width="200">
            <div class="table">${getDataForPDF}</div>
            </div>
        </body></html>
    `)
    windowPDFSave.document.close();
    windowPDFSave.print()
}