var temporizador_1;


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
  $("body").css("height", "100%");
  $("html").css("height", "100%");
  $("#"+'image_1').animate({height:200+"px",width:200+"px"},1500);
  temporizador_1 = setInterval(function(){
    window.location.href = "login.html";}, 2000);

//feito com bootblocks.com.br

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });