// Menu Hamburguer
const menuBtn = document.createElement('button');
menuBtn.className = 'menu-btn';
menuBtn.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;

document.querySelector('header').appendChild(menuBtn);
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Função única para expandir/contrair conteúdo
window.toggleContent = function(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon, .golpe-toggle');
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        if (icon) icon.textContent = '+';
    } else {
        // Carregar conteúdo dinâmico se necessário para golpes
        const golpeId = element.parentElement.getAttribute('data-golpe');
        if (golpeId && golpesContent[golpeId]) {
            const golpe = golpesContent[golpeId];
            content.innerHTML = `
                <div class="golpe-detalhes">
                    <p><strong>Como funciona:</strong> ${golpe.descricao}</p>
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
                </div>
            `;
        }
        
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.textContent = '-';
    }
}

// Conteúdo detalhado para os aplicativos
const appDetails = {
    whatsapp: {
        title: "WhatsApp",
        description: "O WhatsApp é o aplicativo de mensagens mais popular do mundo, permitindo enviar mensagens, fotos, vídeos e fazer chamadas de voz e vídeo gratuitamente pela internet.",
        steps: [
            "Toque no ícone de lápis (Android) ou nova conversa (iPhone) para iniciar uma nova conversa",
            "Selecione um contato ou digite o número",
            "Use o campo de texto na parte inferior para digitar mensagens",
            "Toque no ícone de clipe para enviar fotos, vídeos ou documentos",
            "Toque no ícone de telefone para chamadas de voz ou no ícone de câmera para vídeo chamadas"
        ],
        tips: [
            "Você pode criar grupos para conversar com várias pessoas ao mesmo tempo",
            "Use o modo avião quando não quiser ser incomodado",
            "Ative a verificação em duas etapas em Configurações > Conta > Verificação em duas etapas para mais segurança"
        ],
        download: "#"
    },
    instagram: {
        title: "Instagram",
        description: "Rede social para compartilhar fotos e vídeos com seus seguidores. Ótimo para manter contato com familiares e amigos visualmente.",
        steps: [
            "Toque no ícone '+' para criar um novo post",
            "Selecione fotos da sua galeria ou tire uma nova foto",
            "Adicione filtros e edições se desejar",
            "Escreva uma legenda e compartilhe",
            "Navegue pelo feed deslizando para cima para ver posts de quem você segue"
        ],
        tips: [
            "Configure seu perfil como privado em Configurações > Privacidade > Conta privada",
            "Use o Direct (ícone de avião de papel) para enviar mensagens privadas",
            "Explore conteúdos do seu interesse na aba 'Explorar' (ícone de lupa)"
        ],
        download: "#"
    },
    zoom: {
        title: "Zoom",
        description: "Aplicativo para fazer videoconferências e reuniões virtuais. Ideal para conversar com familiares distantes ou participar de eventos online.",
        steps: [
            "Toque em 'Nova Reunião' para iniciar uma chamada",
            "Compartilhe o ID da reunião ou link com os participantes",
            "Toque em 'Participar' para entrar em uma reunião existente",
            "Use o ícone de microfone para mutar/desmutar",
            "Toque no ícone de câmera para ligar/desligar o vídeo"
        ],
        tips: [
            "Use o recurso 'Galeria' para ver todos os participantes ao mesmo tempo",
            "Compartilhe sua tela para mostrar fotos ou apresentações",
            "Use o chat durante a chamada para enviar mensagens sem interromper"
        ],
        download: "#"
    },
    maps: {
        title: "Google Maps",
        description: "Aplicativo de navegação por GPS que mostra mapas, rotas e informações sobre lugares. Essencial para não se perder e descobrir novos locais.",
        steps: [
            "Digite um endereço ou nome do local na barra de pesquisa",
            "Toque em 'Como chegar' para traçar uma rota",
            "Selecione o meio de transporte (carro, ônibus, a pé)",
            "Siga as instruções de navegação passo a passo",
            "Use o zoom (gesto de pinça) para aproximar/afastar"
        ],
        tips: [
            "Salve locais favoritos tocando no ícone de estrela",
            "Verifique horários de funcionamento antes de visitar um local",
            "Use a visualização de satélite para ver fotos reais do local"
        ],
        download: "#"
    },
    spotify: {
        title: "Spotify",
        description: "Serviço de streaming de música que permite ouvir milhões de músicas, criar playlists e descobrir novas canções.",
        steps: [
            "Busque artistas, álbuns ou músicas na barra de pesquisa",
            "Toque em 'Play' para ouvir",
            "Toque no coração para favoritar músicas",
            "Crie playlists tocando em 'Sua Biblioteca' > 'Criar playlist'",
            "Ajuste o volume e pule faixas usando os controles na parte inferior"
        ],
        tips: [
            "Explore playlists prontas para diferentes momentos e humores",
            "Baixe músicas para ouvir offline (requer assinatura Premium)",
            "Conecte-se a alto-falantes inteligentes para ouvir em casa"
        ],
        download: "#"
    },
    sus: {
        title: "Coronavírus SUS",
        description: "Aplicativo oficial do governo brasileiro com informações sobre saúde, vacinação e COVID-19. Fundamental para acompanhar sua saúde e agendar vacinas.",
        steps: [
            "Cadastre-se com seu CPF e dados pessoais",
            "Acesse a aba 'Vacinação' para ver seu cartão de vacinas",
            "Verifique sintomas de COVID-19 na seção 'Autoavaliação'",
            "Encontre unidades de saúde próximas na aba 'Locais'",
            "Marque consultas pelo aplicativo quando disponível"
        ],
        tips: [
            "Mantenha seu cartão de vacinas sempre atualizado",
            "Use o aplicativo para acompanhar resultados de exames",
            "Verifique filas de espera para consultas especializadas"
        ],
        download: "#"
    },
    banco: {
        title: "Banco Digital",
        description: "Aplicativos de bancos permitem realizar transações financeiras de forma rápida e segura diretamente do seu celular.",
        steps: [
            "Baixe o aplicativo do seu banco na loja oficial",
            "Faça o cadastro com seus dados pessoais",
            "Ative a verificação em duas etapas para maior segurança",
            "Acesse suas contas e extratos",
            "Realize transferências e pagamentos"
        ],
        tips: [
            "Nunca compartilhe sua senha com ninguém",
            "Use redes seguras (evite Wi-Fi público) para transações",
            "Configure notificações para todas as movimentações"
        ],
        download: "#"
    },
    youtube: {
        title: "YouTube",
        description: "A maior plataforma de vídeos do mundo, com conteúdo educativo, entretenimento, tutoriais e muito mais.",
        steps: [
            "Digite o que procura na barra de pesquisa",
            "Toque em um vídeo para assistir",
            "Use os controles de reprodução para pausar, avançar ou voltar",
            "Inscreva-se em canais que você gosta",
            "Salve vídeos para assistir mais tarde"
        ],
        tips: [
            "Ajuste a velocidade de reprodução nas configurações do vídeo",
            "Ative legendas automáticas para entender melhor o conteúdo",
            "Use o modo restrito para filtrar conteúdo inadequado"
        ],
        download: "#"
    }
};

