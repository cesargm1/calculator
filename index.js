const result = document.getElementById('result')
const calculator = document.querySelector(".calculadora")
const butons = document.querySelectorAll("button")
let acc = 0
let operator = null
result.value = 0


const putDigit = (number) => {
    result.value = parseFloat(result.value + number)

}

const reset = () => {
     result.value = 0
}

const add = () => {
     acc = result.value
     operator = '+'
     result.value = 0
}

const less = () => {
     acc = result.value
     operator = '-'
     result.value = 0
}


const division  =  () => {
     acc = result.value
     operator = ':'
     result.value = 0
}

const  multipli  =  () => {
     acc = result.value
     operator = 'x'
     result.value = 0
}

const  potencia  =  () => {
     acc = result.value
     operator = 'potencia'
     result.value = 0
}

const  porcentaje  =  () => {
     acc = result.value
     operator = '%'
     result.value = 0
}

const equal = () => {
    if (operator === '+' ) {
     result.value = parseFloat(acc) + parseFloat(result.value)
    } 
    if (operator === '-' ) {
     result.value = parseFloat(acc) - parseFloat(result.value)
    } 

    if (operator === 'x' ) {
     result.value = parseFloat(acc) * parseFloat(result.value)
    } 

    if (operator === ':' ) {
     result.value = parseFloat(acc) / parseFloat(result.value)
    } 

    if (operator === 'potencia' ) {
     result.value = parseFloat(acc) ** parseFloat(result.value)
    } 

    if (operator === '%' ) {
     result.value = parseFloat(acc) *100 / parseFloat(result.value)
    } 
}

// keyboardNum.addEventListener("click",putScreen)

