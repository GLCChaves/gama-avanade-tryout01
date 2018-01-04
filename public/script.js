(function () {
    'use strict';

    window.addEventListener('load', function () {
        var form = document.getElementById('needs-validation');

        //Event listener para validação e submit
        form.addEventListener('submit', function (event) {



            if (form.checkValidity() === false) {
                $('#apply-error').on('closed.bs.alert', function () {
                    alert('erro!')
                })
                event.preventDefault();
                event.stopImmediatePropagation();

            } else {
                $.ajax({
                    method: 'POST',
                    url: 'http://avanade.gama.academy/api/process_applications',
                    dataType: 'json',
                    headers: { EMAIL: 'guilherme_chaves@ymail.com' }, // coloque seu email que usou para se inscrever aqui!
                    contentType: 'application/json',
                    data: JSON.stringify({ process_application: { name: $('#name').val(), email: $('#email').val() } }),
                    success: function (json) {
                        // Código de successo!
                        form.classList.add('post-success');
                        alert ('Enviado com sucesso!');
                       /*  $('btn-apply').click(function () {
                            $('apply-success').show();
                        }); */
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        // Não esquece de tratar os erros
                        alert ('Verifique os erros e tente novamente!');
                        /* $('btn-apply').click(function () {
                            $('apply-error').show('fade');
                        }); */
                    }
                });

            }
            form.classList.add('was-validated');

        }, false);
    }, false);
})();

