const CART = JSON.parse(localStorage.getItem("cart"));
const FORM = document.getElementById("form");

function order(cart) {
  const FIRST_NAME = document.getElementById("firstName").value;
  const LAST_NAME = document.getElementById("lastName").value;
  const ADDRESS = document.getElementById("address").value;
  const CITY = document.getElementById("city").value;
  const EMAIL = document.getElementById("email").value;
  const PRODUCTS = getProductsIds();

  const REQUEST =
  {
    "contact":
    {
      "firstName": FIRST_NAME,
      "lastName": LAST_NAME,
      "address": ADDRESS,
      "city": CITY,
      "email": EMAIL
    },

    "products": PRODUCTS
  };

  fetch("http://localhost:3000/api/teddies/order", {
    method: "post",
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(REQUEST)
  })
  .then (response => response.json())
  .then (order => {
    localStorage.setItem("order_confirmation", JSON.stringify(order));
    document.location.href = "confirmation.html";
  })
}
