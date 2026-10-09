// Función para alternar entre las cartas de Mateo y Alejandro
function switchTab(autor) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Desactivar todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Activar el seleccionado
    if (autor === 'mateo') {
        document.getElementById('carta-mateo').classList.add('active');
        buttons[0].classList.add('active');
    } else if (autor === 'alejandro') {
        document.getElementById('carta-alejandro').classList.add('active');
        buttons[1].classList.add('active');
    }
}

// Scroll suave al hacer clic en los enlaces de la barra de navegación
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});