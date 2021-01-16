const CART = JSON.parse(localStorage.getItem("cart"));
const CART_TOTAL_CONTAINER = document.getElementById("total");
const CART_TOTAL = localStorage.getItem("cart_total");
const PRODUCT_ADDED = document.getElementById("added");

if (CART_TOTAL) {
  CART_TOTAL_CONTAINER.textContent = CART_TOTAL + "€";
}
else {
  CART_TOTAL_CONTAINER.textContent = "0,00€";
}

function addProduct(product) {
  const CART = JSON.parse(localStorage.getItem("cart"));
  const PRODUCT_TO_ADD = product;

  //Check if CART is empty (null)
  if (!CART) {
    let newCart = [PRODUCT_TO_ADD];
    updateCart(newCart);
    console.log("Produit ajouté, le panier était vide.");
  }
  //Check if product's already in cart
  else {
    if (!CART.some(product => product._id == PRODUCT_TO_ADD._id)) {
      CART.push(PRODUCT_TO_ADD);
    }
    else {
      const PRODUCT_INDEX = CART.findIndex(product => product._id == PRODUCT_TO_ADD._id);
      CART[PRODUCT_INDEX].quantity ++;
    }

    updateCart(CART);
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
  PRODUCT_ADDED.classList.remove("hidden");
  setTimeout(function(){
    PRODUCT_ADDED.classList.add("hidden");
  }, 3000);
}
function clearCart() {
  localStorage.clear();
  CART_CONTAINER.textContent = "Le panier est vide.";
}
