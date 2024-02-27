var contenedor = document.querySelector(".contenedor")
var ruedas = document.querySelector(".llanta1")
var ruedas2 = document.querySelector(".llanta2")
var sprite = document.querySelector(".fuego")
var luz = document.querySelector(".luz")

contenedor.addEventListener("click", foondo)

function foondo(){
    contenedor.classList.add('fondo')
    ruedas.classList.add('llantas')
    ruedas2.classList.add('llantas')
    sprite.classList.remove('oculto')
    luz.classList.remove('oculto')
    sprite.classList.add('fuegoMover')
    luz.classList.add('luzMover')
}
