let operacion = "";
const result = document.getElementById("result");
const limpiar = document.getElementById("data-delete");
const igual = document.getElementById("data-igual");

limpiar.addEventListener("click", function () {
     operacion = ""
     result.value = operacion
});
igual.addEventListener("click", function () {

     try {
          const resultado = eval(operacion); //evaluar para resolver 
          operacion="";
          result.value = resultado
     } catch (error) {
         operacion="no valido";

         result.value=operacion;
     }


})


const boton = document.getElementsByClassName("boton-clase");
console.log(boton[0].innerHTML);

for (let i = 0; i < boton.length; i++) {
     boton[i].addEventListener("click", function () {
          operacion += boton[i].innerHTML
          result.value = operacion
     })
};


