var latitude_inicial, longitude_inicial, key_do_google, dia, lat_inicial_armazenada, nome, temporizador_1, lng_inicial_armazenada, horario, empresa;

// Descreva esta função...
function teste2() {
  database.ref((['empresa','/',empresa,'/','ponto','/',dia].join(''))).set({Nome:nome, horario:horario, longitude:lng_inicial_armazenada, latitude:lat_inicial_armazenada});
  temporizador_1 = setInterval(function(){
    Swal.fire('Ponto registrado com sucesso!');
    window.location.href = "Inicial.html";}, 1000);
}

// Descreva esta função...
function calcular_custos() {
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
  function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toISOString().split('T')[0];
  const formattedTime = now.toTimeString().split(' ')[0];
  document.getElementById("Campodata1").value = formattedDate;
  document.getElementById("CampoTempo1").value = formattedTime;
  }
  setInterval(updateDateTime, 1000);
//feito com bootblocks.com.br
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  latitude_inicial = position.coords.latitude;
  longitude_inicial = position.coords.longitude;
    if (latitude_inicial) {
      lat_inicial_armazenada = (txt_to_number(latitude_inicial));
      lng_inicial_armazenada = (txt_to_number(longitude_inicial));
      localStorage.setItem('lat_inicial',latitude_inicial);
      localStorage.setItem('long_inicial',longitude_inicial);
      if (!localStorage.getItem('lat_inicial') || '') {
        window.location.href = "mapa.html";}
    }
  }, function() {
  handleLocationError(true, infoWindow, map.getCenter());
  });
  } else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
  }
  nome = localStorage.getItem('nome') || '';
  empresa = localStorage.getItem('empresa') || '';

function onMapInitilize(){
  var marker = new google.maps.Marker({
  position: {lat: lat_inicial_armazenada, lng: lng_inicial_armazenada},
  map: map,
  marker_id: marcador
  });
  Makers.push(marker);
  map.setOptions({streetViewControl: false});
  map.setOptions({zoomControl: false});
  map.setOptions({mapTypeControl: false});
  map.setOptions({scaleControl: false});
  map.setOptions({fullscreenControl: false});
};

//feito com bootblocks.com.br
  key_do_google = 'AIzaSyCkRZTwo86DZjMRAGV1gQP3p1CAvlreAuY';


        function qclick() {
            let elementoClick = document.getElementById('confirmar_loc');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      dia = document.getElementById('Campodata1').value;
  horario = document.getElementById('CampoTempo1').value;
  teste2();

                });
            }
        }
        qclick();

//feito com bootblocks.com.br
  lat_inicial_armazenada = (txt_to_number(localStorage.getItem('lat_inicial') || ''));
  lng_inicial_armazenada = (txt_to_number(localStorage.getItem('long_inicial') || ''));
  if (lat_inicial_armazenada) {
    var map;
    var Circles = [];
    var Polylines = [];
    var Polygons = [];
    var Makers = [];
    function initMap() {
    map = new google.maps.Map(document.getElementById('tela_mapa'), {
    center: {lat: lat_inicial_armazenada, lng: lng_inicial_armazenada},
    zoom: 14
    });
    if (typeof onMapInitilize === "function") {
    onMapInitilize();
    }
    google.maps.event.addListener(map, 'click', function(event) {
    if (typeof onMapClick === "function") {
    onMapClick(event);
    }
    });
    }
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key="+key_do_google+"&libraries=places&callback=initMap";
    script.async = true;
    document.head.appendChild(script);
    console.log('coordenadas_ok');
    console.log(latitude_inicial);
  }
function txt_to_number(txt){
            txt = txt+"";
            if(txt.includes(",")){
                txt = txt.replace(",", ".");
            }
            if(txt.includes(".")){
                txt = parseFloat(txt);
            }else{
                txt = parseInt(txt);
            }
            return txt;
        }
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });