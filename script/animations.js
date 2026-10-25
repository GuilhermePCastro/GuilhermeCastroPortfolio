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
                const cardsServ = entry.target.querySelector("#serv-bloco-cards");
                const textoServ = entry.target.querySelector("#serv-bloco-titulo");
                const proj1 = entry.target.querySelector("#projeto1");
                const proj2 = entry.target.querySelector("#projeto2");
                const titPort = entry.target.querySelector("#titulo-portifolio");
                const sobEsq = entry.target.querySelector("#sobreMimEsq");
                const sobDit = entry.target.querySelector("#sobreMimDit");

                if (cards) cards.classList.add("visivel");
                if (texto) texto.classList.add("visivel");
                if (cardsServ) cardsServ.classList.add("visivel");
                if (textoServ) textoServ.classList.add("visivel");
                if (proj1) proj1.classList.add("visivel");
                if (proj2) proj2.classList.add("visivel");
                if (titPort) titPort.classList.add("visivel");
                if (sobEsq) sobEsq.classList.add("visivel");
                if (sobDit) sobDit.classList.add("visivel");
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const secao = document.querySelector("#diferenciais");
    if (secao) observer.observe(secao);

    const secao2 = document.querySelector("#servicos");
    if (secao2) observer.observe(secao2);

    const secao3 = document.querySelector("#portfolio");
    if (secao3) observer.observe(secao3);

    const secao4 = document.querySelector("#sobre");
    if (secao4) observer.observe(secao4);
});
