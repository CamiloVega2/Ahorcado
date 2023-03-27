const texto = document.getElementById("cajadetexto");
const letrasusadas = document.getElementById("letrasusadas");
const body = document.getElementById("body");
const cajagrande = document.getElementById("cajagrande");
const btn = document.getElementById("btn");
const palabra = document.getElementById("palabra");
const cajaletras = document.getElementById("cajaletras");
let listadeletras = document.getElementById("texto");
let añadirletra = document.getElementById("input");
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
let posicion = 0;
let letras = [];
let contletras = 1;
let ganador1 = palabraahorcado.split("", palabraahorcado.length);
let ganador = Array.apply("", Array(palabraahorcado.length));
let contwin = 0;
let contloss = 0;

for (let i = 1; i < 28; i++) {
  letrasusadas.innerHTML += ` <div id="usada${i}" class="h-[1/9] flex justify-center  text-4xl items-center"></div>`;
}
for (let i = 0; i < lineas; i++) {
  palabra.innerHTML += `<div id="letra${i}" class = "text-gray-200 text-4xl flex justify-center items-center border-solid border-2 border-gray-200 border-t-transparent border-r-transparent border-l-transparent h-[5rem] w-full"></div>`;
}
function verificarletra() {
  for (let j = 0; j < palabraahorcado.length; j++) {
    if (texto.value.toLowerCase() == "" || !isNaN(texto.value.toLowerCase())) {
      alert("ingrese una letra");
      contletras -= 1;
      break;
    } else {
      if (
        palabraahorcado.includes(texto.value.toLowerCase()) &&
        !letras.includes(texto.value.toLowerCase())
      ) {
        posicion = palabraahorcado.indexOf(texto.value.toLowerCase(), j);
        if (posicion >= 0) {
          añadirletra = document.getElementById(`letra${posicion}`);
          añadirletra.innerHTML = `${texto.value.toLowerCase()}`;
          listadeletras = document.getElementById(`usada${contletras}`);
          listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
          ganador.splice(posicion, 1, texto.value.toLowerCase());
          posicion = "";
        }
      } else {
        if (letras.includes(texto.value.toLowerCase())) {
          alert("esta letra ya la uso");
          contletras -= 1;
          break;
        } else {
          contloss += 1;
          switch (contloss) {
            case 1:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img1.png">`;
              posicion = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 2:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img2.png">`;
              posicion = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 3:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img3.png">`;
              posicion = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 4:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img4.png">`;
              posicion = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 5:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img5.png">`;
              posicion = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
            case 6:
              cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img6.png">`;
              posicion = "";
              listadeletras = document.getElementById(`usada${contletras}`);
              listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
              break;
          }
          if (contloss == 6) {
            cajaletras.innerHTML = `<div class="border-solid border border-gray-500 bg-gradient-to-bl from-[#05080f] to-[#4273b4] h-full w-1/2 flex justify-evenly items-center flex-col"><img src="https://cdn-icons-png.flaticon.com/128/5515/5515506.png"><p class="text-4xl text-gray-300">PERDIO!!</p><p class = "text-4xl text-gray-300">LA PALABRA ERA:${palabraahorcado}</p><button id = "reset"class="bg-gradient-to-br from-[#05080f] to-[#4273b4] py-[1%] px-[2%] text-gray-200 border-solid border border-gray-500">JUGAR DE NUEVO</button></div>`;
            texto.disabled = true;
            const reiniciar = document.getElementById("reset");
            reiniciar.addEventListener("click", reset);
            palabras.splice(numero, 1);
            console.log(palabras);
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
        cajaletras.innerHTML = `<div class="border-solid border border-gray-500 bg-gradient-to-bl from-[#05080f] to-[#4273b4] h-full w-1/2 flex justify-evenly items-center flex-col"><img src="https://cdn-icons-png.flaticon.com/128/3362/3362791.png"><p class="text-4xl text-gray-300">GANO!!</p><button id = "reset" class="bg-gradient-to-br from-[#05080f] to-[#4273b4] py-[1%] px-[2%] text-gray-200 border-solid border border-gray-500">JUGAR DE NUEVO</button></div>`;
        texto.disabled = true;
        const reiniciar = document.getElementById("reset");
        reiniciar.addEventListener("click", reset);
        palabras.splice(numero, 1);
        console.log(palabras);
      }
    }
  }
}
btn.addEventListener("click", verificarletra);
texto.addEventListener("keyup", function (e) {
  if (e.code == "Enter") {
    verificarletra();
  }
});


function reset() {
  body.innerHTML = `  <div class="h-[90%]">
  <div>
      <p class="text-4xl text-gray-300 text-center font-semibold">AHORCADO</p>
  </div>
  <div class="flex h-full pt-[2%]">
      <div class="w-1/2 flex flex-wrap h-full justify-center items-center" id="cajaletras">
          <div id="cajagrande" class="my-[10%] mx-[10%] w-[50%] "></div>
      </div>
      <div class="w-1/2">
          <div class="flex w-full justify-around "><input id="cajadetexto" type="text" maxlength="1"
                  onkeypress="return soloLetras(event)" placeholder="ingrese una letra"
                  class="border-solid border-2 border-gray-100 bg-gray-400 pl-[5px] placeholder-black"><button id="btn"
                  class="border-solid border-2 border-blue-400 text-gray-200 border-gray-500 bg-gray-900">Enviar</button>
          </div>
          <div id="palabra" class="flex w-full justify-between"></div>
          <div class="border-solid border-white border-2 mt-[5%] h-[78%]">
              <p class="flex justify-center text-gray-300">Letras Usadas</p>
              <div id="letrasusadas"
                  class="border-solid border-2 border-gray-500 grid grid-cols-3 grid-rows-9 h-[90%] w-[95%] ml-[2.5%] text-gray-200">
              </div>
          </div>
      </div>
  </div>
</div>`;
  const texto = document.getElementById("cajadetexto");
  const letrasusadas = document.getElementById("letrasusadas");
  const cajagrande = document.getElementById("cajagrande");
  const btn = document.getElementById("btn");
  const palabra = document.getElementById("palabra");
  const cajaletras = document.getElementById("cajaletras");
  let listadeletras = document.getElementById("texto");
  let añadirletra = document.getElementById("input");
  const numero = Math.floor(Math.random() * palabras.length);
  const palabraahorcado = palabras[numero];
  const lineas = palabras[numero].length;
  let letra = "";
  let posicion = 0;
  let letras = [];
  let contletras = 1;
  let ganador1 = palabraahorcado.split("", palabraahorcado.length);
  let ganador = Array.apply("", Array(palabraahorcado.length));
  let contwin = 0;
  let contloss = 0;

  for (let i = 1; i < 28; i++) {
    letrasusadas.innerHTML += ` <div id="usada${i}" class="h-[1/9] flex justify-center  text-4xl items-center"></div>`;
  }
  for (let i = 0; i < lineas; i++) {
    palabra.innerHTML += `<div id="letra${i}" class = "text-gray-200 text-4xl flex justify-center items-center border-solid border-2 border-gray-200 border-t-transparent border-r-transparent border-l-transparent h-[5rem] w-full"></div>`;
  }
  function verificarletra() {
    for (let j = 0; j < palabraahorcado.length; j++) {
      if (texto.value.toLowerCase() == "" || !isNaN(texto.value.toLowerCase())) {
        alert("ingrese una letra");
        contletras -= 1;
        break;
      } else {
        if (
          palabraahorcado.includes(texto.value.toLowerCase()) &&
          !letras.includes(texto.value.toLowerCase())
        ) {
          posicion = palabraahorcado.indexOf(texto.value.toLowerCase(), j);
          if (posicion >= 0) {
            añadirletra = document.getElementById(`letra${posicion}`);
            añadirletra.innerHTML = `${texto.value.toLowerCase()}`;
            listadeletras = document.getElementById(`usada${contletras}`);
            listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
            ganador.splice(posicion, 1, texto.value.toLowerCase());
            posicion = "";
          }
        } else {
          if (letras.includes(texto.value.toLowerCase())) {
            alert("esta letra ya la uso");
            contletras -= 1;
            break;
          } else {
            contloss += 1;
            switch (contloss) {
              case 1:
                cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img1.png">`;
                posicion = "";
                listadeletras = document.getElementById(`usada${contletras}`);
                listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
                break;
              case 2:
                cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img2.png">`;
                posicion = "";
                listadeletras = document.getElementById(`usada${contletras}`);
                listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
                break;
              case 3:
                cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img3.png">`;
                posicion = "";
                listadeletras = document.getElementById(`usada${contletras}`);
                listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
                break;
              case 4:
                cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img4.png">`;
                posicion = "";
                listadeletras = document.getElementById(`usada${contletras}`);
                listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
                break;
              case 5:
                cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img5.png">`;
                posicion = "";
                listadeletras = document.getElementById(`usada${contletras}`);
                listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
                break;
              case 6:
                cajagrande.innerHTML = `<img class="w-full border-solid border-4 border-gray-400 rounded-[300px]" src="img/img6.png">`;
                posicion = "";
                listadeletras = document.getElementById(`usada${contletras}`);
                listadeletras.innerHTML = `${texto.value.toLowerCase()}`;
                break;
            }
            if (contloss == 6) {
              cajaletras.innerHTML = `<div class="border-solid border border-gray-500 bg-gradient-to-bl from-[#05080f] to-[#4273b4] h-full w-1/2 flex justify-evenly items-center flex-col"><img src="https://cdn-icons-png.flaticon.com/128/5515/5515506.png"><p class="text-4xl text-gray-300">PERDIO!!</p><p class = "text-4xl text-gray-300">LA PALABRA ERA:${palabraahorcado}</p><button id = "reset"class="bg-gradient-to-br from-[#05080f] to-[#4273b4] py-[1%] px-[2%] text-gray-200 border-solid border border-gray-500">JUGAR DE NUEVO</button></div>`;
              texto.disabled = true;
              const reiniciar = document.getElementById("reset");
              reiniciar.addEventListener("click", reset);
              palabras.splice(numero, 1);
              console.log(palabras);
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
          cajaletras.innerHTML = `<div class="border-solid border border-gray-500 bg-gradient-to-bl from-[#05080f] to-[#4273b4] h-full w-1/2 flex justify-evenly items-center flex-col"><img src="https://cdn-icons-png.flaticon.com/128/3362/3362791.png"><p class="text-4xl text-gray-300">GANO!!</p><button id = "reset" class="bg-gradient-to-br from-[#05080f] to-[#4273b4] py-[1%] px-[2%] text-gray-200 border-solid border border-gray-500">JUGAR DE NUEVO</button></div>`;
          texto.disabled = true;
          const reiniciar = document.getElementById("reset");
          reiniciar.addEventListener("click", reset);
          palabras.splice(numero, 1);
          console.log(palabras);
        }
      }
    }
  }
  btn.addEventListener("click", verificarletra);
  texto.addEventListener("keyup", function (e) {
    if (e.code == "Enter") {
      verificarletra();
    }
  });
}
