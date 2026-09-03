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
    const prioridade = document.getElementById("prioridade").value;
    const atrasada = document.getElementById("atrasada").checked;

    if (prioridade === "urgente" || (prioridade === "alta" && atrasada)) {
        document.getElementById("ResultadoTarefa").textContent = "Precisa de atenção agora!";
    } else {
        document.getElementById("ResultadoTarefa").textContent = "Pode aguardar.";
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
    const valorCompra = Number (document.getElementById("valorCompra").value);
    const clienteVip = document.getElementById("clienteVip").checked;
    let PercentualDesconto;

    if (valorCompra >500) {
        PercentualDesconto = 20;
    } else if (valorCompra >=200 && valorCompra <=500) {
        PercentualDesconto = 10;
    } else {
    PercentualDesconto = 0;
    }

    if (clienteVip) {
        PercentualDesconto = PercentualDesconto +5;       
    }

    const desconto = (valorCompra * PercentualDesconto) / 100;
    const valorFinal = valorCompra - desconto;

     document.getElementById("resultado6").innerHTML =
        "Valor da compra: R$ " + valorCompra +
        " | Desconto: R$ " + desconto +
        " | Valor final: R$ " + valorFinal;
}

 

