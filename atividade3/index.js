// Crie uma aplicação com as seguintes funcionalidades:
//    * Cadastrar uma tarefa (com título, descrição, data de vencimento e status)
//    * Alterar o status da tarefa (Pendente, Em Andamento, Concluída)
//    * Listar tarefas ordenadas (decrescente) por data de vencimento

// * Pode ser somente frontend.

const tituloTarefa = document.querySelector("#tituloTarefa");
const descricaoTarefa = document.querySelector("#descricaoTarefa");
const button = document.querySelector("#button");
const listaDeTarefas = document.querySelector("#tarefas");

function criarTarefa(lista, titulo, descricao) {
  const tarefa = document.createElement("div");
  const botoes = document.createElement("div");

  const novoTitulo = document.createElement("h2");
  const novaDescricao = document.createElement("p");

  const botaoPentende = document.createElement("button");
  const botaoAndamento = document.createElement("button");
  const botaoConcluido = document.createElement("button");

  botaoPentende.classList.add("pendente");
  botaoAndamento.classList.add("andamento");
  botaoConcluido.classList.add("concluida");

  novoTitulo.innerText = titulo;
  novaDescricao.innerText = descricao;

  botaoPentende.innerText = "Pendente";
  botaoAndamento.innerText = "Em Andamento";
  botaoConcluido.innerText = "Concluída";

  botoes.appendChild(botaoPentende);
  botoes.appendChild(botaoAndamento);
  botoes.appendChild(botaoConcluido);

  tarefa.appendChild(novoTitulo);
  tarefa.appendChild(novaDescricao);
  tarefa.appendChild(botoes);

  tarefa.classList.add("containerTarefa");

  lista.appendChild(tarefa);
}

button.addEventListener("click", () => {
  if (tituloTarefa.value === "" && descricaoTarefa.value === "") return;
  criarTarefa(listaDeTarefas, tituloTarefa.value, descricaoTarefa.value);
  tituloTarefa.value = "";
  descricaoTarefa.value = "";
});
