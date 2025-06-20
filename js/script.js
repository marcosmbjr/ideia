// Menu Hamburguer responsivo
document.addEventListener('DOMContentLoaded', function() {
    // Criar botão do menu hamburguer
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Header Hamburguer
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(menuBtn);
        const nav = document.querySelector('nav');
        
        // Toggle do menu
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            if (nav) nav.classList.toggle('active');
        });
        
        // Fechar menu ao clicar nos links
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                if (nav) nav.classList.remove('active');
            });
        });
    }
});

// Fechar modais
window.fecharModal = function() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
};

// Fechar modal ao clicar fora dele
document.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// Funções gerais para manipulação do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Ativar menu ativo baseado na URL
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Fechar modais ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            fecharModal();
        }
    });
});

// Função para fechar modal
function fecharModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}