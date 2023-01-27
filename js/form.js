const sent = document.querySelector('#sent');

sent.addEventListener("click", (e)=>{
    e.preventDefault();
    Swal.fire({
        title: '¡Enviado con éxito!',
        text: 'En breve nos pondremos en contacto',
        icon: 'success',
    });
})