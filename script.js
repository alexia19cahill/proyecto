
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
let ligth= document.getElementById('luz');
let fondo3= document.getElementById('fondo');


luz.addEventListener("click", () => {
   fondo.style.backgroundColor = "#FFFDFD"
   

})

let texto = document.getElementById ("texto")
let boton1 = document.getElementById ("boton1")
let tabla1 = document.getElementById ("tabla1")
let p2 = document.getElementById ("p")

boton1.addEventListener("click", function () {
 let p2 = document.createElement("texto")
 tabla1.innerHTML = texto.value;
 
    
})

let texto1 = document.getElementById ("texto1")
let boton2 = document.getElementById ("boton2")
let tabla3 = document.getElementById ("tabla3")
let p3= document.getElementById ("p")

boton2.addEventListener("click", function () {
 let p = document.createElement("texto1")
 tabla3.innerHTML = texto1.value;
 
    
})