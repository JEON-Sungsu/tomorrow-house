const searchModal = document.querySelector('.search-modal')
const searchBtn = document.querySelector('.gnb-icon-button.is-search')
const searchModalClose = searchModal.querySelector('.btn-ghost.btn-40')

searchBtn.addEventListener('click', function () {
  searchModal.classList.add('is-active')
})

searchModalClose.addEventListener('click', function () {
  searchModal.classList.remove('is-active')
})
