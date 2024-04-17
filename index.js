const date = document.getElementById("date");
const arrowPath = document.querySelector("arrow-path");

function RefreshDate() {
  const time = new Date();
  let month = time.getMonth() + 1;
  let currentDate = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  date.innerText = `${month}.${currentDate}. ${hour}:${min}`;
}

const leftBtn = document.querySelector("#left-btn");
const div = document.querySelector(".left__second-bottom div");
let count = 1;
function leftBtnOnClick() {
  if (count === 1) div.innerText = `언론사 더보기 1/4`;
  else {
    count -= 1;
    div.innerText = `언론사 더보기 ${count}/4`;
  }
}

const rightBtn = document.querySelector("#right-btn");
function rightBtnOnClick() {
  if (count === 4) {
    div.innerText = `언론사 더보기 4/4`;
  } else {
    count += 1;
    console.log(count);
    div.innerText = `언론사 더보기 ${count}/4`;
  }
}

const shopLeftBtn = document.querySelector("#third-bottom-left-btn");
let shopCount = 1;
const shopDiv = document.querySelector(".left__third-bottom div");
function shopLeftBtnOnClick() {
  if (shopCount === 1) shopDiv.innerText = `쇼핑아이템 더보기 1/4`;
  else {
    shopCount -= 1;
    shopDiv.innerText = `쇼핑아이템 더보기 ${shopCount}/4`;
  }
}

const shopRightBtn = document.querySelector("#third-bottom-right-btn");
function shopRightBtnOnClick() {
  if (shopCount === 4) shopDiv.innerText = `쇼핑아이템 더보기 4/4`;
  else {
    shopCount += 1;
    shopDiv.innerText = `쇼핑아이템 더보기 ${shopCount}/4`;
  }
}

// slide 구현
let slider = document.querySelector("#left__first");
let slide = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(function () {
  // 서서히 이미지가 보이도록 하는 애니메이션
  slider.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 5000,
      easing: "ease-in-out",
    }
  );

  currentSlide++;
  // active 클래스는 화면에 보이도록 하는 클래스
  slide[currentSlide - 1].classList.remove("active"); //이전 슬라이드의 active class 삭제
  slide[currentSlide].classList.add("active"); // 현재 슬라이드에 active class 추가

  if (currentSlide === slide.length - 1) {
    //현재 슬라이드가 마지막 슬라이드가 됐을 때 초기화
    currentSlide = 0;
  }
}, 15000);

// 스크롤 내리면 특정 지점에서 검색어창도 따라 내려오도록 하는 코드
const fixSearch = document.querySelector(".fixedDiv");
const fixP = document.querySelector(".fixedDiv p");
const fixInput = document.querySelector(".fixedDiv input");
const fixImg = document.querySelector(".fixedDiv img");
window.addEventListener("scroll", function () {
  let scrollY = this.scrollY; //현재 스크롤 위치 (Y좌표)
  if (scrollY >= 267) {
    fixSearch.classList.remove("hidden");
    fixP.classList.remove("hidden");
    fixInput.classList.remove("hidden");
    fixImg.classList.remove("hidden");
    fixSearch.classList.add("search");
  } else {
    fixSearch.classList.add("hidden");
    fixP.classList.add("hidden");
    fixImg.classList.add("hidden");
    fixInput.classList.add("hidden");
    fixSearch.classList.remove("search");
  }
});

leftBtn.addEventListener("click", leftBtnOnClick);
rightBtn.addEventListener("click", rightBtnOnClick);
shopLeftBtn.addEventListener("click", shopLeftBtnOnClick);
shopRightBtn.addEventListener("click", shopRightBtnOnClick);
window.onload = RefreshDate();
