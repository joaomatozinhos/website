let menuMobile = document.getElementById('menu-mobile')

menuMobile.addEventListener('click', showMenu)

function showMenu() {
  let itemsMenuMobile = document.getElementById('items-menu-mobile')

  itemsMenuMobile.classList.toggle('show-menu-mobile')
}
