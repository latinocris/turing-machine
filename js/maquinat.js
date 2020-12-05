String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let cuadro = document.getElementById('cuadro');
var palabra = document.getElementById("Word").value;

ind_estado = 0;

function move_left(cont) {

  $(".item").animate({ "left": "+=50px" }, parseInt(slider.noUiSlider.get(), 10));

  $("#state").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
  $("#state").fadeIn(function () {
    $(this).html("Estado: q_2 ").fadeIn();
  });

  $("#pasos").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
  $("#pasos").fadeIn(function () {
    $(this).html("Pasos: " + (cont + 1)).fadeIn();
  });
}


function move_right(cont) {

  $(".item").animate({ "left": "-=50px" }, parseInt(slider.noUiSlider.get(), 10));

  if (ind_estado == 3) {
    $("#state").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
    $("#state").fadeIn(function () {
      $(this).html("Estado: q_3 ").fadeIn();
    });
  } else {
    $("#state").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
    $("#state").fadeIn(function () {
      $(this).html("Estado: q_1 ").fadeIn();
    });
  }

  $("#pasos").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
  $("#pasos").fadeIn(function () {
    $(this).html("Pasos: " + (cont + 1)).fadeIn();
  });

}

function paint(estado,a,b){

  if(estado == 1 || estado == 3){

       $(a).fadeIn(function () {
         $(this).css("backgroundColor", "#951197 ");
       });
       $(b).fadeIn(function () {
         $(this).css("backgroundColor", "#333 ");
       });
  }else if(estado== 2){
    $(a).fadeIn(function () {
      $(this).css("backgroundColor", "#951197");
    });
    $(b).fadeIn(function () {
      $(this).css("backgroundColor", "#333 ");
    });
  }
}


function run() {
  let intervalo;
  var word = document.getElementById("Word").value;
  document.getElementById("btnp").disabled = false;
  document.getElementById("btns").disabled = false;


  let n = 1;
  let estado = 1;
  right = 0;
  left = 0;
  sw = 1;

  posicion = 12;
  cont = 0;
  if (word != "") {
    word = 'z' + word + 'z';
    while (estado != 3) {
      while (estado == 1) {

        ind_estado = 1;

        if (word.charAt(n) == "a") {

          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1>a</h1>").fadeIn();
          });

          word = word.replaceAt(n, "a");

          id1 ="#cuadro"+(posicion+1);
          id2 ="#cuadro"+(posicion);
          paint(ind_estado,id1,id2);

          move_right(cont);

          cont++;
          right++;
          posicion++;

        } else if (word.charAt(n) == "b") {


          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1>a</h1>").fadeIn();
          });

          id1 ="#cuadro"+(posicion+1);
          id2 ="#cuadro"+(posicion);
          paint(ind_estado,id1,id2);

          word = word.replaceAt(n, "a");

          move_right(cont);

          cont++;
          right++;
          posicion++;

        } else if (word.charAt(n) == "z") {

          word = word.replaceAt(n, "a");

          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1></h1>").fadeIn();
          });

          id1 ="#cuadro"+(posicion-1);
          id2 ="#cuadro"+(posicion);
          paint(ind_estado,id1,id2);


          move_left(cont);

          estado = 2;
          left++;
          n--;

          sw = 0;
          cont++;

        }

 
        if (sw == 1) { n++; }

      }

      id1 ="#cuadro"+(posicion);
      $(id1).fadeIn(function () {
        $(this).css("backgroundColor", "#333 ");
      });

      sw = 1;
      posicion--;
      while (estado == 2) {

        if (word.charAt(n) == "a") {

          ind_estado = 2;

          word = word.replaceAt(n, "a");

          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1>a</h1>").fadeIn();
          });

          id1 ="#cuadro"+(posicion-1);
          id2 ="#cuadro"+posicion;
          paint(ind_estado,id1,id2);

          left++;
          posicion--;
          move_left(cont);
          cont++;

        } else if (word.charAt(n) == "z") {

          ind_estado = 3;

          word = word.replaceAt(n, "a");

          id1 ="#cuadro"+(posicion+1);
          id2 ="#cuadro"+posicion;
          paint(ind_estado,id1,id2);

          estado = 3;
          right++;
          n++;
          sw = 0;
          posicion--
          move_right(cont);

          cont++;

        }
        if (sw == 1) {
          n--;

        }
      }

    }

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Campo vacio, ingrese texto a validar',
      confirmButtonText: 'Aceptar',
     
    }).then((result) => {
      if (result.value) {
        Swal.close("salir");        
      }
    });
  }
}
function pausar() {
  window.alert("Se ha pausado la ejecución, pulse ok para continuar");
}