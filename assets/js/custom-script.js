const days = document.querySelector(".day .timer span");
const hours = document.querySelector(".hour .timer span");
const mins = document.querySelector(".min .timer span");
const secs = document.querySelector(".sec .timer span");

const eventDate = new Date("2024-08-10T18:00:00");
const currentDate = new Date();
if (eventDate - currentDate > 1) {
  setInterval(() => {
    const eventDate = new Date("2024-08-10T18:00:00");
    const currentDate = new Date();
    const differenceInMilliseconds =
      eventDate.getTime() - currentDate.getTime();
    const secondsRemains = Math.floor(
      (differenceInMilliseconds % (1000 * 60)) / 1000
    );
    const minRemains = Math.floor(
      (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    const hoursRemains = Math.floor(
      (differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const daysRemains = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    days.innerText = daysRemains;
    hours.innerText = hoursRemains;
    mins.innerText = minRemains;
    secs.innerText = secondsRemains;
  }, 1000);
} else {
  days.innerText = 0;
  hours.innerText = 0;
  mins.innerText = 0;
  secs.innerText = 0;
}

const hideElement = document.querySelector("footer .container .line_animation");
hideElement.style.display = "none";

const insertElement =
  '<div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div>';
const getFooter = document.querySelector("footer");
const lineElement = document.createElement("div");
lineElement.classList.add("line_animation");
lineElement.innerHTML = insertElement;
getFooter.appendChild(lineElement);

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#3b3187 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
