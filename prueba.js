
//Animacion para la Biografia
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('animacionBiografia');
    const text = container.innerText.trim();

    // Divide el texto en caracteres y maneja los espacios de manera adecuada
    container.innerHTML = text.split('').map(char => {
        if (char === ' ') {
            return `<span>&nbsp;</span>`; // Manejar espacios en blanco
        } else if (char === '\n') {
            return '<br>'; // Manejar saltos de línea
        } else {
            return `<span>${char}</span>`;
        }
    }).join('');

    const spans = container.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('show');
        }, index * 20); // Ajusta el tiempo entre letras
    });
});

//Animacion Scrolling con las Habilidades
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.custom-list');

    // Contenedor personalizado para el viewport
    const container = document.querySelector('.container');
    // Configuración del Intersection Observer con un contenedor personalizado
    const observerOptions = {
        root: container, // Usar el contenedor en lugar del viewport del navegador
        rootMargin: '0px',
        threshold: 0.1 // Porcentaje del elemento visible para activar la animación
    };

    // Callback que se ejecuta cuando el elemento entra o sale del contenedor
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible')
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});
