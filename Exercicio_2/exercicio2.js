const prompt = require("prompt-sync")();

let soma = 0,
  fibo1 = 0,
  fibo2 = 1,
  input = prompt("Digite um número inteiro e positivo:");

input = parseInt(input);

if (input >= 0) {
  for (cont = 0; soma < input; cont++) {
    if (cont % 2 == 0) {
      fibo1 = soma;
    } else {
      fibo2 = soma;
    }

    soma = fibo1 + fibo2;
  }
} else {
  console.log("O número deve ser maior ou igual a zero.");
}

if (soma == input) {
  console.log("O número digitado PERTENCE a sequência de fibonacci.");
} else {
  console.log("O número digitado NÃO PERTENCE a sequência de fibonacci.");
}
