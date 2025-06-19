document.addEventListener('DOMContentLoaded', function() {
    const modalParticipar = document.getElementById('modalParticipar');
    const btnParticipar = document.getElementById('participarBtn');
    const closeModal = modalParticipar?.querySelector('.close');
    const formParticipar = document.getElementById('formParticipar');

    // Abrir modal de participação
    if (btnParticipar) {
        btnParticipar.addEventListener('click', () => {
            if (modalParticipar) modalParticipar.style.display = 'block';
        });
    }

    // Fechar modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (modalParticipar) modalParticipar.style.display = 'none';
        });
    }

    // Enviar formulário
    if (formParticipar) {
        formParticipar.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const idade = parseInt(document.getElementById('idade').value);
            if (isNaN(idade) || idade < 40 || idade > 120) {
                alert('Por favor, insira uma idade válida (entre 40 e 120 anos)');
                return;
            }
            
            // Simular envio
            alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
            modalParticipar.style.display = 'none';
            formParticipar.reset();
        });
    }
});