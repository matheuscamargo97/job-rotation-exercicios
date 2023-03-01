const dados = require("./dados.json");

let menor = dados[0],
  maior = dados[0],
  count = 0,
  soma = 0,
  diasAcimaMedia = 0;

dados.forEach((it) => {
  if (it.valor != 0) {
    if (it.valor < menor.valor) {
      menor = it;
    }
    if (it.valor > maior.valor) {
      maior = it;
    }
    soma = soma + it.valor;
    count++;
  }
});

media = soma / count;

dados.forEach((it) => {
  if (it.valor > media) {
    diasAcimaMedia++;
  }
});

console.log(
  `A média dos valores neste mês foi de R$ ${media.toFixed(2)}, 
  cujo maior valor foi de R$ ${maior.valor.toFixed(2)}, 
  o menor valor foi de R$ ${menor.valor.toFixed(2)} 
  e a quantidade de dias em que o valor superou a média mensal foi de ${diasAcimaMedia}`
);
