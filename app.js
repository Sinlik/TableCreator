let body = document.querySelector('body');
let submitBtn = document.querySelector('button#submit');
let tableColumn = document.querySelector('#tableInput #columnInput input');
let tableRow = document.querySelector('#tableInput #rowInput input');

let debugging = document.createElement("div")

debugging.innerText = "Debugging Text: " + submitBtn

// body.append(debugging)
// settign variables to be defined later
let tableColumnValue;
let tableHeaderValue;

// start the table process of collecting the headers for creating the table
let tableProcess = function () {
    tableHeaderValue = parseFloat(tableRow.value)

    const table = document.createElement('table');
    table.id = "getHeaders"

    let headerDiv = document.createElement('div')
    let headers = document.createElement('tr')

    headerDiv.innerText = "Header Values:"
    // create a header input for each header stated in the table input
    for (let i = 0; i < tableHeaderValue; i++) {
        let td = document.createElement("td")
        let tdInput = document.createElement('input')
        tdInput.className = "headerVal" + (i+1)
        td.append(tdInput)
        headers.append(td)
    }
    headerDiv.append(headers)
    table.append(headerDiv)

    let submitHeadersBtn = document.createElement("button")
    submitHeadersBtn.innerText = "submitHeader"
    body.append(table)
    body.append(submitHeadersBtn)

    submitHeadersBtn.addEventListener("click", function () {
        createHeadersWithVals();
    }, 0)
}
let createHeadersWithVals = function () {
    // creating headers
    const table = document.createElement('table');
    let submitTableVals = document.createElement('button')

    submitTableVals.innerText = "submit"
    let tr = document.createElement('tr')
    for (let i = 0; i < tableRowValue; i++) {
        let headers = document.createElement("th")
        let headersValSearch = "table#getHeaders div tr td input.headerVal" + (i + 1)
        let getHeaderVal = document.querySelector(headersValSearch)
        headers.innerText = getHeaderVal.value
        tr.append(headers)
    }
    table.append(tr)
    body.append(table)
    let addItemBtn = document.createElement('button');
    addItemBtn.innerText = "+"
    table.append(addItemBtn)

    addItemBtn.addEventListener('click', function () {
        tableColumnValue++;
        let tr = document.createElement('tr')
        for (let row = 0; row < tableHeaderValue; row++) {
            let td = document.createElement('td')
            let tdInput = document.createElement('input')
            let headersValSearch = "table#getHeaders div tr td input.headerVal" + (row + 1)
            let getHeaderVal = document.querySelector(headersValSearch)
            tdInput.className = getHeaderVal.value + (tableColumnValue)
            td.append(tdInput)
            tr.append(td);
        }
        tr.append(document.createElement('br'))
        table.append(tr);
        table.appendChild(addItemBtn)
        body.append(table);
        body.append(submitTableVals)
    }, 0)
    submitTableVals.addEventListener("click", function () {
        createTable()
    }, 0)
}

let createTable = function () {
    const table = document.createElement('table');
    let tr = document.createElement('tr')
    // creating the headers
    for (let i = 0; i < tableRowValue; i++) {
        let headers = document.createElement("th")
        let headersValSearch = "table#getHeaders div tr td input.headerVal" + (i + 1)
        let getHeaderVal = document.querySelector(headersValSearch)
        headers.innerText = getHeaderVal.value
        tr.append(headers)
    }
    table.append(tr)
    body.append(table)
    // creating table items
    for (let col = 0; col < tableColumnValue; col++) {
        let tr = document.createElement('tr')
        for (let row = 0; row < tableRowValue; row++) {
            let td = document.createElement('td')
            let headersValSearch = "table#getHeaders div tr td input.headerVal" + (row + 1)
            let getHeaderVal = document.querySelector(headersValSearch)
            tableValTdElement = document.querySelector("table tr td input." + getHeaderVal.value + (col + 1))
            console.log("table tr td input." + getHeaderVal.value + (col + 1))
            td.innerText = tableValTdElement.value
            tr.append(td);
        }
        tr.append(document.createElement('br'))
        table.append(tr);
    }
    body.append(table)
}

submitBtn.addEventListener("click", function () {
    tableRowValue = parseFloat(tableRow.value)
    tableColumnValue = 0
    tableProcess();
}, 0);
