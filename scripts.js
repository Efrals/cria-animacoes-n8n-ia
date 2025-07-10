function criarAnimacao() {
  let textoInput = document.querySelector(".input-animacao").value;

  // Procura por o botão de animação
  let button = document.querySelector(".botao-animacao");

  // Desabilita botão temporariamente para esperar o retorno da IA
  button.disabled = true;
}

let webhook = function criarAnimacao() {
  let textoInput = document.querySelector(".input-animacao").value;

  // Procura por o botão de animação
  let button = document.querySelector(".botao-animacao");

  // Desabilita botão temporariamente para esperar o retorno da IA
  button.disabled = true;

  let resposta = fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pergunta: textoInput,
    }),
  });
};
