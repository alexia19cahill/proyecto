
let nombre = document.getElementById ("nombre")
let boton = document.getElementById ("boton")
let tabla = document.getElementById ("tabla")
let p = document.getElementById ("p")

boton.addEventListener("click", function () {
 let p = document.createElement("nombre")
 tabla.innerHTML = nombre.value;
 
    
})

let nube = document.getElementById('nube');
let fondo = document.getElementById('fondo');


nube.addEventListener("click", () => {
   fondo.style.backgroundColor = "#c3e5e6"
   

})

let dark = document.getElementById('oscuro');
let fondo1 = document.getElementById('fondo');


oscuro.addEventListener("click", () => {
   fondo.style.backgroundColor = "#808a8a"
   

})
let rain = document.getElementById('lluvia');
let fondo2 = document.getElementById('fondo');


lluvia.addEventListener("click", () => {
   fondo.style.backgroundColor = "#83bdd0"
   

})