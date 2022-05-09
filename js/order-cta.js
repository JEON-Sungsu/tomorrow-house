const orderCta = document.querySelector('.order-cta')
const [bookMark, buyButton] = orderCta.children
// const buyButton = orderCta.querySelector('.btn-primary.btn-48')
// const bookMark = orderCta.querySelector('.btn-ghost.btn-48')
console.log(bookMark)

const orderFormModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

buyButton.addEventListener('click', function () {
  orderFormModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
})

orderModalOverlay.addEventListener('click', function () {
  orderFormModal.classList.remove('is-open')
})

bookMark.addEventListener('click', toggleOrderCtaBookmark)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children //북마크 아이콘, 카운터 span
  const count = Number(countSpan.innerHTML.replace(',', '')) // 안에있는 18,383개라는 값에서 콤마가 있으면 string 값으로밖에 안되니, 이걸 빼주는 역할을 한다.

  let newCount = count

  if (this.classList.contains('is-active')) {
    //NOTE: 활성화가 된 상태이니 비활성화로 바꿔라
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    //NOTE: 비활성화가 된 상태이니 활성화로 바꿔라
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-lable', `북마크 ${newCount.toLocaleString()}회`)

  this.classList.toggle('is-active')
}
