$(document).ready(function() {
    $("#sortable").sortable();
    var contador = 0;

    function desordenar(array){
        array = array.sort(function() {return Math.random() - 0.5});
        return array;
    };

    var letras = ['A', 'E', 'I', 'O', 'U'];
    desordenar(letras);

    $('span').each(function (i) { 
       $(this).append(letras[i])
    });

    letras.sort();

    $("#comprobar").on('click', function() {    
        contador++;
        var ganador = false;

        if (contador >= 2) {
            $("#comprobar").attr('disabled', true);
            $(".oculto").css("opacity", 1);
        };

        $('span').each(function(i) {
            if ($(this).text() != letras[i]) {
                var res = $("span").text();
                $("div  p").append("Intento Erroneo: " + res + "<br>");
                if (contador > 1) {
                    alert("Has perdido");
                }else {
                    alert("Has perdido, te queda " + contador + " intento");
                }
                return false;
            } else if (i >= 4) {
                var res = $("span").text();
                $("div  p").append("Intento Correcto: " + res + "<br>");
                $("#comprobar").attr('disabled', true);
                $(".oculto").css("opacity", 1);
                alert("Has ganado");
            }
        });
    });

    $("#nueva").on('click', function() {
        desordenar(letras);
        $('span').each(function (i) {
            contador = 0;
            $("div p").empty();
            $('#comprobar').removeAttr("disabled");
            $(this).empty();
            $(this).append(letras[i]);
            $(".oculto").css("opacity", 0);
         })
        letras.sort();
    });
});