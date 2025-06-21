// Conteúdo para golpes digitais
const golpesContent = {
    tecnico: {
        titulo: "Falso Suporte Técnico",
        descricao: "Golpe onde criminosos se passam por técnicos de empresas conhecidas para acessar seu dispositivo ou obter informações pessoais.",
        comoProteger: [
            "Nunca permita acesso remoto ao seu computador ou celular",
            "Empresas sérias não ligam oferecendo serviços",
            "Desligue imediatamente se solicitarem pagamento ou informações pessoais",
            "Verifique sempre pelo canal oficial da empresa"
        ],
        exemplo: "Recebe uma ligação dizendo que seu computador está infectado e precisam acessá-lo remotamente para 'consertar'."
    },
    parente: {
        titulo: "Falso Parente em Apuros",
        descricao: "Golpe emocional onde criminosos se passam por familiares precisando urgentemente de dinheiro.",
        comoProteger: [
            "Ligue para o familiar em outro número para confirmar",
            "Desconfie de pedidos urgentes de transferência",
            "Nunca envie dinheiro sem confirmar pessoalmente",
            "Combine uma palavra-chave com familiares para situações reais de emergência"
        ],
        exemplo: "Ligação dizendo ser seu neto preso em outra cidade, precisando de dinheiro para pagar fiança ou advogado."
    },
    premio: {
        titulo: "Prêmios e Heranças Falsas",
        descricao: "Golpe onde a vítima é informada que ganhou um prêmio ou herança, mas precisa pagar taxas antecipadas para receber.",
        comoProteger: [
            "Desconfie de ofertas boas demais para ser verdade",
            "Nenhum prêmio legítimo cobra taxas antecipadas",
            "Nunca forneça dados bancários ou pessoais",
            "Verifique a veracidade com órgãos oficiais"
        ],
        exemplo: "Mensagem dizendo que você foi sorteado em um concurso que não participou, com um link para 'resgatar' o prêmio após pagar taxas de envio."
    },
    banco: {
        titulo: "Falsos Funcionários de Bancos",
        descricao: "Golpe onde criminosos se passam por funcionários de bancos para obter dados financeiros ou fazer transferências.",
        comoProteger: [
            "Bancos nunca pedem senhas ou transferências por telefone",
            "Desligue e ligue para o banco no número oficial",
            "Nunca clique em links recebidos por SMS ou email",
            "Ative notificações de movimentações em sua conta"
        ],
        exemplo: "Ligação ou SMS dizendo que sua conta será bloqueada se não confirmar dados. O link leva a um site falso idêntico ao do banco para roubar seus dados."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar itens de golpes
    document.querySelectorAll('.golpe-item').forEach(item => {
        const header = item.querySelector('.golpe-header');
        const content = item.querySelector('.golpe-content');
        const toggleIcon = header.querySelector('.golpe-toggle');
        const golpeId = item.getAttribute('data-golpe');
        
        if (!header || !content) return;
        
        // Preencher conteúdo dinâmico
        if (golpesContent[golpeId]) {
            const golpe = golpesContent[golpeId];
            content.innerHTML = `
                <p><b>Como funciona:</b> ${golpe.descricao}</p>
                <div class="golpe-section">
                    <h5>Como se proteger:</h5>
                    <ul>
                        ${golpe.comoProteger.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="golpe-section">
                    <h5>Exemplo real:</h5>
                    <p>${golpe.exemplo}</p>
                </div>
            `;
        }
        
        // Estado inicial: fechado
        content.style.maxHeight = null;
        toggleIcon.textContent = '+';
        
        // Adicionar evento de clique
        header.addEventListener('click', () => {
            if (content.style.maxHeight) {
                // Fechar este item
                content.style.maxHeight = null;
                toggleIcon.textContent = '+';
            } else {
                // Abrir este item
                content.style.maxHeight = content.scrollHeight + 'px';
                toggleIcon.textContent = '-';
            }
        });
    });
});