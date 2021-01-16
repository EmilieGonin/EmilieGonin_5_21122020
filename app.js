const PRODUCTS_CONTAINER = document.getElementById("products");

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(teddies => {
  for (let i = 0; i < teddies.length; i++) {
    //Get all teddies properties into variables
    const {_id: id, name, price, imageUrl} = teddies[i];

    //Construct html tags with variables
    const PRODUCT_IMG = `<a href="product.html?id=${id}"><img src="${imageUrl}" class="products__img" alt="${name}"></a>`;
    const PRODUCT_NAME = `<a href="product.html?id=${id}"><h2 class="products__name">${name}</h2></a>`;
    const PRODUCT_PRICE = `<span class="products__price">${createPrice(price)}€</span>`;

    //Create container div
    const PRODUCT_CONTAINER = document.createElement("div");
    PRODUCT_CONTAINER.classList.add("products__product");
    PRODUCT_CONTAINER.innerHTML = PRODUCT_IMG + PRODUCT_NAME + PRODUCT_PRICE;
    PRODUCTS_CONTAINER.appendChild(PRODUCT_CONTAINER);
  }
});
