let webhook = "https://efrals.app.n8n.cloud/webhook-test/animacao-css";

// Função para criar a animação
// Função assíncrona
async function criarAnimacao() {
  let textoInput = document.querySelector(".input-animacao").value;

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  });

  // Pega a resposta e transforma em JSON
  // await faz com que a função aguarde a resposta da API
  let resultado = await resposta.json();

  console.log(resultado);
}

/*
  // Procura por o botão de animação
  let button = document.querySelector(".botao-animacao");

  // Desabilita botão temporariamente para esperar o retorno da IA
  button.disabled = true;
*/
