function putDigit(digit){
    const result = document.getElementById('result')

    result.value= result.value+digit
}

function reset(){
    const result = document.getElementById ('result')
    result.value=''
}