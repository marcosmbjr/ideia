document.addEventListener('DOMContentLoaded', function() {
    // Galeria de fotos com lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    const galleryItems = document.querySelectorAll('.foto-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxCaption.textContent = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Previne scroll do body
        });
    });
    
    // Fechar lightbox
    closeLightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaura scroll do body
    });
    
    // Fechar ao clicar fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
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