// Dados dos Cases
const cases = [
    {
        id: 1,
        title: "Conexão SQL SERVER com Altus Blueplant e Dashboard PowerBI",
        period: "Ago 2025 - Mar 2026",
        description: "Solução completa para gestão de alarmes SCADA com coleta de dados em tempo real, armazenamento SQL e dashboards analíticos no Power BI.",
        technologies: ["SQL Server", "Altus Blueplant", "Power BI", "SCADA"],
        results: "Monitoramento eficiente de alarmes, redução de tempo de indisponibilidade e aumento da eficiência operacional."
    },
    {
        id: 2,
        title: "Aplicação WinCC para Utilidades Industriais - Brainfarma",
        period: "Fev 2025 - Jan 2026",
        description: "Desenvolvimento de aplicação Siemens WinCC para supervisão e controle de sistemas de água gelada, vapor, ar comprimido e água purificada.",
        technologies: ["Siemens WinCC", "PLCs Siemens", "Profibus/Profinet", "Banco de Dados"],
        results: "Conformidade regulatória, redução de custos operacionais e aumento da disponibilidade dos sistemas."
    },
    {
        id: 3,
        title: "WinCC UNIFIED - Loop de Água Gelada (Sólidos) - Brainfarma",
        period: "Dez 2025 - Jan 2026",
        description: "Aplicação WinCC UNIFIED para monitoramento e controle do loop de água gelada (sólidos) em indústria farmacêutica.",
        technologies: ["WinCC UNIFIED", "Siemens", "Monitoramento em Tempo Real"],
        results: "Conformidade regulatória, redução de custos operacionais e maior disponibilidade dos sistemas."
    },
    {
        id: 4,
        title: "WinCC UNIFIED - Loop de Água Gelada (Líquidos) - Brainfarma",
        period: "Dez 2025 - Jan 2026",
        description: "Aplicação WinCC UNIFIED para monitoramento e controle do loop de água gelada (líquidos) em indústria farmacêutica.",
        technologies: ["WinCC UNIFIED", "Siemens", "Monitoramento em Tempo Real"],
        results: "Conformidade regulatória, redução de custos operacionais e maior disponibilidade dos sistemas."
    },
    {
        id: 5,
        title: "SCADA Update - Industrial Utilities e ALP iFIX - Novo Nordisk",
        period: "Out 2024 - Set 2025",
        description: "Atualização de sistemas SCADA em risco de obsolescência com GE iFix, iHistorian, IGS Driver, GE Batch e Windows Server.",
        technologies: ["GE iFix", "iHistorian", "IGS Driver", "Windows Server", "Dream Report"],
        results: "Plataformas atualizadas, compliance garantido, segurança e suporte técnico implementados."
    },
    {
        id: 6,
        title: "Modificação FMS - Novo Nordisk LOB",
        period: "Set 2024 - Out 2024",
        description: "Modificação do sistema FMS com remoção de sensores de umidade e temperatura, exclusão de SCADA iFix e atualização de documentação.",
        technologies: ["FMS", "SCADA iFix", "GMP", "SQL"],
        results: "Sistema otimizado com documentação completa e validação rigorosa conforme GMP."
    },
    {
        id: 7,
        title: "BMS - FFEx - Novo Nordisk",
        period: "Jan 2024 - Set 2024",
        description: "Sistema de Gerenciamento de Edifícios (BMS) para otimizar eficiência operacional e energética dos edifícios.",
        technologies: ["BMS", "HVAC", "Iluminação", "Segurança"],
        results: "Documentação técnica completa, melhor eficiência energética e gerencial implementada."
    },
    {
        id: 8,
        title: "FMS - FFEx - Novo Nordisk",
        period: "Mai 2024 - Set 2024",
        description: "Sistema de Gerenciamento de Facilidades para otimização e automação das operações em instalações.",
        technologies: ["FMS", "Monitoramento", "Controle de Sistemas", "Manutenção"],
        results: "Gestão eficiente e eficaz das facilidades com integração completa de sistemas."
    },
    {
        id: 9,
        title: "Sistema de Bombeamento de Polímeros",
        period: "Mai 2024 - Jun 2024",
        description: "Sistema inovador para movimentação eficiente, segura e contínua de polímeros em processos de produção.",
        technologies: ["Bombeamento", "Automação Industrial", "Controle de Processo"],
        results: "Movimentação eficiente de polímeros com integridade mantida e produtividade maximizada."
    },
    {
        id: 10,
        title: "Utilidades Industriais - Site MOC Expansion",
        period: "Mai 2024 - Set 2024",
        description: "Construção de integrações e utilidades industriais para nova linha de produção com instalações de controle e monitoramento.",
        technologies: ["HVAC", "Água Gelada", "Vapor Industrial", "Ar Comprimido", "PSSS"],
        results: "Infraestrutura completa de utilidades com conformidade total às diretrizes Novo Nordisk."
    }
];

// Renderizar Cases
function renderCases() {
    const container = document.getElementById('casesContainer');
    
    cases.forEach((caseItem, index) => {
        const caseCard = document.createElement('div');
        caseCard.className = 'case-card animate-slide-up';
        caseCard.style.animationDelay = `${(index % 2) * 0.1}s`;
        
        const technologiesHTML = caseItem.technologies
            .map(tech => `<span class="case-tech-tag">${tech}</span>`)
            .join('');
        
        caseCard.innerHTML = `
            <div class="case-header">
                <div class="case-icon">🏆</div>
                <div>
                    <h3 class="case-title">${caseItem.title}</h3>
                    <p class="case-period">${caseItem.period}</p>
                </div>
            </div>
            
            <p class="case-description">${caseItem.description}</p>
            
            <div class="case-technologies">
                <label class="case-tech-label">Tecnologias:</label>
                <div class="case-tech-list">
                    ${technologiesHTML}
                </div>
            </div>
            
            <div class="case-results">
                <span class="case-results-label">Resultados:</span>
                <p class="case-results-text">${caseItem.results}</p>
            </div>
        `;
        
        container.appendChild(caseCard);
    });
}

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    renderCases();
    
    // Adicionar animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-slide-up, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
        observer.observe(el);
    });
});

// Adicionar interatividade aos botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Se for um botão de ação (não um link)
        if (!this.href && this.textContent.includes('Demo') || this.textContent.includes('Orçamento')) {
            e.preventDefault();
            alert('Entre em contato conosco para solicitar uma demonstração ou orçamento!');
        }
    });
});

function abrirWhatsApp() {

        const url = `https://wa.me/5538998616142`;
        window.open(url, '_blank');
    }
