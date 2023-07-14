/**
 * Al cargar la pagina, se le asigna el evento a los botones dentro del html (excepto al del nav)
 */
document.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll('.visualizar');
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.onclick = displayOffer;
    }
});

/**
 * Funcion que redirige a la pagina de aplicar empleo
 */
function displayOffer() {
    window.location.href = "../Aplicar oferta de empleo/aplicarEmpleo.html";
}