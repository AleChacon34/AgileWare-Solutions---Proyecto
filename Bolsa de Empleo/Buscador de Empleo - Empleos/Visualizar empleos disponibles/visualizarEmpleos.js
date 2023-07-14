function onLoadComplete() {
    let btns = document.querySelectorAll('button');
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.onclick = displayOffer;
    }
}

function displayOffer() {
    window.location.href = "../Aplicar oferta de empleo/aplicarEmpleo.html";
}