var nome, cpf, email, telefone, senha, senha_2, id_usuario;

// Descreva esta função...
function cadastro() {
  Swal.fire('Cadastrado com sucesso!');
  var temp = setInterval(nova_tela, 1000);
}

// Descreva esta função...
function nova_tela() {
  database.ref(('users/' + String(nome))).set({email:email, Permissão:0, nome:nome, cpf:cpf, telefone:telefone, empresa:'0'});
  window.location.href = "login.html";}


//feito com bootblocks.com.br
  firebase.initializeApp({
  apiKey: 'AIzaSyD1ypbCEQkRfIeRIoUvkfOwALPPGkC3n68',
  authDomain: 'pontuar-ca9a5.firebaseapp.com',
  databaseURL: 'https://pontuar-ca9a5-default-rtdb.firebaseio.com/',
  projectId: 'pontuar-ca9a5',
  storageBucket: 'pontuar-ca9a5.firebasestorage.app',
  messagingSenderId: '603097363989',
  appId: '1:603097363989:web:9576ff1e84c2456920801c'
  });
  const database = firebase.database();
  input = document.getElementById('telefone_box');
  input.addEventListener("keyup", function (e) {
  numero = input.value
  numero = numero.replace(/\D/g,"")
  numero = numero.replace(/(\d{2})(\d)/,"($1) $2")
  numero = numero.replace(/(\d)(\d{4})$/,"$1-$2")
   input.value = numero;
  console.log(numero);
  });
  let entrada = document.getElementById('cpf_input');
  entrada.addEventListener("input", function(e) {
    let v = this.value.replace(/\D/g,"");
    this.value = v.replace(/(\d{3})(\d)/,"$1.$2")
               .replace(/(\d{3})(\d)/,"$1.$2")
               .replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  });


        (function() {
            let elementoClick = document.getElementById('button_cadastrar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      nome = document.getElementById('nome_box').value;
  localStorage.setItem('nome',nome);
  cpf = document.getElementById('cpf_input').value;
  email = document.getElementById('email_box').value;
  telefone = document.getElementById('telefone_box').value;
  senha = document.getElementById('senha_1').value;
  senha_2 = document.getElementById('input_cad_senha').value;
  if (!nome.length) {
    Swal.fire('Preencha com seu nome');
  } else {
    if (!email.length) {
      Swal.fire('Preencha com seu Email');
    } else {
      if (!senha.length) {
        Swal.fire('Preencha com sua Senha');
      } else if (senha.length < 6) {
        Swal.fire({
        icon: 'error',
        title: 'Senha invalida!',
        text: 'Senha não compre requisitos'
        });
      } else {
        if (senha != senha_2) {
          Swal.fire('Senhas são diferentes!');
        } else {
          if (cpf.length == 14) {
            firebase.auth().createUserWithEmailAndPassword(email, senha).then(function( id_usuario ) {
            id_usuario = id_usuario.user.uid;
            cadastro(id_usuario);
            })
            .catch(function(error) {
            var errorMessage = error.message;
            firebaseError(errorMessage);
            });
          } else {
            Swal.fire('cpf não é valido');
          }
        }
      }
    }
  }

                });
            }
        })();


        (function() {
            let elementoClick = document.getElementById('tenho');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "login.html";
                });
            }
        })();

//feito com bootblocks.com.br

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });