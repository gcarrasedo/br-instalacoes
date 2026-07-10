document.addEventListener('DOMContentLoaded', function () {
    const botaoHamburguer = document.getElementById('botaoHamburguer');
    const navPrincipal = document.getElementById('navPrincipal');
    const overlayMenu = document.getElementById('overlayMenu');

    function alternarMenu() {
        const aberto = navPrincipal.classList.toggle('aberto');
        botaoHamburguer.classList.toggle('aberto', aberto);
        overlayMenu.classList.toggle('aberto', aberto);
        botaoHamburguer.setAttribute('aria-expanded', aberto);
    }

    function fecharMenu() {
        navPrincipal.classList.remove('aberto');
        botaoHamburguer.classList.remove('aberto');
        overlayMenu.classList.remove('aberto');
        botaoHamburguer.setAttribute('aria-expanded', 'false');
    }

    botaoHamburguer.addEventListener('click', alternarMenu);
    overlayMenu.addEventListener('click', fecharMenu);
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', fecharMenu);
    });

    const observadorFade = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observadorFade.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(function (elemento) {
        observadorFade.observe(elemento);
    });
});
