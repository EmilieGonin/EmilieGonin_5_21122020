const CART_CONTAINER = document.getElementById("cart");

if (CART) {
  for (let i = 0; i < CART.length; i++) {
    const {_id: id, name, price, imageUrl, quantity} = CART[i];

    //Create product details tags
    const PRODUCT_IMG = `
      <a href="product.html?id=${id}">
        <img src="${imageUrl}" class="cartProducts__img" alt="${name}" />
      </a>
    `;
    const PRODUCT_DETAILS = `
      <div class="cartProducts__details">
        <a href="product.html?id=${id}">
          <span class="cartProducts__name">${name}</span>
        </a>
        <span class="cartProducts__price">${createPrice(price)}€</span>
      </div>
    `;
    const PRODUCT_TOTAL = `
      <div class="cartProducts__product-total">
        <div class="cartProducts__quantity-box">
          <span class="cartProducts__quantity-button decrease" id="decrease-${i}">-</span>
          <input type="text" class="cartProducts__quantity" value="${quantity}" min="0" maxlength="3" pattern="[0-9]*" id="quantity-${i}" required />
          <span class="cartProducts__quantity-button increase" id="increase-${i}">+</span>
        </div>
        <span>${createPrice(price*quantity)}€</span>
      </div>
    `;

    //Create product container tag
    const PRODUCT_CONTAINER = document.createElement("div")
    PRODUCT_CONTAINER.classList.add("cartProducts__product");
    PRODUCT_CONTAINER.innerHTML = PRODUCT_IMG + PRODUCT_DETAILS + PRODUCT_TOTAL;
    CART_CONTAINER.insertBefore(PRODUCT_CONTAINER, CART_TOTAL_CONTAINER);

    //Quantity buttons
    const DECREASE_BUTTON = document.getElementById("decrease-" + i);
    const INCREASE_BUTTON = document.getElementById("increase-" + i);
    const QUANTITY = document.getElementById("quantity-" + i);

    DECREASE_BUTTON.addEventListener("click", () => {
      QUANTITY.value --;
      CART[i].quantity = QUANTITY.value;
      updateCart(CART);

      if (QUANTITY.value == 0) {
        removeProduct(id, CART);
      }
    });

    INCREASE_BUTTON.addEventListener("click", () => {
      QUANTITY.value ++;
      CART[i].quantity = QUANTITY.value;
      updateCart(CART);
    });

    //Clear cart button
    const CLEAR_BTN = document.getElementById("clear");
    CLEAR_BTN.addEventListener("click", () => {clearCart()});
  }
}
else {
  CART_CONTAINER.textContent = "Le panier est vide.";
}
