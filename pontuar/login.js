var verifica_C3_A7_C3_A3o, email, senha, id_usuario, temporizador_1;

// Descreva esta função...
function login_ok() {
  verifica_C3_A7_C3_A3o = (typeof verifica_C3_A7_C3_A3o === 'number' ? verifica_C3_A7_C3_A3o : 0) + 2;
  localStorage.setItem('email',email);
  localStorage.setItem('uid',id_usuario);
  window.location.href = "Inicial.html";}


//feito com bootblocks.com.br
  verifica_C3_A7_C3_A3o = (typeof verifica_C3_A7_C3_A3o === 'number' ? verifica_C3_A7_C3_A3o : 0) + 0;
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

//feito com bootblocks.com.br


        function qclick() {
            let elementoClick = document.getElementById('Entrar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      email = document.getElementById('input_email').value;
  senha = document.getElementById('input_senha').value;
  if (!email.length) {
    Swal.fire('Preencha com o Email!');
  } else {
    if (!senha.length) {
      Swal.fire('Preencha com a Senha!');
    } else {
      firebase.auth().signInWithEmailAndPassword(email, senha).then(function( id_usuario ) {
      id_usuario = id_usuario.user.uid;
      login_ok(id_usuario);
      })
      .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      firebaseError(errorMessage);
      });
    }
    temporizador_1 = setInterval(function(){
      if (verifica_C3_A7_C3_A3o == 0) {
        Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Senha ou Email errados!'
        });
      }
    }, 5000);
  }

                });
            }
        };
        qclick();


        function qclick() {
            let elementoClick = document.getElementById('link_cadatro');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "cadastro.html";
                });
            }
        };
        qclick();


        function qclick() {
            let elementoClick = document.getElementById('link_redefinir_senha');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "redefinir.html";
                });
            }
        };
        qclick();


        function qclick() {
            let elementoClick = document.getElementById('suporte');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      let msg_uri_encoded = window.encodeURIComponent('Olá preciso de suporte!');
  window.open("https://api.whatsapp.com/send?phone=" + '62998281403' + "&text=" + msg_uri_encoded, "_blank");

                });
            }
        };
        qclick();

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });