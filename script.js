



let nombre = document.getElementById ("nombre")
//  se hace un variable para adquerir por medio del id el nombre del input
let boton = document.getElementById ("boton")
// se crea una variable para obtener por medio del id  el boton
let tabla = document.getElementById ("tabla")
// se llama una variable  que llevara el id del contenedor padre del texto
let p = document.getElementById ("p")
// este adquiere el texto que se cambiara

boton.addEventListener("click", function () {
   // se llama una funcion que  dara un evento al dar click al boton se ejecutara  en prosedimiento 
 let p = document.createElement("nombre")
//  la variable p tendra el volor de nombre
 tabla.innerHTML = nombre.value;

   // el tabla.innerHTML cambiara el valor a nombre 
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
 let p3 = document.createElement("texto1")
 tabla3.innerHTML = texto1.value;
 
    
})
let texto2 = document.getElementById ("texto2")
let boton3 = document.getElementById ("boton3")
let tabla4 = document.getElementById ("tabla4")
let p4= document.getElementById ("p")

boton3.addEventListener("click", function () {
 let p4 = document.createElement("texto2")
 tabla4.innerHTML = texto2.value;
 
    
})
let texto3 = document.getElementById ("texto3")
let boton4 = document.getElementById ("boton4")
let tabla5 = document.getElementById ("tabla5")
let p5= document.getElementById ("p")

boton4.addEventListener("click", function () {
 let p5 = document.createElement("texto3")
 tabla5.innerHTML = texto3.value;
 
    
})

// se cra un variable que obtendra por medio del id el boton
let nube = document.getElementById('nube');
// por medio del id padre se cambiar de color de fondo del CV
let fondo = document.getElementById('fondo');

//  se crea evento  que al dar click cambiara de color
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

