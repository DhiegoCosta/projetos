/*Programa feito por Dhiego C. Araújo*/
let segundos = 0
let minutos = 0
let horas = 0
let milisegundos = 0
let cronometro
function start () {
    stop()
    cronometro = setInterval(timer, 10)
}
function stop() {
    clearInterval(cronometro)
}
function reset() {
    stop()
    segundos = 0
    minutos = 0
    horas = 0
    milisegundos = 0
    document.getElementById('horas').innerHTML = '00'
    document.getElementById('minutos').innerHTML = '00'
    document.getElementById('segundos').innerHTML = '00'
    document.getElementById('milisegundos').innerHTML = '000'
}
function timer() {
    milisegundos += 10

    if (milisegundos === 1000) {
        segundos +=1
        milisegundos = 0
    }         
    if (segundos === 60) {
        minutos += 1
        segundos = 0
    }
    if (minutos === 60) {
        horas += 1
        minutos = 0
    }
    document.getElementById('horas').innerHTML = horas.toString().padStart(2,'0')
    document.getElementById('minutos').innerHTML = minutos.toString().padStart(2,'0')
    document.getElementById('segundos').innerHTML = segundos.toString().padStart(2,'0')
    document.getElementById('milisegundos').innerHTML = milisegundos.toString().padStart(2,'0')
}