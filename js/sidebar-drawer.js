const drawerMenuBtnList = document.querySelectorAll('.sidebar-nav .drawer-menu-button')

function drawerMenuToggle() {
  const drawerMenu = this.parentNode //부모요소를 지칭함
  drawerMenu.classList.toggle('is-open')
  drawerMenu.classList.toggle('is-active')
}

// drawerMenuBtnList[0].addEventListener('click', drawerMenuToggle)

drawerMenuBtnList.forEach(function (els) {
  els.addEventListener('click', drawerMenuToggle)
})
