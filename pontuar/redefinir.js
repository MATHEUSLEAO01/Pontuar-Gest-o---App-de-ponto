var email, telefone, Resultado, Erro, email_recuperar;

// Descreva esta função...
function recuperar_ok() {
  Swal.fire('Um link para recuperar sua senha foi enviado para seu email!');
}


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
  input = document.getElementById('input_telefone');
  input.addEventListener("keyup", function (e) {
  numero = input.value
  numero = numero.replace(/\D/g,"")
  numero = numero.replace(/(\d{2})(\d)/,"($1) $2")
  numero = numero.replace(/(\d)(\d{4})$/,"$1-$2")
   input.value = numero;
  console.log(numero);
  });


        function qclick() {
            let elementoClick = document.getElementById('redfn');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'div_login').hide();
  $("#"+'div_6').show();

                });
            }
        }
        qclick();


        function qclick2() {
            let elementoClick = document.getElementById('button_enviar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      email = document.getElementById('input_email').value;
  if (!email.length) {
    Swal.fire('Preencha com seu Email');
  } else {
    $("#modal_recuperar").modal("hide");
    firebase.auth().sendPasswordResetEmail(email_recuperar).then(function() {
    recuperar_ok();
    })
    .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    firebaseError(errorMessage);
    });
  }

                });
            }
        }
        qclick2();


        function qclick3() {
            let elementoClick = document.getElementById('enviar_otp');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      telefone = document.getElementById('input_telefone').value;
  if (!telefone.length) {
    Swal.fire('Preencha com seu Telefone');
  } else {

            var recaptchaContainer = document.getElementById('captcha');
            if (!recaptchaContainer) {
                recaptchaContainer = document.createElement('div');
                recaptchaContainer.id = 'captcha';
                document.body.appendChild(recaptchaContainer);
            }

            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear();
            }

            const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaContainer, {
                'size': 'invisible'
            });
            window.recaptchaVerifier = recaptchaVerifier;

            recaptchaVerifier.verify()
                .then(function() {
                    return firebase.auth().signInWithPhoneNumber(telefone, recaptchaVerifier);
                })
                .then(function(confirmationResult) {
                    window.confirmationResult = confirmationResult;
                    J6m0V4eWAidIM1_b2_7C6k = confirmationResult;
                    __25I4_zM3lD_LI4XezLzX = false;

                })
                .catch(function(err) {
                    J6m0V4eWAidIM1_b2_7C6k = false;
                    __25I4_zM3lD_LI4XezLzX = err;
                    console.error("Erro ao enviar SMS: ", err);

                });
        }

                });
            }
        }
        qclick3();


        function qclick4() {
            let elementoClick = document.getElementById('email_voltar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'div_6').hide();
  $("#"+'div_login').show();

                });
            }
        }
        qclick4();


        function qclick5() {
            let elementoClick = document.getElementById('btn-close');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "login.html";
                });
            }
        }
        qclick5();

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });