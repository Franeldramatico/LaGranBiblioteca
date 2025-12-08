// Función para abrir sobres
function openEnvelope(id) {
    const envelope = document.getElementById(`envelope-${id}`);
    if (!envelope.classList.contains('opened')) {
        envelope.classList.add('opened');
    }
}

// Función para mostrar contexto con SweetAlert
function showContext(event, title, description) {
    event.stopPropagation();
    Swal.fire({
        title: title,
        text: description,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#6a0000',
        background: '#1a1a1a',
        color: '#e0e0e0',
        customClass: {
            popup: 'border-2 border-gothic-red',
            title: 'font-uncial text-gothic-red-bright',
            htmlContainer: 'font-crimson'
        }
    });
}
