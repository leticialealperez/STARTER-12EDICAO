let segundos = 1200

let horas = parseInt(segundos / 3600)
console.log(horas)


let restoHoras = segundos % 3600
console.log("Resto horas -> ", restoHoras)


let minutos = parseInt(restoHoras / 60)
console.log(minutos)


let segundosRestantes = restoHoras % 60
console.log(segundosRestantes)

console.log(`${horas}:${minutos}:${segundosRestantes}`)