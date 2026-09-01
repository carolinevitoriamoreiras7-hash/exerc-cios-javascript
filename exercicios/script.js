/* Atividade 4*/

function verificarPrioridade() {
    const entrada = document.getElementById("prioridade").value;
    const prioridade = entrada.toLowerCase().trim();
    let mensagem;

switch (prioridade) {
    case "urgente":
        mensagem = "Atenção redobrada!";
        break;

    case "alta":
    mensagem = "Prioridade alta";
    break;

    case "media":
    mensagem = "Prioridade média";
    break;

    case "baixa":
    mensagem = "Prioridade baixa";
    break;

    default:
        mensagem = "Prioridade desconhecida";
} 
  document.getElementById("resultado3").innerText = mensagem;
}
