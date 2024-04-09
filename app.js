let body = document.querySelector('body');
let submitBtn = document.querySelector('button#submit');
let tableInputs = document.querySelector('#tableInput');
let tableColumn = document.querySelector('#tableInput #columnInput input');
let tableRow = tableInputs.querySelector('#tableInput #rowInput input');

let debugging = document.createElement("div")

debugging.innerText = "Debugging Text: " + submitBtn

// body.append(debugging)
let tableColumnValue;
let tableRowValue;

let tableProcess = function () {
    tableRowValue = parseFloat(tableRow.value)

    const table = document.createElement('table');
    table.id = "getHeaders"

    let headerDiv = document.createElement('div')
    let headers = document.createElement('tr')

    headerDiv.innerText = "Header Values:"

    for (let i = 0; i < tableRowValue; i++) {
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
    // creating input values
    for (let col = 0; col < tableColumnValue; col++) {
        let tr = document.createElement('tr')
        for (let row = 0; row < tableRowValue; row++) {
            let td = document.createElement('td')
            let tdInput = document.createElement('input')
            let headersValSearch = "table#getHeaders div tr td input.headerVal" + (row + 1)
            let getHeaderVal = document.querySelector(headersValSearch)
            tdInput.className = getHeaderVal.value + (col + 1)
            td.append(tdInput)
            tr.append(td);
        }
        tr.append(document.createElement('br'))
        table.append(tr);
    }
    body.append(table);
    body.append(submitTableVals)

    submitTableVals.addEventListener("click", function () {
        createTable()
    }, 0)
}

let createTable = function () {
    const table = document.createElement('table');
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
    // creating input values
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
    tableColumnValue = parseFloat(tableColumn.value)
    tableProcess();
}, 0);
