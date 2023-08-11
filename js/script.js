const targetDate = new Date(document.querySelector(".count_down").dataset.date);
// const countDownElm = Array.from(document.querySelector(".count_down").children);
const countDownItemElm = Array.from(document.querySelectorAll(".count"));

const countDown = setInterval(() => {
  let today = new Date();
  let dateDiff = (targetDate - today) / 1000; // millisecond to sec total value
  if (dateDiff > 0) {
    countDownItemElm[0].innerText = Math.floor(dateDiff / 3600 / 24); //days
    countDownItemElm[1].innerText = Math.floor((dateDiff / 3600) % 24); //hour
    countDownItemElm[2].innerText = Math.floor((dateDiff / 60) % 60); //min
    countDownItemElm[3].innerText = Math.floor(dateDiff % 60); //sec
  } else {
    clearInterval(countDown);
  }
}, 1000);
