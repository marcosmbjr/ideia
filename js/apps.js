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
        download: "#",
        website: "https://www.whatsapp.com/"
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
        download: "#",
        website: "https://www.instagram.com/"
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
        download: "#",
        website: "https://zoom.us/"
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
        download: "#",
        website: "https://www.google.com/maps"
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
        download: "#",
        website: "https://www.spotify.com/"
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
        download: "#",
        website: "https://www.gov.br/saude/"
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
        download: "#",
        website: "#"
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
        download: "#",
        website: "https://www.youtube.com/"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar detalhes dos aplicativos
    document.querySelectorAll('.btn-saiba-mais').forEach(btn => {
        btn.addEventListener('click', function() {
            const appId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            mostrarDetalhes(appId);
        });
    });

    // Filtrar aplicativos por categoria
    document.querySelectorAll('.categoria-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const categoria = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            filtrarApps(categoria);
        });
    });

    // Inicializar filtro
    filtrarApps('todos');
});

// Mostrar detalhes do app
function mostrarDetalhes(app) {
    const modal = document.getElementById('appModal');
    const modalContent = document.getElementById('appModalContent');
    
    if (!modal || !modalContent) return;
    
    const detalhes = appDetails[app] || {
        title: "Aplicativo",
        description: "Informações detalhadas sobre este aplicativo.",
        steps: ["Passo 1", "Passo 2"],
        tips: ["Dica 1", "Dica 2"],
        download: "#",
        website: "#"
    };
    
    // Verificar se é mobile
    const isMobile = window.innerWidth < 768;
    const buttonText = isMobile ? "Baixar App" : "Visitar Site";
    const buttonLink = isMobile ? detalhes.download : detalhes.website;
    
    modalContent.innerHTML = `
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
            
            <a href="${buttonLink}" target="_blank" class="btn-download">${buttonText}</a>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Filtrar aplicativos por categoria
function filtrarApps(categoria) {
    const apps = document.querySelectorAll('.app-card');
    const botoes = document.querySelectorAll('.categoria-btn');
    
    botoes.forEach(btn => {
        const btnCategory = btn.getAttribute('data-category') || 'todos';
        btn.classList.toggle('active', btnCategory === categoria);
    });
    
    apps.forEach(app => {
        const appCategoria = app.getAttribute('data-categoria');
        if (categoria === 'todos' || appCategoria === categoria) {
            app.style.display = 'block';
        } else {
            app.style.display = 'none';
        }
    });
}
