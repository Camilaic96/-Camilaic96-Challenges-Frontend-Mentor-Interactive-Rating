const containerBtns = document.getElementById('btns')
const containerStart = document.getElementById('card')
const containerTY = document.getElementById('card-ty')
const btnSumit = document.getElementById('btn-submit')
const response = document.getElementById('response')
let selectedBtn = 0
const minBtn = 1
const maxBtn = 5
let inputBtn1
let inputBtn2
let inputBtn3
let inputBtn4
let inputBtn5

function loadBtns () {
    for (let i = minBtn; i <= maxBtn; i++) {
        containerBtns.innerHTML += `
            <input type="radio" name="boton" id="btn-${i}" />
            <label class="btn" for=btn-${i}>${i}</label>
        `
    }
    inputBtn1 = document.getElementById('btn-1')
    inputBtn2 = document.getElementById('btn-2')
    inputBtn3 = document.getElementById('btn-3')
    inputBtn4 = document.getElementById('btn-4')
    inputBtn5 = document.getElementById('btn-5')
}

function loadPage() {
    containerTY.style.display = 'none'
    loadBtns()
}

function loadSelectedBtn() {
    inputBtn1.checked ? selectedBtn = 1
        : inputBtn2.checked ? selectedBtn = 2
        : inputBtn3.checked ? selectedBtn = 3
        : inputBtn4.checked ? selectedBtn = 4
        : inputBtn5.checked ? selectedBtn = 5
        : selectedBtn = 0
}

function sendResponse() {
    loadSelectedBtn()
    if (selectedBtn !== 0) {
        containerStart.style.display = 'none'
        containerTY.style.display = 'flex'
        response.innerHTML = `
            <p class="m-auto">You selected ${selectedBtn} out of ${maxBtn}</p>
        `
    }
}

btnSumit.addEventListener('click', sendResponse)
window.addEventListener('load', loadPage)