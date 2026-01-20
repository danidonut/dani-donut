const menuSection = document.querySelector(".menu-section");
const allproduct = document.createElement("div");
const menuFilter =document.createElement("div");
const btnAll = document.createElement("button");
menuFilter.classList.add("menu-filter");
allproduct.classList.add("allproduct");
btnAll.textContent = "Tümünü Seç";
btnAll.classList.add("btn");
btnAll.dataset.category = "all";
allproduct.appendChild(btnAll);


menu.forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category.category;
    btn.classList.add("btn");
    btn.dataset.category = category.category;
    allproduct.appendChild(btn);
    

       btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        const productsContainer = document.querySelectorAll(".container-product");
        productsContainer.forEach(product => {
            
            if (product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

menuFilter.appendChild(allproduct);
menuSection.appendChild(menuFilter);





const a = document.createElement("div");
    a.classList.add("menu-products-h");


    
menu.forEach(category => {
    const containerproduct= document.createElement("div");
    containerproduct.classList.add("container-product");
    containerproduct.dataset.category = category.category;
    a.appendChild(containerproduct);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = category.category;
    containerproduct.appendChild(title);

    category.products.forEach(product => {
        const titleproduct = document.createElement("h2");
        titleproduct.classList.add("title-product");
        titleproduct.textContent = product.name;
        containerproduct.appendChild(titleproduct);
        
        const priceproduct = document.createElement("p");
        priceproduct.classList.add("price-product");
        priceproduct.textContent = product.price;
        containerproduct.appendChild(priceproduct);
    });
});

menuSection.appendChild(a);

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedCategory = btn.dataset.category;
    const productsContainer = document.querySelectorAll(".container-product");

    // 👉 ALL DURUMU
    if (selectedCategory === "all") {
      productsContainer.forEach(product => {
        product.style.display = "block";
      });
      return;
    }

    // 👉 TEK KATEGORİ DURUMU
    productsContainer.forEach(product => {
      if (product.dataset.category === selectedCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});