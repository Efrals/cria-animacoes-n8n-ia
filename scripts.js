let webhook = "https://efrals.app.n8n.cloud/webhook-test/animacao-css";

// Função para criar a animação
// Função assíncrona
async function criarAnimacao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");

  let resposta = await fetch(webhook, {
    // Método POST para enviar dados
    method: "POST",
    // Avisa que você está enviando dados
    headers: { "Content-Type": "application/json" },
    // Transforma o texto em JSON
    body: JSON.stringify({ pergunta: textoInput }),
  });

  // Pega a resposta e transforma em JSON
  // await faz com que a função aguarde a resposta da API
  let resultado = await resposta.json();

  // Filtra e ordena todo retorno que está na variável resposta após a espera na variável resultado
  let info = JSON.parse(resultado.resposta);

  // Exibe o código na área de código
  codigo.innerHTML = info.code;

  // Exibe o resultado na área de resultado
  areaResultado.innerHTML = info.preview;

  console.log(resultado);
}

/*
  // Procura por o botão de animação
  let button = document.querySelector(".botao-animacao");

  // Desabilita botão temporariamente para esperar o retorno da IA
  button.disabled = true;
*/
