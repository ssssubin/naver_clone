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

window.onload = RefreshDate();
