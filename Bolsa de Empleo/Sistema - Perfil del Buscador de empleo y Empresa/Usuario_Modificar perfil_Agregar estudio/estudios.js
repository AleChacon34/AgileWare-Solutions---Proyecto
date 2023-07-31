"use strict";
//este codigo es para añadir estudio//
document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#añadirEstudio');
    btn.onclick = () => {
        location.href = "agregarEstudio.html"
    };
});

document.addEventListener('DOMContentLoaded', () => {
    let modBtns = document.querySelectorAll('.modificar');
    for(let i = 0; i<modBtns.length;i++){
        let modBtn=modBtns[i];
        modBtn.addEventListener("click",direct) 
    }
})
function direct(){
    location.href = "agregarEstudio.html"
}
