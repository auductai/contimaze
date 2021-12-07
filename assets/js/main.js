// Muda o ícone através do click
const hamburger = document.querySelector('.menu-hamburger')
const iconClose = document.querySelector('.menu-close')
const menu = document.querySelector('nav')

hamburger.addEventListener('click', function () {
  menu.classList.add('show')
})

iconClose.addEventListener('click', function () {
  menu.classList.remove('show')
})

// Exibe o conteúdo do dropdown
const links = document.querySelectorAll('.principal li')

for (let link of links) {
  link.addEventListener('click', function () {
    link.classList.toggle('show')
  })
}

// Para de exibir o dropdown ao clicar por fora
window.onclick = function (event) {
  if (!event.target.matches('.principal li button span')) {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('show')
    }
  }
}
