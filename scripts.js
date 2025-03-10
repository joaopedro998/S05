// Seleciona os elementos do botão e menu
const btnTheme = document.getElementById("btn-theme");
const themeMenu = document.getElementById("theme-menu");

// Alterna o menu de temas quando o botão é clicado
btnTheme.addEventListener("click", () => {
    themeMenu.classList.toggle("ativo");
});

// Função para mudar o tema
function mudarTema(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("temaEscolhido", tema);
}

// Recuperar o tema salvo no localStorage ao carregar a página
window.onload = () => {
    const temaSalvo = localStorage.getItem("temaEscolhido");
    if (temaSalvo) {
        document.documentElement.setAttribute("data-theme", temaSalvo);
    }
};