// Conteúdo para golpes digitais
const golpesContent = {
    tecnico: {
        titulo: "Falso Suporte Técnico",
        descricao: "Golpe onde criminosos se passam por técnicos de empresas conhecidas (como Microsoft ou operadoras) para acessar seu dispositivo ou obter informações pessoais.",
        comoProteger: [
            "Nunca permita acesso remoto ao seu computador ou celular",
            "Empresas sérias não ligam oferecendo serviços",
            "Desligue imediatamente se solicitarem pagamento ou informações pessoais",
            "Verifique sempre pelo canal oficial da empresa"
        ],
        exemplo: "Recebe uma ligação dizendo que seu computador está infectado e precisam acessá-lo remotamente para 'consertar'. Pedem pagamento ou instalam programas maliciosos."
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
        exemplo: "Ligação dizendo ser seu neto preso em outra cidade, precisando de dinheiro para pagar fiança ou advogado. A voz pode até ser parecida (uso de IA)."
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

// Mostrar detalhes dos aplicativos
window.mostrarDetalhes = function(app) {
    const modal = document.getElementById('appModal');
    if (!modal) return;
    
    const modalContent = document.getElementById('appModalContent');
    const closeBtn = modal.querySelector('.close');
    
    const detalhes = appDetails[app] || {
        title: "Aplicativo",
        description: "Informações detalhadas sobre este aplicativo.",
        steps: [],
        tips: [],
        download: "#"
    };
    
    let conteudo = `
        <div class="app-detalhes">
            <h3>${detalhes.title}</h3>
            <p class="app-descricao">${detalhes.description}</p>
            
            <div class="app-section">
                <h4>Como Usar:</h4>
                <ol class="app-passos">
                    ${detalhes.steps.map(passo => `<li>${passo}</li>`).join('')}
                </ol>
            </div>
            
            ${detalhes.tips.length > 0 ? `
            <div class="app-section">
                <h4>Dicas Úteis:</h4>
                <ul class="app-dicas">
                    ${detalhes.tips.map(dica => `<li>${dica}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            <a href="${detalhes.download}" target="_blank" class="btn-download">Baixar ${detalhes.title}</a>
        </div>
    `;
    
    if (modalContent) modalContent.innerHTML = conteudo;
    modal.style.display = 'block';
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

// Filtrar aplicativos por categoria
window.filtrarApps = function(categoria) {
    const apps = document.querySelectorAll('.app-card');
    const botoes = document.querySelectorAll('.categoria-btn');
    
    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-categoria') === categoria) {
            btn.classList.add('active');
        }
    });
    
    apps.forEach(app => {
        if (categoria === 'todos' || app.getAttribute('data-categoria') === categoria) {
            app.style.display = 'block';
        } else {
            app.style.display = 'none';
        }
    });
}

// Fechar modal
window.fecharModal = function() {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Fechar menu ao clicar em um item (para mobile)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuBtn.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });

    // Configurar eventos de toggle usando delegação de eventos
    document.body.addEventListener('click', (e) => {
        // Configurações
        if (e.target.closest('.config-header')) {
            toggleContent(e.target.closest('.config-header'));
        }
        
        // Segurança
        if (e.target.closest('.golpe-header')) {
            toggleContent(e.target.closest('.golpe-header'));
        }
    });

    // Modal de Participação
    const modalParticipar = document.getElementById('modalParticipar');
    if (modalParticipar) {
        const btn = document.getElementById('participarBtn');
        const span = modalParticipar.querySelector('.close');
        
        if (btn) {
            btn.addEventListener('click', () => {
                modalParticipar.style.display = 'block';
            });
        }
        
        if (span) {
            span.addEventListener('click', () => {
                modalParticipar.style.display = 'none';
            });
        }
        
        window.addEventListener('click', (event) => {
            if (event.target === modalParticipar) {
                modalParticipar.style.display = 'none';
            }
        });
        
        // Formulário de Participação
        const form = document.getElementById('formParticipar');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
                modalParticipar.style.display = 'none';
                form.reset();
            });
        }
    }

    // Modal de Aplicativos
    const appModal = document.getElementById('appModal');
    if (appModal) {
        const closeBtn = appModal.querySelector('.close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                appModal.style.display = 'none';
            });
        }
        
        window.addEventListener('click', (event) => {
            if (event.target === appModal) {
                appModal.style.display = 'none';
            }
        });
    }

    // Inicializar filtro de aplicativos
    if (document.querySelector('.categorias')) {
        filtrarApps('todos');
    }
});