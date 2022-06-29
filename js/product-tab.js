const productTab = document.querySelector('.product-tab')
const productTabBtnList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')
const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

function toggleActiveTab() {
    const tabItem = this.parentNode

    if (currentActiveTab !== tabItem) {
        tabItem.classList.add('is-active')
        currentActiveTab.classList.remove('is-active')
        currentActiveTab = tabItem
    }
}

function scrollToTabPanel() {
    const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
    const tabPanel = document.querySelector(`#${tabPanelId}`)

    const scrollAmount = tabPanel.getBoundingClientRect().top - (window.innerWidth > 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

    window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
    })
}
/********scrollToTabPanel*************
 * 탭 클릭시 해당하는 섹션으로 이동시켜주는 함수
 * 1. 탭클릭시 aria-labelledby를 가져온다. getAttribute
 *(그 전에, 탭버튼과 동작하고자 하는 섹션의 ID 값을 일치시켜주어야 한다.)
 *
 * 2. aria-labelledby 를 통해서 위치하고자 하는 요소의 ID값을 가져오도록 한다.
 * const tabPanel = document.querySelector(`#${tabPanelId}`)
 *
 * 3. 이동하고자 하는 요소의 위치값을 구해준다. getBoundingClientRect().top
 * 근데 getBoundingClientRect은 뷰포트상에서 어디에 존재하는지 값을 리턴해줌. 즉 상대값임 절대값이 아니고.
 *
 * 4. window.scrollBy({}) 메소드로 top 에서 어느 좌표값까지 이동할것인지를 정해줌.
 * scrollBy를 통해서 지정하는 값은, 절대값임. 페이지의 전체 window 창의 최상단에서 어느좌표로 이동할것인지.
 *
 *
 */

productTabBtnList.forEach((button) => {
    button.addEventListener('click', toggleActiveTab)
    button.addEventListener('click', scrollToTabPanel)
})
