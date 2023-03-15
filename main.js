const texto = document.getElementById("cajadetexto");
const body = document.getElementById("body");
const cajagrande = document.getElementById("cajagrande");
const btn = document.getElementById("btn");
const palabra = document.getElementById("palabra");
const cajaletras = document.getElementById("cajaletras");
const palabras = [
  "analisis",
  "investigacion",
  "matematica",
  "ciencia",
  "metodologia",
  "trabajo",
  "ensayo",
  "escrito",
  "atomo",
  "computador",
];
const numero = Math.floor(Math.random() * palabras.length);
const palabraahorcado = palabras[numero];
const lineas = palabras[numero].length;
let letra = "";
let hola = 0;
let añadirletra = document.getElementById("input");
let letras = [];
let contletras = 1;
let listadeletras = document.getElementById("texto");
let ganador1 = palabraahorcado.split("", palabraahorcado.length);
let ganador = Array.apply("", Array(palabraahorcado.length));
let contwin = 0;
let contloss = 0;

texto.addEventListener("keyup",function(e){
  if(e.code == 'Enter'){
    verificarletra()
  }
})
function reset(){
  window.location.reload()
}

for (let i = 0; i < lineas; i++) {
  palabra.innerHTML += `<div id="letra${i}" class = "text-gray-200 text-4xl flex justify-center items-center border-solid border-2 border-gray-200 border-t-transparent border-r-transparent border-l-transparent h-[5rem] w-full"></div>`;
}
function verificarletra() {
  for (let j = 0; j < palabraahorcado.length; j++) {
    if (texto.value.toLowerCase() == "" || !isNaN(texto.value.toLowerCase())) {
      alert("ingrese una letra \n \n Nota: para cerrar oprima barra espaciadora");
      contletras -= 1;
      break;
    } else {
      if (
        palabraahorcado.includes(texto.value.toLowerCase()) &&
        !letras.includes(texto.value.toLowerCase())
      ) {
        hola = palabraahorcado.indexOf(texto.value.toLowerCase(), j);
        if (hola >= 0) {
          añadirletra = document.getElementById(`letra${hola}`);
          añadirletra.innerHTML = `${texto.value.toLowerCase()}`;
          listadeletras = document.getElementById(`usada${contletras}`);
          listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
          ganador.splice(hola, 1, texto.value.toLowerCase());
          hola = "";
        }
      } else {
        if (letras.includes(texto.value.toLowerCase())) {
          alert("esta letra ya la uso \n \n Nota: para cerrar oprima barra espaciadora");
          contletras -= 1
          break;
        } else {
          contloss += 1;
          switch (contloss) {
            case 1:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img1.png">`;
              alert("esta letra no esta en la palabra \n \n Nota: para cerrar oprima barra espaciadora");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 2:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img2.png">`;
              alert("esta letra no esta en la palabra \n \n Nota: para cerrar oprima barra espaciadora");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 3:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img3.png">`;
              alert("esta letra no esta en la palabra \n \n Nota: para cerrar oprima barra espaciadora");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 4:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img4.png">`;
              alert("esta letra no esta en la palabra \n \n Nota: para cerrar oprima barra espaciadora");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 5:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img5.png">`;
              alert("esta letra no esta en la palabra \n \n Nota: para cerrar oprima barra espaciadora");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 6:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img6.png">`;
              alert("esta letra no esta en la palabra \n \n Nota: para cerrar oprima barra espaciadora");
              hola = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
          }
          if (contloss == 6) {
            cajaletras.innerHTML = `<div class="absolute border-solid border border-gray-500 bg-gradient-to-bl from-[#05080f] to-[#4273b4] h-full w-1/2 flex justify-center items-center flex-col"><img src="https://cdn-icons-png.flaticon.com/128/5515/5515506.png"><p class="text-4xl text-gray-300">PERDIO!!</p><p class = "text-4xl text-gray-300">LA PALABRA ERA:${palabraahorcado}</p><button id = "reset"class="bg-gradient-to-br from-[#05080f] to-[#4273b4] py-[1%] px-[2%] text-gray-200 border-solid border border-gray-500">JUGAR DE NUEVO</button></div>`;
            texto.disabled = true;
            break;
          }
          break;
        }
      }
    }
  }
  letras.push(texto.value.toLowerCase());
  texto.value = "";
  contletras += 1;
  for (let k = 0; k < palabraahorcado.length; k++) {
    if (ganador[k] != ganador1[k]) {
      contwin = 0;
      break;
    } else {
      contwin += 1;
      if (contwin == palabraahorcado.length) {
        cajaletras.innerHTML = `<div class="absolute border-solid border border-gray-500 bg-gradient-to-bl from-[#05080f] to-[#4273b4] h-full w-1/2 flex justify-center items-center flex-col"><img src="https://cdn-icons-png.flaticon.com/128/3362/3362791.png"><p class="text-4xl text-gray-300">GANO!!</p><button id = "reset" class="bg-gradient-to-br from-[#05080f] to-[#4273b4] py-[1%] px-[2%] text-gray-200 border-solid border border-gray-500">JUGAR DE NUEVO</button></div>`;
        texto.disabled = true;
      }
    }
  }
  const reiniciar = document.getElementById("reset")
  reiniciar.addEventListener("click",reset)
}
btn.addEventListener("click", verificarletra);

