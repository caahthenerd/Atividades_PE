var idade = Number(window.prompt("Informe a idade da tenista:"))

if(idade >= 5 && idade <= 7){
    document.write("A categoria referente a " + idade + " anos é a categoria Infantil A")
}
else if(idade >= 8 && idade <= 10){
    document.write("A categoria referente a " + idade + " anos é a categoria Infantil B")
}
else if(idade >= 11 && idade <= 13){
    document.write("A categoria referente a " + idade + " anos é a categoria Juvenil A")
}
else if(idade >= 14 && idade <= 17){
    document.write("A categoria referente a " + idade + " anos é a categoria Juvenil B")
}
else{
    document.write("A categoria referente a " + idade + " anos é a categoria Senior")
}
