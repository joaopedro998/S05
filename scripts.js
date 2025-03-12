document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const currentTheme = localStorage.getItem('theme') || 'inatel';
    
    if (!themeToggle || !themeMenu) {
        console.error("Erro: Elementos não encontrados!");
        return;
    }

    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        console.log("Botão clicado!");
        themeMenu.classList.toggle('hidden');
    });

    window.setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeMenu.classList.add('hidden');
    };
});
