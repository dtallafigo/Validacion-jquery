$(document).ready(function() {
    var contadorJS = 0;
    var contadorJQ = 0;

    $( ".jq , .js" ).draggable({
        revert: "invalid" 
    });

    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        }
    });

    $( "#droppableJS" ).droppable({
        accept: ".js",
        drop: function(event, ui) {
            ui.draggable.draggable("disable", 1);
            contadorJS++;
            $(this)
            .find("p")
            .html("Java Script " + contadorJS);
            if (contadorJQ == 3 && contadorJS == 2) {
                $( "#dialog" ).dialog( "open" );
            }
        }
    });

    $( "#droppableJQ" ).droppable({
        accept: ".jq",
        drop: function(event, ui) {
            ui.draggable.draggable("disable", 1);
            contadorJQ++;
            $(this)
            .find("p")
            .html("Jquery " + contadorJQ);
            if (contadorJQ == 3 && contadorJS == 2) {
                $( "#dialog" ).dialog( "open" );
            }
        }
    });

})