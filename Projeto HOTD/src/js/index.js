const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{

        desativarBotaoSelecionado();

        botao.classList.add("selecionado");

        mudarImagemAtiva();

        imagens[indice].classList.add("ativa");

        mudarInformacoesAtiva();

        informacoes[indice].classList.add("ativa");
    })
})

function desativarBotaoSelecionado( ) {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function mudarImagemAtiva( ) {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function mudarInformacoesAtiva( ) {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}