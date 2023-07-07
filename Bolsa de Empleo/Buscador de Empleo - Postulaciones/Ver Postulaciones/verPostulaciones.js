function onLoadComplete() {
    let btns = document.querySelectorAll('button');
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.onclick = redirect;
    }
}

function redirect() {
    window.location.replace("postulacion.html");
}