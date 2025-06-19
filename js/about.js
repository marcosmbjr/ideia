document.addEventListener('DOMContentLoaded', function() {
    // Galeria de fotos simples
    const galeria = document.querySelector('.fotos-container');
    if (galeria) {
        galeria.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                // Simular lightbox
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <span class="close-lightbox">&times;</span>
                    <img src="${e.target.src}" alt="${e.target.alt}">
                `;
                
                document.body.appendChild(lightbox);
                
                // Fechar lightbox
                lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
                    lightbox.remove();
                });
            }
        });
    }
    
    // Formulário de contato
    const formContato = document.querySelector('.contato-form form');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            formContato.reset();
        });
    }
});