document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('animacionBiografia');
    const text = container.innerText.trim();

    // Divide el texto en caracteres y quita los espacios en blanco entre ellos
    container.innerHTML = text.split('').map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`).join('');

    const spans = container.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('show');
        }, index * 50); // Ajusta el tiempo entre letras según tus preferencias
    });
});


