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

2. SIDEBAR

- 로그인 하였을때

```HTML
        <div class="sidebar-user">
          <a href="/">
            <div class="avatar-24">
              <img src="./assets/images/img-user-01.jpg" alt="사딸라아재" />
            </div>
            <strong class="username">사딸라아재사딸라아재사딸라아재사딸라아재사딸라아재</strong>
          </a>
        </div>
```

- 로그인 하지 않았을 때

```HTML
        <div class="sidebar-auth">
          <a class="btn-outlined btn-40" href="/">로그인</a>
          <a class="btn-primary btn-40" href="/">회원가입</a>
        </div>
```

- DRAWER-MENU(MOBILE)

---

1. 메뉴 햄버거 눌리면 사이드바 등장 및 제거 JS 추가해야함
2. 각 리스트 chevron 클릭시 열고 닫는 JS 추가해야됨.
