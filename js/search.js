const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('.search-history-list')

const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button')
const deleteListButton = gnbSearchHistoryList.querySelectorAll('.search-history-item .delete-button')

//검색 목록이 아닌, 다른영역을 클릭했을 때, 검색 히스토리 드롭다운을 없애고
//윈도우에 걸어두었던 이벤트함수를 같이 지워주는 함수
function closeDropDown() {
  window.addEventListener('click', function (e) {
    if (!gnbSearch.contains(e.target)) {
      //contains는 해당 요소의 모든 자식요소를 포함한다. gnbSearch안에 있는 모든 자식요소들을 의미함
      gnbSearchHistory.classList.remove('is-active')
      this.removeEventListener('click', closeDropDown)
    }
  })
}

function dropDownOpen() {
  if (gnbSearchHistoryList.children.length == 0) {
    return
  }
  gnbSearchHistory.classList.add('is-active')

  if (gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeDropDown)
  }
}

gnbSearchInput.addEventListener('focus', dropDownOpen)

deleteAllButton.addEventListener('click', function () {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
})

function deleteSearchHistoryItem(e) {
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)
  e.stopPropagation()
  if (gnbSearchHistoryList.children.length == 0) {
    gnbSearchHistory.remove('is-active')
  }
}

deleteListButton.forEach(function (el) {
  el.addEventListener('click', deleteSearchHistoryItem)
})
