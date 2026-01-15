






//
const imgHype = document.querySelectorAll(".imgHype");
let currentIndex = 0;

setInterval(() => {
  imgHype[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % imgHype.length;
  imgHype[currentIndex].classList.add("active");
}, 4000);



const images = Array.from({ length: 20 }, (_, i) => `/images/${i + 1}.jpg`);

let current = 0;
let interval;

const carousel = document.getElementById("carousel");
const leftCard = document.querySelector(".left-img");
const centerCard = document.querySelector(".center-img");
const rightCard = document.querySelector(".right-img");

function updateCards() {
  leftCard.src = images[(current - 1 + images.length) % images.length];
  centerCard.src = images[current];
  rightCard.src = images[(current + 1) % images.length];
}

function startAutoPlay() {
  interval = setInterval(() => {
    current = (current + 1) % images.length;
    updateCards();
  }, 3000); // hız buradan
}

function stopAutoPlay() {
  clearInterval(interval);
}

// hover olunca dursun
carousel.addEventListener("mouseenter", stopAutoPlay);
carousel.addEventListener("mouseleave", startAutoPlay);

// ilk yükleme


// Carousel başlatma
document.addEventListener('DOMContentLoaded', () => {
  updateCards();
  startAutoPlay();
});


// pop-up js

const popup = document.querySelector(".popup-img");
const closebtn = document.querySelector(".close-btn");

closebtn.addEventListener("click", () => {
  popup.style.display = "none";
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.style.display = "none";

  }
});

const main = document.querySelector("main");

document.addEventListener("click", (e) => {
 if (!popup.contains(e.target)) {
    popup.style.display = "none";
  }
});

//



// icon visible / transiton

const iconvisible = document.querySelector(".social-icon");
const follow = document.querySelector(".follow");

follow.addEventListener("mouseenter", function(){
    iconvisible.style.opacity = "1";
});
follow.addEventListener("mouseleave", function(){
    iconvisible.style.opacity = "0";
});


// Donut turn

