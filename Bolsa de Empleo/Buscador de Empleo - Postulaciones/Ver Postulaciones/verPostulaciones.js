/**
 * Al cargar la pagina, se le asigna el evento a los botones
 */
document.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll('.verPostulacion');
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.onclick = redirect;
    }
});

/**
 * Funcion que redirige a la pagina de la postulacion
 */
function redirect() {
    window.location.href = "postulacion.html";
}