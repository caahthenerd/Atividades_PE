var numeroTotalDeEleitores = Number(window.prompt("Digite o total: "))
var votosBrancos = Number(window.prompt("Digite o  brancos :"))
var votosNulos = Number(window.prompt("Digite o  Nulos :"))
var votosValidos =numeroTotalDeEleitores-(votosBrancos+votosNulos)

var percentualVotosBrancos = (votosBrancos/numeroTotalDeEleitores)*100
var percentualVotosNulos= (votosNulos/numeroTotalDeEleitores)*100
var percentualVotosValidos= (votosValidos/numeroTotalDeEleitores)*100

document.write("O percentual de votos brancos é: " + percentualVotosBrancos + "%")
document.write("O percentual de votos nulos é: " + percentualVotosNulos + "%")
document.write("O percentual de votos válidos é: " + percentualVotosValidos + "%")