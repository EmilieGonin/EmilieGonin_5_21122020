//Get ID parameter
let url = new URL(document.URL);
let id = url.searchParams.get("id");

//Get DOM tags variables
const nameElement = document.getElementById("name");
const imgElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const priceElement = document.getElementById("price");
const colorsContainer = document.getElementById("colors");
const add = document.getElementById("add");

//Get product JSON datas
fetch("http://localhost:3000/api/teddies/" + id)
.then (response => response.json())
.then (product => {
  const {_id: id, name, price, imageUrl, description, colors} = product;

  nameElement.textContent = name;
  imgElement.setAttribute("src", imageUrl);
  imgElement.setAttribute("alt", name);
  descriptionElement.textContent = description;
  priceElement.textContent = price/100 + "€";

  for (const color of colors) {
    const element = document.createElement("option");
    element.textContent = color;
    element.setAttribute("value", color);
    colorsContainer.appendChild(element);
  }
})

//Add product to cart
function addProduct(id) {
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, 1);
    let test = localStorage.getItem(id);
    console.log(test);
  }
  else {
    let num = parseInt(localStorage.getItem(id)) + 1;
    localStorage.setItem(id, num);
    let test = localStorage.getItem(id);
    console.log(test);
  }
}
add.addEventListener("click", () => {addProduct(id)});
