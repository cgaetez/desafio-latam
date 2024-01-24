$(document).ready(function () {

    $(function() {
        $('#enviarCorreo').tooltip();
        $('#enviarCorreo').click(function(){
            alert("El correo fue enviado correctamente...");
        });
    });
    $(function() {
        $('#favorito').tooltip();
    });


    $( ".redTitle" ).on( "dblclick", function() {
        $(this).css('color', 'var(--color4)');
    } );

    $("#recetas-relacionadas .col .card-title").click(function(){
        $(this).siblings(".card-text").toggle();
      });
      
});