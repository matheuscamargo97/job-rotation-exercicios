const prompt = require("prompt-sync")();

let input = prompt("Digite uma string que deseja inverter:");

let vet = input.split("");
let vetInvertido = "";

for (let i = vet.length - 1; i >= 0; i--) {
  vetInvertido += vet[i];
}

console.log(vetInvertido);
