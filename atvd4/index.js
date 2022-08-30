var produto = Number(window.prompt("Digite o nome do produto: "))
var valor = Number(window.prompt("Digite o  valor do produto :"))


var novoValor = valor + (valor*0.30)
var margemDeLucro = novoValor-valor
document.write("A margem de lucro sera : "+ margemDeLucro.toFixed(2))