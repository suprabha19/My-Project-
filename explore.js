let menu=document.querySelector('#menu-bar');
let nav =document.querySelector('.nav');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
});