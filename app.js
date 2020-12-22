let productsContainer = document.getElementById("products");

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(teddies => {
  for (let i = 0; i < teddies.length; i++) {
    //Get all teddies properties into variables
    const {_id: id, name, price, imageUrl} = teddies[i];

    //Construct html tags with variables
    const nameTag = `<a href="product?id=${id}"><h2 class="products__name">${name}</h2></a>`;
    const imgTag = `<a href="product?id=${id}"><img src="${imageUrl}" class="products__img" alt="${name}"></a>`;
    const priceTag = `<span class="products__price">${price/100}€</span>`;

    //Create container div
    const element = document.createElement("div");
    element.classList.add("products__product");
    element.innerHTML = imgTag + nameTag + priceTag;
    productsContainer.appendChild(element);
  }
});
