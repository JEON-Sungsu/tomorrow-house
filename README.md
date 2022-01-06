# 오늘의집 퍼블리싱

1. GNB

- 로그인이 되었을 때

```HTML
                <div class="button-group">
                  <button class="lg-hidden gnb-icon-button is-search" type="button" aria-label="검색창 열기 버튼">
                    <i class="ic-search"></i>
                  </button>
                  <a class="sm-hidden gnb-icon-button" href="/" aria-label="북마크로 이동">
                    <i class="ic-bookmark"></i>
                  </a>
                  <a class="sm-hidden gnb-icon-button" href="/" aria-label="내 소식 페이지로 이동">
                    <i class="ic-bell"></i>
                  </a>
                  <a class="gnb-icon-button is-cart" href="/" aria-label="장바구니로 이동">
                    <i class="ic-cart"></i>
                    <strong class="badge">99</strong>
                  </a>
                  <button class="sm-hidden gnb-avatar-button" type="button" aria-label="유저 프로필">
                    <div class="avatar-32">
                      <img src="./assets/images/img-user-01.jpg" alt="User Image" />
                    </div>
                  </button>
                </div>
```

- 로그인 하지 않았을 때

```HTML
                <div class="button-group">
                  <button class="lg-hidden gnb-icon-button is-search" type="button" aria-label="검색창 열기 버튼">
                    <i class="ic-search"></i>
                  </button>
                  <a class="gnb-icon-button is-cart" href="/" aria-label="장바구니로 이동">
                    <i class="ic-cart"></i>
                  </a>

                  <div class="gnb-auth sm-hidden">
                    <a href="/">로그인</a>
                    <a href="/">회원가입</a>
                  </div>
                </div>
```
