function onLoadComplete() {
  let btns = document.querySelectorAll(".invitar");
  for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    console.log(btn);
    btn.onclick = "";
  }
}

function displayAlert() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Invitacion enviada",
    showConfirmButton: false,
    timer: 1000,
  });
}
