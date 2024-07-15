const logoHam = document.querySelector('.logoHamb');
const ctnList = document.querySelector('.lists');
const ListH = document.querySelector('.list-Ham');
const alert = document.querySelector('.enviar');

logoHam.addEventListener('click', () =>{
    logoHam.classList.toggle('active');
    ctnList.classList.toggle('abrir');
    ListH.classList.toggle('block');
})

alert.addEventListener('click', () => {
    alert('El formulario ha sido enviado correctamente');
});



function iniciarDescarga() {
    var enlace = document.getElementById('descargarArchivo');
    enlace.click(); // Simula un clic en el enlace para iniciar la descarga
}

