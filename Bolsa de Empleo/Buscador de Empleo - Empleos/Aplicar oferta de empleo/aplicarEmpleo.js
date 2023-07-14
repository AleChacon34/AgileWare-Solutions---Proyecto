/**
 * Al cargar la pagina, se le asigna el evento de la alerta al boton
 */
document.addEventListener('DOMContentLoaded', () => {
  let btn = document.querySelector("#aplicar");
  btn.onclick = displayAlert;
});

/**
 * Funcion uqe despliega la alerta con dos opciones
 * Aplicar a puesto o Cancelar
 */
function displayAlert() {
  Swal.fire({
    title: "¿Desea aplicar para este puesto?",
    text: "Confirmar aplicacion de puesto",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
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
