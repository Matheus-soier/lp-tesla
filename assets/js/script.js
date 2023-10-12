let menuButton = document.querySelector('#menu-button');
let sairButton = document.querySelector('#sair-menu');
let listaMenu = document.querySelector('#lista-menu');

menuButton.addEventListener('click', abrirMenu);
sairButton.addEventListener('click', fecharMenu);

function abrirMenu() {
    if(listaMenu.style.display === 'none' || listaMenu.style.display === '') {
        listaMenu.style.display = 'flex';
    }
}

function fecharMenu() {
    if(listaMenu.style.display === 'flex') {
        listaMenu.style.display = 'none';
    }
}