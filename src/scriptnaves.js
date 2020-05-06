let button1 = document.querySelector('#button1')
let namen = document.querySelector('#namen')
let manufacturer = document.querySelector('#manufacturer')
let model = document.querySelector('#model')
let crew   = document.querySelector('#crew')
let length = document.querySelector('#length')


function getData1() {
    generateDataLoading1()
    let randomNave = Math.floor((Math.random() * 61) + 1)
    let swApi2 = "https://swapi.py4e.com/api/starships/" + randomNave

    axios.get(swApi2).then(response => {
        generateData1(response.data)
    }).catch(e => {
        generateDataFail1()
    })
}

function generateData1(data) {
    namen.innerText = data.name
    manufacturer.innerText = data.manufacturer
    model.innerText = data.model
    crew.innerText = data.crew 
    length.innerText = data.length
}

function generateDataFail1() {
    namen.innerText = 'Ops! Where is it?'
    manufacturer.innerText = ''
    model.innerText = ''
    crew.innerText = ''
    length.innerText = ''
}

function generateDataLoading1() {
    namen.innerHTML = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    manufacturer.innerText = ''
    model.innerText = ''
    crew.innerText = ''
    length.innerText = ''
}

button1.addEventListener('click', getData1)