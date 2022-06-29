const reviewLightButton = document.querySelectorAll('.review-card-footer button')

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요.'

function toggleReviewLightButton() {
    const isLiked = this.classList.contains('btn-primary')
    const textElement = this.nextElementSibling
    const reviewCardFooter = this.parentNode

    if (isLiked) {
        this.innerHTML = NOT_HELPFUL
    } else {
        this.innerHTML = HELPFUL
        const checkIcon = document.createElement('i')
        checkIcon.classList.add('ic-check')
        checkIcon.setAttribute('aria-hidden', true)
        this.prepend(checkIcon)
    }

    if (textElement) {
        const countSpan = textElement.querySelector('span')
        const count = Number(countSpan.innerHTML.replaceAll(',', ''))

        let newCount = count
        if (isLiked) {
            newCount -= 1
            if (newCount === 0) {
                reviewCardFooter.removeChild(textElement)
            } else {
                countSpan.innerHTML = newCount.toLocaleString()
            }
        } else {
            newCount += 1
            countSpan.innerHTML = newCount.toLocaleString()
        }
    } else {
        if (!isLiked) {
            const newTextElement = document.createElement('p')
            newTextElement.innerHTML = `<strong><span>1</span>명</strong>에게 도움이 되었습니다.`
            reviewCardFooter.appendChild(newTextElement)
        }
    }

    this.classList.toggle('btn-primary')
    this.classList.toggle('btn-outlined')
}

reviewLightButton.forEach(function (el) {
    el.addEventListener('click', toggleReviewLightButton)
})

/****** toggleReviewLightButton 함수 flow *******
 * 1. 클릭하는 버튼(reviewLightButton)의 상태를 체크한다(현재 좋아요 눌린상태인지 아닌지)
 * 2. 눌려진 상태값에 따라사 텍스트 변경을 넣어준다.
 * 3. 현재 active 된 버튼 외에, 이 버튼의 active 상태에 따라서 변경되야될 요소를 변수에 담는다.(textElement)
 * 4. textElement 에서 변경되야될 값을 변수에 담는다. (countSpan)
 * 5. countSpan을 어떻게 변경해줄지 조건을 걸어준다.
 * 6. 현재 reviewLightButton 이 active 인지 아닌지, active라면 countSapn 을 -1 해주고 아니라면 +1 해준다.
 * 7. 이 때 reviewLightButton가, active가 아니고, 기존에 active 된적이 없어 최초의 active라면
 *    새로운 DOM 을 추가해준다.
 * 8. reviewLightButton가 active 된 상태인데, 그걸 누른게 현재의 유저이고, 내가 취소를해서 active 상태값이
 *    0이 된다면, DOM을 지워준다.
 *
 *
 *
 *
 ************/

/*****  스크립트 메모   ********
 * document.createElement('태그네임') dom을 생성하는 스크립트
 * appendChild, prepend 어떤 요소를 특정 부모요소의 자식요소로 삽입하는 메소드 append는 제일 마지막 자식으로, prepend는 첫 자식으로 before와 after 느낌임.
 * 요소를 추가작업할때는, 요소를 감싸는 부모요소에게 작업을 해야한다.
 * 위의 else 문과 같이 나누어서 html을 사용하는게 정석이지만
 * 편하게 하기 위에서 그냥 전역으로
 * const icon = '<i class="ic-checked" aria-hidden></i>
 * this.innerHTML = icon + HELPFUL
 * 이런식으로 만들어도 무방하다.
 *
 * 의문점이 textElement 라는 변수가.. return 값이 true false 인가? 어떻게 저게 적용이되지?
 *************/
