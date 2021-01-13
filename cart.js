const CART_CONTAINER = document.getElementById("cart");
const CART = JSON.parse(localStorage.getItem("cart"));

if (CART) {
  for (let i = 0; i < CART.length; i++) {
    const {id, name, price, imageUrl, quantity} = CART[i];

    //Construct html tags with variables
    const nameTag = `<h2 class="cartProducts__name">${name}</h2>`;
    const imgTag = `<a href="product.html?id=${id}"><img src="${imageUrl}" class="cartProducts__img" alt="${name}"></a>`;
    const priceTag = `<span class="cartProducts__price">${price/100}€</span>`;
    const quantityTag = `<span class="cartProducts__quantity">${quantity}</span>`;

    //Create container div
    const element = document.createElement("div");
    element.classList.add("cartProducts__product");
    element.innerHTML = imgTag + nameTag + priceTag + quantityTag;
    CART_CONTAINER.appendChild(element);
  }
}
else {
  CART_CONTAINER.textContent = "Le panier est vide.";
}

const CLEAR_BTN = document.getElementById("clear");
CLEAR_BTN.addEventListener("click", () => {clearCart()});
