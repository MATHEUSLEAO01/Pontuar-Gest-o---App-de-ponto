var Nomesocial, email, cnpj, telefone;


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


        (function() {
            let elementoClick = document.getElementById('empresa_cadastro');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      Nomesocial = document.getElementById('input_cad_nome').value;
  email = document.getElementById('input_cad_email').value;
  cnpj = document.getElementById('cnpj').value;
  telefone = document.getElementById('telefone_input').value;
  if (!Nomesocial.length) {
    Swal.fire('Preencha com nome da empresa');
  } else {
    if (!email.length) {
      Swal.fire('Preencha com Email');
    } else {
      if (!cnpj.length) {
        Swal.fire('Preencha com Cnpj');
      } else {
        database.ref(('empresa/' + String(Nomesocial))).set({Nome:Nomesocial, email:email, cnpj:cnpj, telefone:telefone});
        window.location.href = "Inicial.html";}
    }
  }

                });
            }
        })();


        (function() {
            let elementoClick = document.getElementById('voltar_btn');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "Inicial.html";
                });
            }
        })();

//feito com bootblocks.com.br

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });