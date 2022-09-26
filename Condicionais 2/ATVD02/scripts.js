var dinheiro = document.getElementById('dinheiro')
var debito = document.getElementById('debito')
var credito = document.getElementById('credito')
var parcelado = document.getElementById('parcelado')

   
    dinheiro.addEventListener('change', (event) => {
        var preco = document.querySelector('#preco').value
        var desconto10 =  (10 * preco) / 100
        if (event.currentTarget.checked && preco != '') {
            document.write("Com direito a 10% de desconto, você terá " + desconto10 + " reais de desconto");
        } else {
            document.write("Nenhum valor informado.")
        }
      })

      debito.addEventListener('change', (event) => {
        var preco = document.querySelector('#preco').value
        var desconto15 =  (15 * preco) / 100
        if (event.currentTarget.checked && preco != '') {
            document.write("Com direito a 15% de desconto, você terá " + desconto15 + " reais de desconto");
        } else {
            document.write("Nenhum valor informado.")
        }
      })      

      credito.addEventListener('change', (event) => {
        var preco = document.querySelector('#preco').value
        if (event.currentTarget.checked && preco != '') {
            document.write("Por escolher a opção cartão de crédito, não há alterações de valor. Seu produto fica no valor de: " + preco + "reais");
        } else {
            document.write("Nenhum valor informado.")
        }
      })      

      parcelado.addEventListener('change', (event) => {
        var preco = document.querySelector('#preco').value
        var juros = preco * (1 + 0.1 * 2)
        if (event.currentTarget.checked && preco != '') {
            document.write("Por escolher a opção de parcelar para 2x no cartão de crédito, o produto fica no valor de " + juros.toFixed(2) + " reais");
        } else {
            document.write("Nenhum valor informado.")
        }
      })      