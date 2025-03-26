var nome, email;


//feito com bootblocks.com.br
  nome = localStorage.getItem('nome') || '';
  email = localStorage.getItem('email') || '';
  $("#Nome_id").html(nome);
  $("#Email_id").html(email);

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });