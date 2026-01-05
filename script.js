






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
// carousel.addEventListener("mouseenter", stopAutoPlay);
// carousel.addEventListener("mouseleave", startAutoPlay);

// ilk yükleme

function createMenu() {
  const coffeeMenuImg = document.querySelector('.coffee-menu-img');
  const dessertMenuImg = document.querySelector('.dessert-menu-img');

  // Kahve menüsü için
  const coffeeContainer = document.createElement('div');
  coffeeContainer.className = 'menu-container';

  menu.forEach(category => {
    if (category.category !== 'Sıcak Ekstralar') {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'menu-category';
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category.category;
      categoryDiv.appendChild(categoryTitle);

      const productList = document.createElement('ul');
      category.products.forEach(product => {
        const listItem = document.createElement('li');
        let priceText = '';
        if (typeof product.price === 'object') {
          priceText = `Small: ${product.price.small} TL, Large: ${product.price.large} TL`;
        } else {
          priceText = `${product.price} TL`;
        }
        listItem.textContent = `${product.name} - ${priceText}`;
        productList.appendChild(listItem);
      });
      categoryDiv.appendChild(productList);
      coffeeContainer.appendChild(categoryDiv);
    }
  });

  coffeeMenuImg.innerHTML = '';
  coffeeMenuImg.appendChild(coffeeContainer);

  // Tatlılar menüsü için (Sıcak Ekstralar)
  const dessertContainer = document.createElement('div');
  dessertContainer.className = 'menu-container';

  const hotExtras = menu.find(cat => cat.category === 'Sıcak Ekstralar');
  if (hotExtras) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'menu-category';
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = hotExtras.category;
    categoryDiv.appendChild(categoryTitle);

    const productList = document.createElement('ul');
    hotExtras.products.forEach(product => {
      const listItem = document.createElement('li');
      let priceText = '';
      if (typeof product.price === 'object') {
        priceText = `Small: ${product.price.small} TL, Large: ${product.price.large} TL`;
      } else {
        priceText = `${product.price} TL`;
      }
      listItem.textContent = `${product.name} - ${priceText}`;
      productList.appendChild(listItem);
    });
    categoryDiv.appendChild(productList);
    dessertContainer.appendChild(categoryDiv);
  }

  dessertMenuImg.innerHTML = '';
  dessertMenuImg.appendChild(dessertContainer);
}

// Sayfa yüklendiğinde menü oluştur
document.addEventListener('DOMContentLoaded', createMenu);

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