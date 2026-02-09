document.addEventListener("DOMContentLoaded", () => {


  const imgHype = document.querySelectorAll(".imgHype");
  let currentIndex = 0;

  setInterval(() => {
    imgHype[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % imgHype.length;
    imgHype[currentIndex].classList.add("active");
  }, 4000);



  const images = Array.from(
    { length: 27 },
    (_, i) => `/images/${i + 1}.webp`
  );

  const menuImages = images.slice(0, 10);

  function initCarousel(container, imageList) {

    const left = container.querySelector(".left-img");
    const center = container.querySelector(".center-img");
    const right = container.querySelector(".right-img");

    let current = 0;

    function update() {


      left.loading = "lazy";
      right.loading = "lazy";

      center.loading = "eager";
      center.fetchPriority = "high";

      left.src =
        imageList[(current - 1 + imageList.length) % imageList.length];

      center.src =
        imageList[current];

      right.src =
        imageList[(current + 1) % imageList.length];
    }

    setInterval(() => {
      current = (current + 1) % imageList.length;
      update();
    }, 3000);

    update();
  }

  document.querySelectorAll("[data-carousel]").forEach(carousel => {

    const type = carousel.dataset.carousel;

    if (type === "hero") {
      initCarousel(carousel, images);
    }

    if (type === "menu") {
      initCarousel(carousel, menuImages);
    }

  });


  // ============================
  // POPUP
  // ============================

  const popup = document.querySelector(".popup-img");
  const closebtn = document.querySelector(".close-btn");

  popup.style.display = "none";

  // 4 saniye sonra popup aç
  setTimeout(() => {
    popup.style.display = "block";
  }, 4000);


  closebtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popup.style.display = "none";
    }
  });


  // ============================
  // SOCIAL ICON HOVER
  // ============================

  const iconvisible = document.querySelector(".social-icon");
  const follow = document.querySelector(".follow");

  follow.addEventListener("mouseenter", () => {
    iconvisible.style.opacity = "1";
  });

  follow.addEventListener("mouseleave", () => {
    iconvisible.style.opacity = "0";
  });

  // ============================
  // HAMBURGER MENU
  // ============================

  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".right");
  const hamburgerIcon = hamburger.querySelector("i");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        // Kapanış animasyonu
        menu.style.animation = "slideOutRight 0.3s ease-in-out forwards";
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
        setTimeout(() => {
          menu.classList.remove("active");
          menu.style.animation = "";
        }, 300);
      } else {
        // Açılış animasyonu
        menu.classList.add("active");
        menu.style.animation = "slideInRight 0.3s ease-in-out forwards";
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-xmark");
      }
    });

    // Menü item'e tıklanırsa menü kapanır
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.style.animation = "slideOutRight 0.3s ease-in-out forwards";
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
        setTimeout(() => {
          menu.classList.remove("active");
          menu.style.animation = "";
        }, 300);
      });
    });
  }

});
