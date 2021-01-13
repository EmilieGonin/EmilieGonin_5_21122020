function addProduct(product) {
  if (!localStorage.getItem("cart")) {
    //Create cart
    const CART = [];
    CART.push(addNewProduct(product));
    localStorage.setItem("cart", JSON.stringify(CART));
  }
  else {
    //Get cart datas
    const CART = JSON.parse(localStorage.getItem("cart"));
    const PRODUCT_TO_ADD = product._id;

    //Check if product's already in cart
    if (!CART.some(product => product.id == PRODUCT_TO_ADD)) {
      CART.push(addNewProduct(product));
    }
    else {
      const PRODUCT_INDEX = CART.findIndex(product => product.id == PRODUCT_TO_ADD);
      CART[PRODUCT_INDEX].quantity ++;
    }

    localStorage.setItem("cart", JSON.stringify(CART));
  }
}

function addNewProduct(product) {
  const {_id: id, name, price, imageUrl} = product;
  return newProduct = {
    id: id,
    name: name,
    price: price,
    imageUrl: imageUrl,
    quantity: 1
  };
}

function clearCart() {
  localStorage.clear();
}
