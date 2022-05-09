const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('.search-history-list')

const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button')

function closeDropDown() {
  window.addEventListener('click', function (e) {
    if (!gnbSearch.contains(e.target)) {
      gnbSearchHistory.classList.remove('is-active')
      this.removeEventListener('click', closeDropDown)
    }
  })
}

function dropDownOpen() {
  if (gnbSearchHistoryList.children.length == 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeDropDown)
  }
  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', dropDownOpen)

deleteAllButton.addEventListener('click', function () {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
})
