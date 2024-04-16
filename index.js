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

// slide
let slider = document.querySelector("#left__first");
let slides = slider.querySelector(".slides");
let slide = slides.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(function () {
  let from = -(835 * currentSlide);
  let to = from - 835;
  slides.animate(
    { marginLeft: [from + "px", to + "px"] },
    {
      duration: 1000,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  currentSlide++;
  if (currentSlide === slide.length - 1) currentSlide = 0;
}, 5000);

leftBtn.addEventListener("click", leftBtnOnClick);
rightBtn.addEventListener("click", rightBtnOnClick);
shopLeftBtn.addEventListener("click", shopLeftBtnOnClick);
shopRightBtn.addEventListener("click", shopRightBtnOnClick);
window.onload = RefreshDate();
