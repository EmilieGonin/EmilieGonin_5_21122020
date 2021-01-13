function addProduct(product) {
  if (!localStorage.getItem("cart")) {
    //Create cart
    const CART = [];
    CART.push(addProductData(product));
    localStorage.setItem("cart", JSON.stringify(CART));
    calculateCart(CART);
  }
  else {
    //Get cart datas
    const CART = JSON.parse(localStorage.getItem("cart"));
    const PRODUCT_TO_ADD = product._id;

    //Check if product's already in cart
    if (!CART.some(product => product.id == PRODUCT_TO_ADD)) {
      CART.push(addProductData(product));
    }
    else {
      const PRODUCT_INDEX = CART.findIndex(product => product.id == PRODUCT_TO_ADD);
      CART[PRODUCT_INDEX].quantity ++;
    }
    localStorage.setItem("cart", JSON.stringify(CART));
    calculateCart(CART);
  }
}
function addProductData(product) {
  const {_id: id, name, price, imageUrl} = product;
  return newProduct = {
    id: id,
    name: name,
    price: price,
    imageUrl: imageUrl,
    quantity: 1
  };
}
function calculateCart(cart) {
  let sum = 0;

  for (const product of cart) {
    sum += (product.price * product.quantity);
  }

  localStorage.setItem("cart_total", sum/100);
}
function clearCart() {
  localStorage.clear();
}

const CART_TOTAL_CONTAINER = document.getElementById("total");
const CART_TOTAL = localStorage.getItem("cart_total");

if (CART_TOTAL) {
  CART_TOTAL_CONTAINER.textContent = CART_TOTAL + "€";
}
