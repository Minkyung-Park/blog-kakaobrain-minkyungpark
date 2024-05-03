// html을 제어하므로
window.addEventListener("load", function () {
  // html에 내용 출력하기
  const makeHtml = (_result) => {
    //   console.log(_result);
    // 할 일 작성
    // 전체 html 저장용 일반 변수
    let allTag = "";
    const crew = document.querySelector("#crew");

    // const total = _result.length;

    // for (let i = 0; i < total; i++) {
    //   const obj = _result[i];
    // }
    // 추천합니다(조건은 대상이 "배열"인 경우)
    _result.forEach((item) => {
      const tag = `<a href=${item.link} className="list-box">
      <div className="list-box-img br-20" style="background: url('./images/${item.imgpath}') no-repeat center; background-size: cover"></div>
      <div className="list-box-cate">
        <img src="./images/icon/${item.icon}" alt="${item.category}" />
        <span style="color:${item.txtcolor};">${item.category}</span>
      </div>
      <p className="list-box-title">${item.title}</p>
      <span className="list-box-day">${item.day}</span>
      </a>`;
      allTag = allTag + tag;
    }); // for (let i = 0; i < total; i++)이 어려우면 이거 써, 화살표 함수를 쓴다

    crew.innerHTML = allTag;
  }; // 호이스팅 때문에 함수를 위에 만든다

  //할일
  const dataUrl = "./apis/crew.json";
  fetch(dataUrl)
    .then((response) => {
      //   console.log(response);
      const result = response.json();
      return result;
    })
    .then((result) => {
      makeHtml(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
