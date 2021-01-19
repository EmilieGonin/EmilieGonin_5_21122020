const ORDER_CONFIRMATION = JSON.parse(localStorage.getItem("order_confirmation"));

const {firstName, lastName, address, city, email} = ORDER_CONFIRMATION.contact;

const ORDER_FIRSTNAME = document.getElementById("order-firstName");
const ORDER_PRICE = document.getElementById("order-price");
const ORDER_ID = document.getElementById("order-id");
ORDER_FIRSTNAME.textContent = firstName;
ORDER_ID.textContent = ORDER_CONFIRMATION.orderId;
ORDER_PRICE.textContent = "€";

const CUSTOMER_DATA = document.getElementById("customer");
CUSTOMER_DATA.innerHTML = `
  <ul>
    <li>Nom et prénom : ${lastName} ${firstName}</li>
    <li>Rue et n° de rue : ${address}</li>
    <li>Ville : ${city}</li>
    <li>E-mail : ${email}</li>
  </ul>
`;

localStorage.clear();
