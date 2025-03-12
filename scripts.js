// Função para definir o tema
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Salvar a preferência do tema
    hideThemeMenu(); // Esconder o menu após selecionar um tema
}

// Função para alternar a visibilidade do menu de temas
function toggleThemeMenu() {
    const themeMenu = document.getElementById('theme-menu');
    themeMenu.classList.toggle('hidden');
}

// Função para esconder o menu de temas
function hideThemeMenu() {
    const themeMenu = document.getElementById('theme-menu');
    themeMenu.classList.add('hidden');
}

// Carregar o tema salvo ao carregar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'inatel'; // Tema padrão
    setTheme(savedTheme);
}

// Event listeners
document.getElementById('theme-toggle').addEventListener('click', toggleThemeMenu);
document.addEventListener('DOMContentLoaded', loadTheme);