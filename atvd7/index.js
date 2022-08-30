var xA = Number(window.prompt("Digite o xA: "))
var xB = Number(window.prompt("Digite o xB: "))

var yA = Number(window.prompt("Digite o yA: "))
var yB = Number(window.prompt("Digite o yB: "))

var distancia = Math.sqrt(((xB - xA)**2) + ((yB - yA)**2))
document.write("A distância entre o ponto A e o ponto B é: " + distancia.toFixed(2))
