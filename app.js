let productsContainer = document.getElementById("products");

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(teddies => {
  for (let i = 0; i < teddies.length; i++) {
    //Get all teddies properties into variables
    const {name, price, imageUrl} = teddies[i];

    //Construct html tags with variables
    const nameTag = `<h2 class="products__name">${name}</h2>`;
    const imgTag = `<img src="${imageUrl}" class="products__img" alt="${name}">`;
    const priceTag = `<span class="products__price">${price/100}€</span>`;

    //Create container div
    const element = document.createElement("div");
    element.classList.add("products__product");
    element.innerHTML = nameTag + imgTag + priceTag;
    productsContainer.appendChild(element);
  }
});
