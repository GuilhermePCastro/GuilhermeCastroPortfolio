document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visivel' aos elementos da seção
                const cards = entry.target.querySelector("#dif-bloco-cards");
                const texto = entry.target.querySelector("#dif-bloco-texto");

                if (cards) cards.classList.add("visivel");
                if (texto) texto.classList.add("visivel");
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const secao = document.querySelector("#diferenciais");
    if (secao) observer.observe(secao);
});

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visivel' aos elementos da seção
                const cardsServ = entry.target.querySelector("#serv-bloco-cards");
                const textoServ = entry.target.querySelector("#serv-bloco-titulo");
                
                if (cardsServ) cardsServ.classList.add("visivel");
                if (textoServ) textoServ.classList.add("visivel");
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const secao = document.querySelector("#servicos");
    if (secao) observer.observe(secao);
});