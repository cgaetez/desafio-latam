$(document).ready(function () {

    $(function() {
        $('#route').tooltip();
        $('#mountain').tooltip();
        $('#airplane').tooltip();
        $('#enviar').click(function(){
            alert("Gracias por contactarnos");
        });
    });
    //menu fixed cambiar color para correcta lectura
    $(window).scroll(function(){
        //console.log('scroll');
        //console.log($(this).scrollTop());
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
});