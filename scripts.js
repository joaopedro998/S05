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
  document.getElementById("btn-theme").addEventListener("click", function () {
      let menuTemas = document.getElementById("theme-menu");
      if (menuTemas.style.display === "flex") {
          menuTemas.style.display = "none";
      } else {
          menuTemas.style.display = "flex";
      }
  });

  // Adicionar eventos aos botões de tema
  document.querySelectorAll(".theme-button").forEach(function(botao) {
      botao.addEventListener("click", function() {
          const tema = this.getAttribute("data-theme");
          mudarTema(tema);
      });
  });
});