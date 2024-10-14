const listaSelecaoPokedex = document.querySelectorAll(".pokedex");

listaSelecaoPokedex.forEach(pokedex =>{
    pokedex.addEventListener("click", () => {
        esconderCartaoPokedex();

        const idPokedexSelecionado = mostrarCartaoPokedexSelecionado(pokedex);

        desativarPokedexNaListagem();
        ativarPokedexSelecionadoNaListagem(idPokedexSelecionado);
    })
})


function ativarPokedexSelecionadoNaListagem(idPokedexSelecionado) {
    const pokedexSelecionadoNaListagem = document.getElementById(idPokedexSelecionado);
    pokedexSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedexNaListagem() {
    const pokedexAtivoNaListagem = document.querySelector(".ativo");
    pokedexAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedexSelecionado(pokedex) {
    const idPokedexSelecionado = pokedex.attributes.id.value;
    const idDoCartaoPokedexParaAbrir = "cartao-" + idPokedexSelecionado;
    const cartaoPokedexParaAbrir = document.getElementById(idDoCartaoPokedexParaAbrir);
    cartaoPokedexParaAbrir.classList.add("aberto");
    return idPokedexSelecionado;
}

function esconderCartaoPokedex() {
    const cartaoPokedexAberto = document.querySelector(".aberto");
    cartaoPokedexAberto.classList.remove("aberto");
}
