const CART_CONTAINER = document.getElementById("cart");
const CART = JSON.parse(localStorage.getItem("cart"));

if (CART) {
  for (let i = 0; i < CART.length; i++) {
    const {id, name, price, imageUrl, quantity} = CART[i];

    //Create product details tags
    const PRODUCT_IMG = `<a href="product.html?id=${id}"><img src="${imageUrl}" class="cartProducts__img" alt="${name}"></a>`;
    const PRODUCT_DETAILS = `<div class="cartProducts__details"><a href="product.html?id=${id}"><span class="cartProducts__name">${name}</span></a><span class="cartProducts__price">${price/100}€</span></div>`;
    const PRODUCT_TOTAL = `<div class="cartProducts__product-total"><span>x ${quantity}</span><span>${(price/100)*quantity}€</span></div>`

    //Create product container tag
    const PRODUCT_CONTAINER = document.createElement("div")
    PRODUCT_CONTAINER.classList.add("cartProducts__product");
    PRODUCT_CONTAINER.innerHTML = PRODUCT_IMG + PRODUCT_DETAILS + PRODUCT_TOTAL;
    CART_CONTAINER.insertBefore(PRODUCT_CONTAINER, CART_TOTAL_CONTAINER);
  }
}
else {
  CART_CONTAINER.textContent = "Le panier est vide.";
}

const CLEAR_BTN = document.getElementById("clear");
CLEAR_BTN.addEventListener("click", () => {clearCart()});
