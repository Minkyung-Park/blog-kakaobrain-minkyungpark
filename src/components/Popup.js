import React, { useEffect, useRef } from "react";
import "../css/popup.css";

const Popup = () => {
  // 자바스크립트 코드 자리
  // html 태그를 찾을 때는 useRef를 사용하자(리액트스럽다)
  const closeBt = useRef(null); // 없다, 처음엔 무조건 널이다, html 찾기, 리액트에서는 쿼리셀렉터 대신에 useRef 쓰자
  // 창닫기 버튼 html 태그 찾기

  // 리액트에서 화면에 컴포넌트 렌더링 된 시점
  const popup = useRef(null);
  useEffect(() => {
    // const closeBt = document.querySelector(".popup-close");
    // const popup = document.querySelector(".popup");
    const closeBt_Elememt = closeBt.current;
    const popup_Elememt = popup.current;
    const handleClick = function () {
      if (popup_Elememt) {
        popup_Elememt.style.display = "none";
      }
    };

    if (closeBt_Elememt) {
      closeBt_Elememt.addEventListener("click", handleClick);
    }

    // cleanUp 함수 : 컴포넌트가 파괴될때 실행하는 함수
    return () => {
      if (closeBt_Elememt) {
        closeBt_Elememt.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="popup" ref={popup}>
      <div className="popup-content">
        <p>
          <strong>
            Hi there, This is a clone code
            <br />
            I copied a website from "https://blog.kakaobrain.com"
            <br />
            <br />
            Please let me know if there's any problems <br />
            <br />
            Thank you
          </strong>
        </p>
        <button className="popup-close" ref={closeBt}>
          창닫기
        </button>
      </div>
    </div>
  );
};

export default Popup;
