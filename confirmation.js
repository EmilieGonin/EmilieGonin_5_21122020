const ORDER_CONFIRMATION = JSON.parse(localStorage.getItem("order_confirmation"));

const {firstName, lastName, address, city, email} = ORDER_CONFIRMATION.contact;

const ORDER_FIRSTNAME = document.getElementById("order-firstName");
const ORDER_PRICE = document.getElementById("order-price");
const ORDER_ID = document.getElementById("order-id");
ORDER_FIRSTNAME.textContent = firstName;
ORDER_ID.textContent = ORDER_CONFIRMATION.orderId;
ORDER_PRICE.textContent = localStorage.getItem("cart_total") + "€";

const CUSTOMER_DATA = document.getElementById("customer");
CUSTOMER_DATA.innerHTML = `
  <li><span class="strong">Nom et prénom :</span> ${lastName} ${firstName}</li>
  <li><span class="strong">Rue et n° de rue :</span> ${address}</li>
  <li><span class="strong">Ville :</span> ${city}</li>
  <li><span class="strong">E-mail :</span> ${email}</li>
`;

localStorage.clear();
