const slider = tns({
  container: '.product-carousel .slider-list',
  items: 1,
  navContainer: '.product-carousel .thumbnail-list',
  controls: false,
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .user-gallery-thumbnail .thumbnail-list',
  controls: false,
  controlsContainer: '.user-gallery.is-mobile .user-gallery-controls', //컨트롤 이동버튼 커스터마이징 컨테이너 지정
  gutter: 4, //슬라이드별 간격 px 임
  edgePadding: 16, //다음 슬라이드를 양옆에 보여지게 해주는 간격 px 임
  loop: false, //슬라이드 무한반복 이걸하면 edgePadding 을 주더라도 제일 첫 슬라이드에서 양옆이 아니라 우측으로만 드러난다.
  arrowKeys: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  preventScrollOnTouch: true,

  // responsive: {
  //   768: {
  //     gutter: 6,
  //     controls: true,
  //     edgePadding: 75,
  //   }, //tablet 반응형
  // }
})

const userGallery = tns({
  container: '.user-gallery.is-desktop .slider-list',
  navContainer: '.user-gallery.is-desktop .user-gallery-thumbnail .thumbnail-list',
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls', //컨트롤 이동버튼 커스터마이징 컨테이너 지정
  controls: true,
  gutter: 6, //슬라이드별 간격 px 임
  edgePadding: 75, //다음 슬라이드를 양옆에 보여지게 해주는 간격 px 임
  loop: false, //슬라이드 무한반복 이걸하면 edgePadding 을 주더라도 제일 첫 슬라이드에서 양옆이 아니라 우측으로만 드러난다.
  arrowKeys: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
