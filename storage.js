//Show cart total on every page
const CART_TOTAL_CONTAINER = document.getElementById("total");
const CART_TOTAL = localStorage.getItem("cart_total");

if (CART_TOTAL) {
  CART_TOTAL_CONTAINER.textContent = CART_TOTAL + "€";
}
else {
  CART_TOTAL_CONTAINER.textContent = "0,00€";
}

function addProduct(product) {
  const CART = JSON.parse(localStorage.getItem("cart"));

  //Check if CART is empty (null)
  if (!CART) {
    let newCart = [product];
    updateCart(newCart);
  }
  //Check if product's already in cart
  else {
    if (!CART.some(cartProduct => cartProduct._id == product._id)) {
      CART.push(product);
      updateCart(CART);
    }
    else {
      increaseQuantity(product._id, CART);
    }
  }

  //Show confirmation message when product's added
  showMessage();
}
function updateCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  
  let sum = 0;
  for (const product of cart) {
    sum += (product.price * product.quantity);
  }

  let price = createPrice(sum);
  localStorage.setItem("cart_total", price);
  CART_TOTAL_CONTAINER.textContent = price + "€";
}
function createPrice(num) {
  return (num/100).toFixed(2).replace(".", ",");
}
function showMessage() {
  const MESSAGE = document.getElementById("added");

  MESSAGE.classList.remove("hidden");
  setTimeout(function(){
    MESSAGE.classList.add("hidden");
  }, 3000);
}
function clearCart() {
  localStorage.clear();
  CART_CONTAINER.textContent = "Le panier est vide.";
  FORM.classList.add("hidden");
}
function removeProduct(id, cart) {
  let newCart = cart.filter(product => product._id !== id);

  if (newCart.length == 0) {
    clearCart();
  }
  else {
    updateCart(newCart);
    document.location.reload();
  }
}
function increaseQuantity(id, cart) {
  const PRODUCT_INDEX = cart.findIndex(product => product._id == id);
  cart[PRODUCT_INDEX].quantity ++;
  updateCart(cart);
}
function decreaseQuantity(id, cart) {
  const PRODUCT_INDEX = cart.findIndex(product => product._id == id);
  cart[PRODUCT_INDEX].quantity --;
  updateCart(cart);
}
function getProductsIds() {
  const PRODUCTS = [];
  const CART = JSON.parse(localStorage.getItem("cart"));

  for (const product of CART) {
    while (product.quantity > 0) {
      PRODUCTS.push(product._id);
      product.quantity --;
    }
  }

  return PRODUCTS;
}
