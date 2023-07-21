//teste para commit
let numero = ''
let soma = 0
function calculo(valor) {
    numero += String(valor)
    document.getElementById('valor').value = numero
    console.log(numero)
}
function final() {
    let resultado = document.getElementById('valor').value
    if(resultado) {
        document.getElementById('valor').value = eval(resultado)
    } else {
        document.getElementById('valor').value = "Nada a calcular"
    }
    
}   
function clean() {
    numero = ""
    document.getElementById('valor').value = numero
}
function back() {
    numero = numero.substring(0, numero.length -1)
    document.getElementById('valor').value = numero
}