const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

//하지만 window에 이벤트 리쓰너를 달게되면 무한정으로 계속해서 어디 클릭할때마다 본 함수가 실행되니까 제동을 걸어줘야한다.
myMenuButton.addEventListener('click', function () {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', myMenuClose)
  }
  myMenu.classList.toggle('is-active')
})

//myMenu가 아닌 밖을 클릭했을 때, active를 없애주기
function myMenuClose(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', myMenuClose)
  }
}
// 1. 현재 내가 클릭한 요소가 무엇인지 확인 => e.target 사용
// 2. 현재 클릭한게, 내가 active를 없애고자하는 요소에 포함이 되었는지 안되었는지 검사 => contains() 메소드 사용
// => myMenu가 e.target을 포함하고 있지 않다면, 그때 myMenu 의 is-active를 제거해줘라 라는 식을 짜면 된다
