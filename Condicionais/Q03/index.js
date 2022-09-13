var valorA = Number (window.prompt("Digite o valorA:"))
var valorB = Number (window.prompt("Digite o valorB:"))
var valorC = Number (window.prompt("Digite o valorC:"))

var soma= valorA + valorB
if(soma > valorC ){

    document.write("O numero "+ soma + " é maior que "+ valorC)
}else{

    document.write("O numero "+ soma + " é menor que "+ valorC)
}