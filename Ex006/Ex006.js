var valorEmprestimo = Number(window.prompt("Digite o valor que deseja pegar emprestado:"))
var quantidadeMeses = Number(window.prompt("Digite em quantos meses deseja pagar"))
var taxaJuros = 0.06
var M = valorEmprestimo*(1 + taxaJuros)**quantidadeMeses

document.write("<h1>O valor final do empréstimo é:</h1>" + M.toFixed(2))