/*
[의사 코드]
<상단 로고 기능>
처음에는 로고가 기본 그림이 보임
사용자가 마우스 오버를 하면 로고가 부드럽게 변경이 됨
사용자가 마우스 아웃을 하면 로고가 첫 기본 그림으로 보임
나는 위의 기능을 구현하기 위해서 Swiper 라이브러리를 사용할 예정임
이유는 React로 migration을 하기 위해서

1. 라이브러리를 사용하려면 reference를 참조해야함
https://swiperjs.com/

Effect fade 사용할 거임

*/
// 만약 html 태그를 참조해야 하는 경우라면
// (1) html 태그 제일 뒷쪽에서 참조함(비추천)
// (2) window.onload = function() {코드} (비추천)
// (3) window.addEventListener("load", function() {코드}) (적극 추천, 협업 할 때)

/*
html을 참조할려면 무조건 이거 써야함, html 로딩이 다 끝나면, html이 준비됐다는 걸 알려줌, html 준비가 다 됐다라는 뜻 → window.addEventListener("load", function () {});

아래 구문은 html 태그, css 파일, image 파일, js 파일 등이 로드 완료시 실행
*/

window.addEventListener("load", function () {
  const logoSlide = new Swiper(".swlogo", {
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

  // 무조건 모션이 재생되면 안됨
  logoSlide.autoplay.stop();

  // 사용자가 마우스 오버하면 모션 재생
  // .header-logo-link 클래스에 마우스 오버하면 logoSlide가 모션 재생
  const headerLogoLink = document.querySelector(".header-logo-link"); // CSS형태인 .header-logo-link를 찾을거야

  // console.log(headerLogoLink);
  headerLogoLink.addEventListener("mouseenter", function () {
    logoSlide.autoplay.start();
  }); // 마우스가 올려지면
  headerLogoLink.addEventListener("mouseleave", function () {
    logoSlide.autoplay.stop();
    logoSlide.slideTo(0); // 마우스 떼면 첫 사진으로 바꿔라
  }); // 마우스가 떠나면
}); // html 로딩이 다 끝나면, html이 준비됐다는 걸 알려줌, html 준비가 다 됐다라는 뜻

// document = html이라고 함
// querySelector -> CSS로 선택을하는거다 그리고 찾아봐라
// 문서에서 .swlogo를 찾아봐라
// JS에서는 카멜케이스 써야함(swLogo)
// ID면 #을 넣음
// JS는 작성 순서가 굉장히 중요
// 변수 : 데이터를 저장할 수 있는 것(const(바뀔 일이 없음), let)
