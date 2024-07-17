const logoHam = document.querySelector('.logoHamb');
const ctnList = document.querySelector('.lists');
const ListH = document.querySelector('.list-Ham');
const alert = document.querySelector('.enviar');

logoHam.addEventListener('click', () =>{
    logoHam.classList.toggle('active');
    ctnList.classList.toggle('abrir');
    ListH.classList.toggle('block');
})


