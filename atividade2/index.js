// Escreva um programa em qualquer linguagem que receberá como input uma lista de alunos e uma lista de notas. O programa deverá:
// a) exibir o nome e a situação de cada aluno:
//    * nota >= 7: Aprovado
//    * nota >= 5 e < 7: Recuperação
//    * nota < 5: Reprovado
// b) mostrar a quantidade de aprovados,  quantidade de recuperação e  quantidade de reprovados.

// Exemplo:
// Entrada:
// nomes = ["Ana", "Bruno", "Carlos", "Diana"]
// notas = [8, 4, 7, 6]

// Saída:
// Ana -> Aprovada
// Bruno -> Reprovado
// Carlos -> Aprovado
// Diana -> Recuperação

// Aprovados: 2
// Recuperação: 1
// Reprovados: 1

// * O nome do método é de sua escolha
// * O formato/tipagem dos inputs é de sua escolha
// * O formato/estilização da saída é de sua escolha
// * As validações são de sua escolha.
// * Não é necessário frontend. Retorno pode ser via terminal.

const readline = require("node:readline/promises");

const novaInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alunos = [];
const notas = [];

async function cadastrarAluno() {
  // Função responsável por coletar os dados do usuário via terminal
  while (true) {
    const nome = await novaInterface.question("Qual o nome do aluno? ");

    const nota = await novaInterface.question("Qual a nota do aluno? ");

    // Valida se a nota é um número entre 0 e 10 antes de armazenar
    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log("Nota inválida. Digite um número entre 0 e 10.");
      continue;
    }

    alunos.push(nome);
    notas.push(Number(nota));

    // Pergunta se o usuário deseja continuar cadastrando alunos
    const continuar = await novaInterface.question(
      "Deseja adicionar outro aluno? (s/n)",
    );

    if (continuar.toLowerCase() !== "s") {
      break;
    }
  }

  console.log("\nLista de alunos:");
  console.log(`${alunos}\n`);

  avaliarAlunos(alunos, notas);

  novaInterface.close();
}

// Determina o status do aluno com base na nota
function obterStatus(nota) {
  if (nota < 5) return "Reprovado";
  if (nota < 7) return "Recuperação";
  return "Aprovado";
}

function avaliarAlunos(alunos, notas) {
  let aprovados = 0;
  let recuperacao = 0;
  let reprovados = 0;

  for (let i = 0; i < alunos.length; i++) {
    const status = obterStatus(notas[i]);

    console.log(`${alunos[i]} -> ${status}`);

    if (status === "Aprovado") aprovados++;
    else if (status === "Recuperação") recuperacao++;
    else reprovados++;
  }

  console.log(
    `\nAprovados: ${aprovados}\nRecuperação: ${recuperacao}\nReprovados: ${reprovados}`,
  );
}

cadastrarAluno();
