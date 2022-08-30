var distanciaPercorridaEmKm = Number(window.prompt("Digite a distancia: "))
var quantidadeDeCombustivelEmLitros = Number(window.prompt("Digite a Quantidade:"))


var consumoMedio= distanciaPercorridaEmKm/quantidadeDeCombustivelEmLitros

document.write("A quantidade total é: "+ consumoMedio.toFixed(2))