function onLoadComplete() {
    let btns = document.querySelectorAll('.verPostulacion');
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.onclick = redirect;
    }
}

function redirect() {
    window.location.href = "postulacion.html";
}