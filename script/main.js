const botao = document.querySelector('#menu-icon');

botao.addEventListener('click', () => {
  const menu = document.querySelector('.lista-menu');
  menu.classList.toggle('mostrar');
})