document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');
    
    const mensajeValidacion = document.getElementById('mensaje-validacion');

    if (form) {
        form.addEventListener('submit', function(event) {
 
            event.preventDefault(); 
            
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const motivo = document.getElementById('motivo').value;

            mensajeValidacion.textContent = ''; 
            
            if (nombre === '' || correo === '' || motivo === '') {
                mensajeValidacion.textContent = 'ERROR: Todos los campos son obligatorios.';
                mensajeValidacion.style.color = 'red';
                return; 
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                mensajeValidacion.textContent = 'ERROR: Por favor, introduce un correo electrónico válido.';
                mensajeValidacion.style.color = 'red';
                return;
            }

            mensajeValidacion.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
            mensajeValidacion.style.color = 'green';
            
            form.reset();
        });
    } else {
        console.error("El formulario con el ID 'contactForm' no se encontró en el DOM.");
    }
});