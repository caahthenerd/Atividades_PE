var nome = window.prompt("Digite seu nome:")
var hora = Number(window.prompt("Informe a hora:"))

if(hora >= 6 && hora <= 12 ){
    document.write("Bom dia, " + nome + ".")
}
else if(hora >= 13 && hora <= 18){
    document.write("Boa tarde, " + nome + ".")
}
else {
    document.write("Boa noite, " + nome + ".")
}
