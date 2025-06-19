document.addEventListener('DOMContentLoaded', function() {
    // Inicializar itens de configuração
    document.querySelectorAll('.config-item').forEach(item => {
        const header = item.querySelector('.config-header');
        const content = item.querySelector('.config-content');
        const icon = item.querySelector('.toggle-icon');
        
        if (!header || !content) return;
        
        // Adicionar evento de clique
        header.addEventListener('click', () => {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                if (icon) icon.textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.textContent = '-';
            }
        });
    });
    
    // Carregar vídeo tutorial
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.innerHTML = `
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Tutorial de Configurações" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        `;
    }
});