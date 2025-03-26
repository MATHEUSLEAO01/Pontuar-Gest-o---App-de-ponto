var data, abono_moti, temp_2;


//feito com bootblocks.com.br
  document.getElementById('btnOffCanvas').setAttribute('data-bs-target', '#offcanvas');
  document.getElementById('btnOffCanvas').setAttribute('data-bs-toggle', 'offcanvas');
  document.getElementById('btnOffCanvas').setAttribute('aria-controls', 'offcanvas');

//feito com bootblocks.com.br
  document.getElementById('offcanvas').setAttribute('aria-labelledby', 'offcanvasLabel');
  document.getElementById('offcanvas').setAttribute('tabindex', '-1');
  document.getElementById('btn-close').setAttribute('data-bs-dissmiss', 'offcanvas');
  document.getElementById('btn-close').setAttribute('aria-label', 'Close');

//feito com bootblocks.com.br


        (function() {
            let elementoClick = document.getElementById('abono_btn');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      data = document.getElementById('date_1').value;
  abono_moti = document.getElementById('motivo').value;
  if (!data.length) {
    Swal.fire({
    icon: 'error',
    title: 'Data errada!',
    text: 'a data está incorreta!'
    });
  } else if (!abono_moti.length) {
    Swal.fire({
    icon: 'error',
    title: 'Motivo em branco!',
    text: 'preencha o campo obrigatorio!'
    });
  } else {
    Swal.fire('abono justificado!');
    temp_2 = setInterval(function(){
      window.location.href = "Inicial.html";}, 1000);
  }

                });
            }
        })();


        (function() {
            let elementoClick = document.getElementById('checkbox_1');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'atestadolink').show();

                });
            }
        })();

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });