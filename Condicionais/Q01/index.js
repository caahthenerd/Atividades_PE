var nota1 = Number(window.prompt("Digite a nota 1:"))
var nota2 = Number(window.prompt("Digite a nota 2:"))
var nota3 = Number(window.prompt("Digite a nota 3:"))

var media = (nota1 + nota2 +nota3)/3

if(media >= 7 ){

    document.write("Voce está aprovado.")
}else{

    document.write("Voce está reprovado.")
}

document.write("A média total é: " + media.toFixed(2))