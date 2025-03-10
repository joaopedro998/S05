// Função para mudar o tema
function mudarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  localStorage.setItem("tema", tema);
}

// Inicialização da página
document.addEventListener("DOMContentLoaded", function () {
  // Verifica se há um tema salvo no localStorage e aplica
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo) {
      document.documentElement.setAttribute("data-theme", temaSalvo);
  }

  // Exibir/ocultar menu de temas ao clicar no botão
  const btnTheme = document.getElementById("btn-theme");
  const themeMenu = document.getElementById("theme-menu");

  if (btnTheme && themeMenu) {
      btnTheme.addEventListener("click", function () {
          if (themeMenu.style.display === "flex") {
              themeMenu.style.display = "none";
          } else {
              themeMenu.style.display = "flex";
          }
      });

      // Adicionar eventos aos botões de tema
      document.querySelectorAll(".theme-button").forEach(function(botao) {
          botao.addEventListener("click", function() {
              const tema = this.getAttribute("data-theme");
              mudarTema(tema);
          });
      });
  } else {
      console.error("Elementos do tema não encontrados no HTML.");
  }
});