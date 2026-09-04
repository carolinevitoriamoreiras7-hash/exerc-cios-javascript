/* Atividade 1 */

function verificarIdade() {
    const Idade = Number(document.getElementById("Idade").value);

    if (Idade >= 18) {
        document.getElementById("Resultado").textContent = "Maior de idade";
    } else {
        document.getElementById("Resultado").textContent = "Menor de idade";
    }
}

/* Atividade 2 */
function verificarNumero() {
    const numero = Number(document.getElementById("numero").value);

    if (numero > 0) {
        document.getElementById("resultado1").textContent = "O número é positivo";
    } else if (numero < 0) {
        document.getElementById("resultado1").textContent = "O número é negativo";
    } else {
        document.getElementById("resultado1").textContent = "O número é zero";
    }
}

/* Atividade 3 */
function VerificarNota() {
    const nota = Number(document.getElementById("nota").value);

}

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

/* Atividade 5 */
function verificarTarefa() {
    const prioridade = document.getElementById("prioridade1").value;
    const atrasada = document.getElementById("atrasada").checked;

    if (prioridade === "urgente" || (prioridade === "alta" && atrasada)) {
        document.getElementById("resultado4").textContent = "Precisa de atenção agora!";
    } else {
        document.getElementById("resultado4").textContent = "Pode aguardar.";
    }
}


/*Atividade 6*/
const usuario = "admin";
const senha = "1234";

function verificarLogin() {
    const usuarioDigitado = document.getElementById("inputUsuario").value;
    const senhaDigitada = document.getElementById("inputSenha").value;

    let mensagem;

    if (usuarioDigitado === usuario && senhaDigitada === senha) {
        mensagem = "login realizado com sucesso!";
    }

    else if (usuarioDigitado === usuario && senhaDigitada !== senha) {
        mensagem = "Senha incorreta";
    }

    else {
        mensagem = "Usuário não encontrado";
    }
    document.getElementById("resultado5").textContent = mensagem;
}

/* Atividade 7 */
function verificarIdade1() {
    const idade1 = document.getElementById("idade1").value;
    const situacao = idade1 >= 18 ? "maior de idade" : "menor de idade";
    document.getElementById("situacao").innerText = situacao;
}

/* Atividade 8*/
function calcularDesconto() {
    const valorCompra = Number(document.getElementById("valorCompra").value);
    const clienteVip = document.getElementById("clienteVip").checked;
    let PercentualDesconto;

    if (valorCompra > 500) {
        PercentualDesconto = 20;
    } else if (valorCompra >= 200 && valorCompra <= 500) {
        PercentualDesconto = 10;
    } else {
        PercentualDesconto = 0;
    }

    if (clienteVip) {
        PercentualDesconto = PercentualDesconto + 5;
    }

    const desconto = (valorCompra * PercentualDesconto) / 100;
    const valorFinal = valorCompra - desconto;

    document.getElementById("resultado6").innerHTML =
        "Valor da compra: R$ " + valorCompra +
        " | Desconto: R$ " + desconto +
        " | Valor final: R$ " + valorFinal;
}

/* Atividade 9*/
let mensagem;
function MarcarComoConluida(tarefa) {
    if (!tarefa) {
        mensagem = "Nenhuma tarefa foi informada!"
        return;
    }
    if (tarefa.concluida) {
        mensagem = "Esta tarefa ja foi concluida"
    }
    if (!tarefa.concluida) {
        tarefa.concluida = true;
        mensagem = "Tarefa concluida com sucesso!"
    }
}
function testarComTarefa() {
    const tarefa = { titulo: "Estudar JavaScript", concluida: false };
    MarcarComoConluida(tarefa);
    document.getElementById("resultado9").textContent = mensagem;
}

function testarSemTarefa() {
    MarcarComoConluida(undefined);
    document.getElementById("resultado9").textContent = mensagem;
}

/* Atividade 10 */
function verificarOpcao() {
    const opcao = document.getElementById("opcao10").value;
    const clienteVip = true;

    switch (opcao) {
        case "1":
            document.getElementById("resultado10").textContent = "Consultando seu pedido.";
            break;
        case "2":
            document.getElementById("resultado10").textContent = "Pedido cancelado.";
            break;
        case "3":
            if (clienteVip) {
                document.getElementById("resultado10").textContent = "Cliente VIP: atendimento prioritário.";
            } else {
                document.getElementById("resultado10").textContent = "Você será encaminhado para um atendente.";
            }
            break;
        case "4":
            document.getElementById("resultado10").textContent = "Atendimento encerrado.";
            break;
        default:
            document.getElementById("resultado10").textContent = "Opção inválida.";
    }
}
