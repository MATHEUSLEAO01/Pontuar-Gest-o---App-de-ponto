var dados, lista_com_dados, marcado, posicao, cpf, verifica, Item, email, nomecomp, nome, emailcomp;

// Descreva esta função...
function exibir(dados) {
  lista_com_dados = (Object.values(dados));
  posicao = 0;
  var Item_list = Object.keys(dados);
  for (var Item_index in Item_list) {
    Item = Item_list[Item_index];
    posicao = posicao + 1;
    $("#empresa_select").append("<option value="+posicao+" selected >"+Item+"</option>");
  }
}

// Descreva esta função...
function permi(dados) {
  if (dados) {
    verifica = dados['cpf'];
    nomecomp = dados['nome'];
    emailcomp = dados['email'];
    if (((verifica == cpf) && (nome == nomecomp) && (email == emailcomp))) {
      database.ref((['empresa','/',marcado,'/','colaboradores','/',nome].join(''))).set({nome:nome, cpf:cpf, email:email});
      database.ref((['users/',nome,'/empresa'].join(''))).set(marcado);
      window.location.href = "Inicial.html";} else {
      Swal.fire('Dados invalidos');
    }
  }
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
  let entrada = document.getElementById('input_cpf');
  entrada.addEventListener("input", function(e) {
    let v = this.value.replace(/\D/g,"");
    this.value = v.replace(/(\d{3})(\d)/,"$1.$2")
               .replace(/(\d{3})(\d)/,"$1.$2")
               .replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  });
  database.ref('empresa').once("value").then(function(snapshot) {
  if (snapshot.exists()) {
  exibir(snapshot.val());
  } else {
  exibir([]);
  }
  });


        function qclick() {
            let elementoClick = document.getElementById('link_voltar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "Inicial.html";
                });
            }
        };
        qclick();

//feito com bootblocks.com.br


        function qclick() {
            let elementoClick = document.getElementById('button_registrar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      marcado = ($("#" + 'empresa_select').find("option:selected").text());
  cpf = document.getElementById('input_cpf').value;
  email = document.getElementById('input_email').value;
  nome = document.getElementById('nome_input').value;
  database.ref((['users','/',nome].join(''))).once("value").then(function(snapshot) {
  if (snapshot.exists()) {
  permi(snapshot.val());
  } else {
  permi('');
  }
  });

                });
            }
        };
        qclick();

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });