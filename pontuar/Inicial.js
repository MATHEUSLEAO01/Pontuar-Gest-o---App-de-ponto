var dados, Item, empresa, verifica, nome;

// Descreva esta função...
function teste2() {
  database.ref((['users','/',nome].join(''))).once("value").then(function(snapshot) {
  if (snapshot.exists()) {
  ponto(snapshot.val());
  } else {
  ponto('');
  }
  });
}

// Descreva esta função...
function teste() {
  database.ref((['users','/',nome].join(''))).once("value").then(function(snapshot) {
  if (snapshot.exists()) {
  permi(snapshot.val());
  } else {
  permi('');
  }
  });
}

// Descreva esta função...
function ponto(dados) {
  if (dados) {
    empresa = dados['empresa'];
    if (empresa == 0) {
      Swal.fire({
      icon: 'error',
      title: 'Falha de cadastro',
      text: 'Você não possui cadastro em uma empresa'
      });
    } else {
      localStorage.setItem('empresa',empresa);
      window.location.href = "mapa.html";}
  }
}

// Descreva esta função...
function permi(dados) {
  if (dados) {
    verifica = dados['Permissão'];
    if (verifica == 1) {
      $("#"+'colaboradores_txt').show();
    } else if (verifica == 2) {
      $("#"+'colaboradores_txt').show();
      $("#"+'empresas').show();
    }
  } else {
    console.log('passou');
  }
}


//feito com bootblocks.com.br
  document.getElementById('offcanvas').setAttribute('aria-labelledby', 'offcanvasLabel');
  document.getElementById('offcanvas').setAttribute('tabindex', '-1');
  document.getElementById('btn-close').setAttribute('data-bs-dissmiss', 'offcanvas');
  document.getElementById('btn-close').setAttribute('aria-label', 'Close');

//feito com bootblocks.com.br
  document.getElementById('btnOffCanvas').setAttribute('data-bs-target', '#offcanvas');
  document.getElementById('btnOffCanvas').setAttribute('data-bs-toggle', 'offcanvas');
  document.getElementById('btnOffCanvas').setAttribute('aria-controls', 'offcanvas');

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
  function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toISOString().split('T')[0];
  const formattedTime = now.toTimeString().split(' ')[0];
  document.getElementById("campoDate").value = formattedDate;
  document.getElementById("campoTime").value = formattedTime;
  }
  setInterval(updateDateTime, 1000);nome = localStorage.getItem('nome') || '';
  console.log(nome);
  teste();


        function qclick() {
            let elementoClick = document.getElementById('button_ponto');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      teste2();

                });
            }
        }
        qclick();


        function qclick2() {
            let elementoClick = document.getElementById('link_suporte');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      let msg_uri_encoded = window.encodeURIComponent('Olá preciso de suporte!');
  window.open("https://api.whatsapp.com/send?phone=" + '62998281403' + "&text=" + msg_uri_encoded, "_blank");

                });
            }
        }
        qclick2();


        function qclick3() {
            let elementoClick = document.getElementById('empresas');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "empresa.html";
                });
            }
        }
        qclick3();

//feito com bootblocks.com.br
  var Item_list = ['entrada', 'almoço', 'volta', 'saida'];
  for (var Item_index in Item_list) {
    Item = Item_list[Item_index];
    $("#select_1").append("<option value="+Item+" selected >"+Item+"</option>");
  }


        function qclick4() {
            let elementoClick = document.getElementById('colaboradores_txt');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "colaboradores.html";
                });
            }
        }
        qclick4();


        function qclick5() {
            let elementoClick = document.getElementById('dados');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "dados.html";
                });
            }
        }
        qclick5();


        function qclick6() {
            let elementoClick = document.getElementById('abono_text');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "abono.html";
                });
            }
        }
        qclick6();

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });