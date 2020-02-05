$(document).ready(function(){
    
    var exp = [/^[A-Za-záéíóúÁÉÍÓÚ0-9]+$/,/^\d{3}-\d{6}$/, /^\d{5}/, /^[A-Za-záéíóúÁÉÍÓÚ0-9.]+@[a-z]+\.[a-z]{2,3}$/];
	var errores = ['Nombre no válido!','Teléfono no válido!','Código postal no válido!', 'Email no válido'];

    $(':submit').click(function(e){
        e.preventDefault();
        validar();
    });

    function validar(){
        var valido = true;
        $('span').remove();
        $(':text').each(function(i){
            if (exp[i].test($(this).val())) {
                $(this).css('background-color','green');
            }else {
                $(this).css('background-color','red');
                $(this).after(`<span>${errores[i]}</span>`);
                valido = false;
            }
        });
        valido ? alert('Formulario correcto y enviado!') : alert('El formulario tiene campos incorrectos, no se puede enviar.');
    }

});