AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});
$('#up-arrow').click(function () {
    $('html,body').animate({
        scrollTop: 0
    },
        'cubic-bezier(0.1, 0.7, 1.0, 0.1)');
});
$(".nav-item a").click(function () {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
$(window).on("load", function () {
    $('.loader .inner').fadeOut(3000, function () {
        $('.loader').fadeOut(750);
    });
});



// efeito de máquina de escrever
$(document).ready(function() {
    var description = new Typed('#description', {
        strings: ['Apaixonado por técnologia^2500', 'Programador Frontend^2500', 'Estudo novas Tecnologias^2500', 'YouTube Creator + ou -^2500', 'Apaixonado por Música^2500', 'Pai do Arthur^2500',  'Técnico de Planejamento^2500'],
        shuffle: true,
        loop: true,
        typeSpeed: 100,
        backSpeed: 100,
        cursorChar: '_',
    });
});


// criando script para "ler mais" e "ler menos" na parte dos posts do blog.

// function leiaMais(){
//     var pontos=document.getElementById("pontos");
//     var maisTexto=document.getElementById("mais");
//     var btnLeiaMais=document.getElementById("btnLeiaMais");

//     if(pontos.style.display === "none") {
//         pontos.style.display="inline";
//         maisTexto.style.display="none";
//         btnLeiaMais.innerHTML="Leia Mais"
//     }else {
//         pontos.style.display="none";
//         maisTexto.style.display="inline";
//         btnLeiaMais.innerHTML="Leia Menos"
//     }
// };
// FIM do script para "ler mais" e "ler menos" na parte dos posts do blog.