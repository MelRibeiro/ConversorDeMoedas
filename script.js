function ConverterDolar() {
  //pegando o valor do botão e convertendo p R$
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);
  var valorReal = (valorNumerico / 5.24).toFixed(2);
  console.log(valorReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorQueVaiPraTela = "O resultado em dolares é $" + valorReal;
  elementoValorConvertido.innerHTML = valorQueVaiPraTela;
}
//converte real p euro
function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);
  var valorReal = (valorNumerico / 6.2).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorQueVaiPraTela = "O resultado em euros é €" + valorReal;

  elementoValorConvertido.innerHTML = valorQueVaiPraTela;
}
//converte real p bitcoin
function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);
  var valorReal = (valorNumerico / 244.371).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorQueVaiPraTela = "O resultado em bitcoins é ₿" + valorReal;
  elementoValorConvertido.innerHTML = valorQueVaiPraTela;
}