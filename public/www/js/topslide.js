// html을 다루려고 하는 목적인 경우
window.addEventListener("load", function () {
  // 1. 외부에서 자료를 불러옴
  const dataUrl = "./apis/topslide.json";
  fetch(dataUrl)
    .then((response) => {
      // Step 1. 자료 받아서 json 변경하기
      // 토큰을 JS의 데이터로 변경하기
      const data = response.json();
      // 변환된 결과를 돌려주기
      return data;
    })
    .then((result) => {
      // Step 2. json으로 변경된 데이터 활용하기
      //   console.log(result[0]);
      //   console.log(result[1]);
      //   console.log(result[2]);
      //   console.log(result[3]);
      for (let i = 0; i < result.length; i++) {
        const temp = result[i];
        // console.log(temp.id);
        // console.log(temp.pic);
        // console.log(temp.url);
        console.log(result[i]);

        const aaa = `<div class="swiper-slide">
        <a href="${temp.url}">
        <p class="slide-title">
           ${temp.title}
        </p>
        </a>
    </div>`;

        console.log(aaa);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  // 2. 자료를 이용해서 슬라이드에 배치할 html을 만듦
  // 3. html 완성 후 swiper를 생성함

  //기본 코드를 넣어보자
  var topSlide = new Swiper(".topslide", {});
}); // 렌더링 다되면
