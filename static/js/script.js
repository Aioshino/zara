document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtiene la ruta actual de la página (ej: "/vestidos.html")
    const currentPagePath = window.location.pathname;

    // 2. Selecciona todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // 3. Variable para saber si se encontró un enlace activo
    let activeLinkFound = false;

    // 4. Recorre cada enlace para compararlo con la URL actual
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Limpia cualquier clase 'active' que pueda existir por defecto
        link.classList.remove('active');

        // Comprueba si la ruta de la página actual INCLUYE la ruta del enlace.
        // Esto hace que funcione incluso si las rutas son relativas (ej: ../vestidos.html)
        if (currentPagePath.includes(linkPath)) {
            link.classList.add('active');
            activeLinkFound = true; // Marcamos que hemos encontrado el enlace correcto
        }
    });

    // 5. Caso especial: Si no se encontró ningún enlace (por ejemplo, en la página principal 'index.html' o 'todos.html')
    // y el enlace "Todos" existe, lo marcamos como activo.
    if (!activeLinkFound) {
        const todosLink = document.querySelector('a[href="todos.html"]'); // Asegúrate que el href sea el correcto
        if (todosLink) {
            todosLink.classList.add('active');
        }
    }
});