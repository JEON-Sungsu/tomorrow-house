const sidebarMenuBtn = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

function sidebarOpen() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

sidebarMenuBtn.addEventListener('click', sidebarOpen)

function sidebarClose() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', sidebarClose)
