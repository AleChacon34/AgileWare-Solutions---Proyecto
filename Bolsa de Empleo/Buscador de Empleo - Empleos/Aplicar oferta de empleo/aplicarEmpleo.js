function onLoadComplete() {
  let btn = document.querySelector("#aplicar");
  btn.onclick = displayAlert;
}

function displayAlert() {
  Swal.fire({
    title: "¿Desea aplicar para este puesto?",
    text: "Confirmar aplicacion de puesto",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aplicar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Puesto aplicado con exito',
        showConfirmButton: false,
        timer: 1000
      });
    }
  });
}
