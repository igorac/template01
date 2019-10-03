$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: false, // Deixa o item do centro sendo exibido primeiro
        loop: false, // Cria um clone do primeiro e ultimo elemento, dando uma impressão de loop
        items: 1, // Qtd de item sendo exibido
        mouseDrag: true, // Movimenta as imagens com o mouse
        autoWidth: true, // 
        nav: false, // Exibi os botões de prev e next
        rewind: true, // Volta para o ínicio quando chegar no último elemento
        dots: true,
        dotsEach: true,
    });
});