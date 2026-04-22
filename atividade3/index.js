// Crie uma aplicação com as seguintes funcionalidades:
//    * Cadastrar uma tarefa (com título, descrição, data de vencimento e status)
//    * Alterar o status da tarefa (Pendente, Em Andamento, Concluída)
//    * Listar tarefas ordenadas (decrescente) por data de vencimento

// * Pode ser somente frontend.

const tituloTarefa = document.querySelector("#tituloTarefa");
const descricaoTarefa = document.querySelector("#descricaoTarefa");
const dataTarefa = document.querySelector("#dataTarefa");
const button = document.querySelector("#button");
const ordenar = document.querySelector("#ordenar");
const listaDeTarefas = document.querySelector("#tarefas");

// Armazena todas as tarefas em memória (não persistente)
const tarefas = [];

// Cria os botões de status e vincula eventos de alteração
function criarBotaoStatus(tarefa, index) {
  const botoes = document.createElement("div");

  const botaoPendente = document.createElement("button");
  const botaoAndamento = document.createElement("button");
  const botaoConcluido = document.createElement("button");

  botaoPendente.classList.add("pendente");
  botaoAndamento.classList.add("andamento");
  botaoConcluido.classList.add("concluida");

  botaoPendente.innerText = "Pendente";
  botaoAndamento.innerText = "Em Andamento";
  botaoConcluido.innerText = "Concluída";

  botaoPendente.addEventListener("click", () => {
    tarefas[index].status = "pendente";
    renderizarTarefas(tarefas);
  });

  botaoAndamento.addEventListener("click", () => {
    tarefas[index].status = "andamento";
    renderizarTarefas(tarefas);
  });

  botaoConcluido.addEventListener("click", () => {
    tarefas[index].status = "concluida";
    renderizarTarefas(tarefas);
  });

  if (tarefa.status === "pendente") {
    botaoPendente.classList.add("ativo");
  }

  if (tarefa.status === "andamento") {
    botaoAndamento.classList.add("ativo");
  }

  if (tarefa.status === "concluida") {
    botaoConcluido.classList.add("ativo");
  }

  botoes.appendChild(botaoPendente);
  botoes.appendChild(botaoAndamento);
  botoes.appendChild(botaoConcluido);

  return botoes;
}

// Renderiza a lista de tarefas na tela
function renderizarTarefas(lista) {
  listaDeTarefas.innerHTML = "";

  lista.forEach((tarefa, index) => {
    const novaTarefa = document.createElement("div");
    const novoTitulo = document.createElement("h2");
    const novaDescricao = document.createElement("p");
    const novaData = document.createElement("span");

    const dataAjustada = new Date(tarefa.data);
    const dataFormatada = dataAjustada.toLocaleDateString("pt-BR");

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    novoTitulo.innerText = tarefa.titulo;
    novaDescricao.innerText = tarefa.descricao;

    // Verifica se a tarefa já venceu
    if (dataAjustada < hoje) {
      novaData.innerText = `Venceu em ${dataFormatada}`;
      novaTarefa.classList.add("venceu");
    } else {
      novaData.innerText = `Vence em ${dataFormatada}`;
    }

    novaTarefa.classList.add("containerTarefa");
    novaTarefa.classList.add(tarefa.status);

    const novosBotoes = criarBotaoStatus(tarefa, index);

    novaTarefa.appendChild(novaData);
    novaTarefa.appendChild(novoTitulo);
    novaTarefa.appendChild(novaDescricao);
    novaTarefa.appendChild(novosBotoes);

    listaDeTarefas.appendChild(novaTarefa);
  });
}

button.addEventListener("click", () => {
  if (
    !tituloTarefa.value.trim() ||
    !descricaoTarefa.value.trim() ||
    !dataTarefa.value
  )
    return alert("Preencha todos os campos");

  // Ajusta a data manualmente para evitar problemas de timezone do input date
  const [ano, mes, dia] = dataTarefa.value.split("-");
  const dataAjustada = new Date(ano, mes - 1, dia);

  const novaTarefa = {
    titulo: tituloTarefa.value,
    descricao: descricaoTarefa.value,
    data: dataAjustada.getTime(),
    status: "pendente",
  };

  tarefas.push(novaTarefa);

  renderizarTarefas(tarefas);

  tituloTarefa.value = "";
  descricaoTarefa.value = "";
  dataTarefa.value = "";
});

//botão que ordena a lista de tarefas de forma decrescente
ordenar.addEventListener("click", () => {
  tarefas.sort((a, b) => b.data - a.data);
  renderizarTarefas(tarefas);
});
