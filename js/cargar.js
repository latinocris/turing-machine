function cargar() {

  var word = document.getElementById('Word').value;

  $("#state").fadeIn(function () {
    $(this).html("Estado: Ninguno ").fadeIn();
  });

  borrador();

  if (word != "") {
    var items = document.getElementsByClassName('item');
    cont = 11;
    resaltar = 12;
    $("#cuadro" + resaltar).fadeIn(function () {
      $(this).css("backgroundColor", "#951197 ");
    });

    for (i = 0; i < word.length; i++) {
      if (word.charAt(i) == "a" || word.charAt(i) == "b") {
        $(items[cont + 1]).html("<h1>" + word[i] + "</h1>");
        cont++;
      } else {
        borrador();

        Swal.fire({
          icon: 'error',
          title: 'Error.',
          text: 'No es valido',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.value) {
            clearFileInput(document.getElementById("Word"));
            document.getElementById("Word").focus();
            Swal.close("salir");
          }
        });
        break;
      }
    }
  }
  else {

Swal.fire({
      icon: 'error',
      title: 'Error.',
      text: 'No se ingresó nada',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        document.getElementById("Word").focus();
        Swal.close("salir");
      }
    });
  }
}
function borrador() {
  var items = document.getElementsByClassName('item');
  for (i = 0; i <= 100; i++) {
    items[i].innerHTML = "";
  }
}
function refresk() {
  Swal
    .fire({
      title: "¿Está seguro de detener la ejecucion?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Detener",
      cancelButtonText: "Cancelar",
    })
    .then(resultado => {
      if (resultado.value) {
        location.reload();
      }
    });
}
function clearFileInput(ctrl) {
  try {
    ctrl.value = null;
  } catch (ex) { }
  if (ctrl.value) {
    ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
  }
}