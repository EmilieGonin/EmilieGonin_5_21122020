//Get ID parameter
let url = new URL(document.URL);
let id = url.searchParams.get("id");

//Get DOM tags variables
const nameElement = document.getElementById("name");
const imgElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const priceElement = document.getElementById("price");
const colorsContainer = document.getElementById("colors");

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
