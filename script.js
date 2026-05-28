// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log("Projeto Agrinho 2026: O Amanhã Semeado Hoje - Iniciado");

    // 1. Função para mostrar dicas aleatórias (conforme solicitado)
    const btnDica = document.querySelector('.btn-action');
    const displayMensagem = document.getElementById('message');

    const dicasSustentaveis = [
        "🐝 Abelhas protegidas aumentam a produtividade em até 30%!",
        "🚜 O Plantio Direto evita a erosão e mantém a vida no solo.",
        "💧 Sensores de humidade ajudam a poupar milhares de litros de água.",
        "🌳 Matas ciliares agem como filtros naturais para os nossos rios.",
        "🛰️ Drones identificam pragas precocemente, reduzindo o uso de químicos.",
        "☀️ A energia solar no campo reduz a pegada de carbono do alimento."
    ];

    if (btnDica) {
        btnDica.addEventListener('click', () => {
            // Efeito de fade out
            displayMensagem.style.opacity = '0';
            
            setTimeout(() => {
                const indice = Math.floor(Math.random() * dicasSustentaveis.length);
                displayMensagem.innerText = dicasSustentaveis[indice];
                // Efeito de fade in
                displayMensagem.style.opacity = '1';
                displayMensagem.style.color = '#27ae60';
                displayMensagem.style.fontWeight = 'bold';
            }, 300);
        });
    }

    // 2. Animação de Revelação ao Rolar (Scroll Reveal)
    const observers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.side').forEach(secao => {
        secao.style.opacity = '0';
        secao.style.transform = 'translateY(30px)';
        secao.style.transition = 'all 0.8s ease-out';
        observers.observe(secao);
    });

    // 3. Lógica do Rio (Interação Visual)
    // Faz o "rio" brilhar quando o rato passa por cima
    const rio = document.querySelector('.river-path');
    if (rio) {
        rio.addEventListener('mouseover', () => {
            rio.style.filter = 'brightness(1.2) drop-shadow(0 0 10px #3498db)';
        });
        rio.addEventListener('mouseout', () => {
            rio.style.filter = 'none';
        });
    }
});
