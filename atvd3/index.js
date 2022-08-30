var salario = Number(window.prompt("Digite o salario: "))
var reajuste = Number(window.prompt("Digite o reajuste :"))


var novoSalario= salario + (salario*reajuste)

document.write("O Salario novo sera : "+ novoSalario.toFixed(2))