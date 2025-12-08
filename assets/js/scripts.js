document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('#contador-dias')) {
        const fechaInicio = new Date('2023-10-26'); // Reemplaza con la fecha de inicio de la relación
        const hoy = new Date();
        const diferencia = hoy.getTime() - fechaInicio.getTime();
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        document.querySelector('#contador-dias').textContent = `${dias} días`;
    }

    if (window.location.pathname.endsWith('index.html')) {
        Swal.fire({
            title: '¡Bienvenida a nuestro rincón especial!',
            text: 'Espero que te guste este pequeño espacio que he creado para nosotros.',
            icon: 'success',
            confirmButtonText: '¡Gracias!',
            customClass: {
                confirmButton: 'btn btn-primary'
            }
        });
    }
});

function enviarMensaje() {
    const mensaje = document.querySelector('#mensaje').value;
    if (mensaje.trim() !== '') {
        Swal.fire({
            title: '¡Mensaje enviado!',
            text: 'Gracias por tus palabras, mi amor.',
            icon: 'success',
            confirmButtonText: 'Cerrar',
            customClass: {
                confirmButton: 'btn btn-primary'
            }
        });
        document.querySelector('#mensaje').value = '';
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, escribe un mensaje antes de enviar.',
            icon: 'error',
            confirmButtonText: 'Entendido',
            customClass: {
                confirmButton: 'btn btn-primary'
            }
        });
    }
}
