// Escreva uma função em qualquer linguagem (se possível C#) que:
//    Recebe uma lista de números.
//    Retorna o segundo maior número distinto.
//    Se não houver, retorne null.
// Exemplo:
// Input: [3, 2, 1, 5, 5, 4] → Output: 4 (pois o maior é 5, e o segundo maior é 4).

// * Não é necessário frontend. Retorno pode ser via terminal.

let lista = [3, 2, 1, 5, 5, 4];

// Inicializa com o menor valor possível para funcionar com qualquer número
let maior = -Infinity;
let segundoMaior = -Infinity;

lista.forEach((numero) => {
  if (numero > maior) {
    // Se encontrou um novo maior, o antigo maior vira o segundo maior
    segundoMaior = maior;
    maior = numero;
  } else if (numero > segundoMaior && numero !== maior) {
    // Atualiza o segundo maior, ignorando duplicatas do maior
    segundoMaior = numero;
  }
});

console.log(`O segundo maior número é ${segundoMaior}`);
