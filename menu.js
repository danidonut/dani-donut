// ============================
// MENU FILTER & RENDER
// ============================

const menuSection = document.querySelector(".menu-section");
const allproduct = document.createElement("div");
const menuFilter = document.createElement("div");
const btnAll = document.createElement("button");

menuFilter.classList.add("menu-filter");
allproduct.classList.add("allproduct");

btnAll.textContent = "Tümünü Seç";
btnAll.classList.add("btn");
btnAll.dataset.category = "all";
allproduct.appendChild(btnAll);

// ----------------------------
// KATEGORİ BUTONLARI
// ----------------------------

menu.forEach(category => {
  const btn = document.createElement("button");
  btn.textContent = category.category;
  btn.classList.add("btn");
  btn.dataset.category = category.category;
  allproduct.appendChild(btn);
});

menuFilter.appendChild(allproduct);
menuSection.appendChild(menuFilter);

// ============================
// PRODUCTS AREA
// ============================

const a = document.createElement("div");
a.classList.add("menu-products-h");

menu.forEach(category => {

  const containerproduct = document.createElement("div");
  containerproduct.classList.add("container-product");
  containerproduct.dataset.category = category.category;
  a.appendChild(containerproduct);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = category.category;
  containerproduct.appendChild(title);

  category.products.forEach(product => {

 
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    // ------------------------

    const titleproduct = document.createElement("h2");
    titleproduct.classList.add("title-product");
    titleproduct.textContent = product.name;

    // ------------------------

    const priceproduct = document.createElement("div");
    priceproduct.classList.add("price-product");

    priceproduct.append(renderPrice(product.price));

    // ------------------------


    productItem.appendChild(titleproduct);
    productItem.appendChild(priceproduct);

    // container-product içine product-item ekleniyor
    containerproduct.appendChild(productItem);

  });

});

menuSection.appendChild(a);

// ============================
// BUTTON ACTIVE STATE
// ============================

const buttons = document.querySelectorAll(".btn");

if (buttons.length) {
  buttons[0].classList.add("active");
}

// ============================
// FILTER SYSTEM
// ============================

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const selectedCategory = btn.dataset.category;
    const productsContainer = document.querySelectorAll(".container-product");

    if (selectedCategory === "all") {
      productsContainer.forEach(product => {
        product.style.display = "";
      });
      return;
    }

    productsContainer.forEach(product => {
      if (product.dataset.category === selectedCategory) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });

  });
});

// ============================
// PRICE RENDER FUNCTION
// ============================

function renderPrice(price) {

  const priceWrapper = document.createElement("div");
  priceWrapper.classList.add("price-wrapper");

  // ------------------------
  // TEK FİYAT
  // ------------------------

  if (typeof price === "number") {

    const span = document.createElement("span");
    span.classList.add("price-single");
    span.textContent = price + "₺";
    priceWrapper.appendChild(span);

    return priceWrapper;
  }

  // ------------------------
  // SMALL - LARGE
  // ------------------------

  const small = document.createElement("span");
  small.classList.add("price-small");
  small.textContent = "S: " + price.small + "₺";

  const large = document.createElement("span");
  large.classList.add("price-large");
  large.textContent = "L: " + price.large + "₺";

  priceWrapper.appendChild(small);
  priceWrapper.appendChild(large);

  return priceWrapper;
}
