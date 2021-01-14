//Get ID parameter
let url = new URL(document.URL);
let id = url.searchParams.get("id");

//Get DOM tags variables
const PRODUCT_NAME = document.getElementById("name");
const PRODUCT_IMG = document.getElementById("image");
const PRODUCT_DESC = document.getElementById("description");
const PRODUCT_PRICE = document.getElementById("price");
const COLORS_CONTAINER = document.getElementById("colors");

//Get product JSON datas
fetch("http://localhost:3000/api/teddies/" + id)
.then (response => response.json())
.then (product => {
  const {_id: id, name, price, imageUrl, description, colors} = product;

  PRODUCT_NAME.textContent = name;
  PRODUCT_IMG.setAttribute("src", imageUrl);
  PRODUCT_IMG.setAttribute("alt", name);
  PRODUCT_DESC.textContent = description;
  PRODUCT_PRICE.textContent = price/100 + "€";

  for (const color of colors) {
    const COLOR_OPTION = document.createElement("option");
    COLOR_OPTION.textContent = color;
    COLOR_OPTION.setAttribute("value", color);
    COLORS_CONTAINER.appendChild(COLOR_OPTION);
  }

  const ADD_BTN = document.getElementById("add");
  ADD_BTN.addEventListener("click", () => {addProduct(product)});
})
