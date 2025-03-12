document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const currentTheme = localStorage.getItem('theme') || 'inatel';
    
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle?.addEventListener('click', () => {
        console.log("Botão clicado!"); // Debugging
        themeMenu?.classList.toggle('hidden');
    });

    window.setTheme = (theme) => {
        console.log("Tema alterado para:", theme); // Debugging
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeMenu?.classList.add('hidden');
    };
});
