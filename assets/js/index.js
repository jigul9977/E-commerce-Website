import { getCookie } from "../../utils/cookie.js";
import { getData } from "../../utils/httpReq.js";
import { shortenText } from "../../utils/stringFunctions.js";

let allProducts = null;

const loginButton = document.getElementById("login-btn");
const dashboardButton = document.getElementById("dashboard-btn");
const productsSection = document.getElementById("products-section");
const searchButton = document.getElementById("search-btn");
const searchBox = document.getElementById("searchbox");
const listItems = document.querySelectorAll("#list-items li");

const showProducts = (products) => {
  productsSection.innerHTML = "";
  products.forEach((product) => {
    const { image, title, price, rating } = product;
    const productCardJSX = `
    <div class="card">
      <img alt="${title}" src=${image}>
      <h4>${shortenText(title)}</h4>
      <div class="price">
        <p>$ ${price}</p>
        <button>Buy <i class="fa-solid fa-cart-shopping"></i></button>
      </div>
      <div class="rate">
        <i class="fa-solid fa-star"></i>
        <span>${rating.rate}</span>
      </div>
      <div class="count">
        <i class="fa-solid fa-user"></i>
        <span>${rating.count}</span>
      </div>
    </div>`;
    productsSection.innerHTML += productCardJSX;
  });
};

const init = async () => {
  const cookie = getCookie();
  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }
  allProducts = await getData("products");

  showProducts(allProducts);
};

const searchHandler = () => {
  const query = searchBox.value.trim().toLowerCase();

  if (!query) return showProducts(allProducts);
  const searchedProducts = allProducts.filter((product) => {
    return product.title.toLowerCase().includes(query);
  });
  showProducts(searchedProducts);
};

const filterHandler = (event) => {
  const category = event.target.innerText.toLowerCase();
  listItems.forEach((li) => {
    if (li.innerText.toLowerCase() === category) {
      li.className = "active";
    } else {
      li.className = "";
    }
  });
  if (category === "all") return showProducts(allProducts);
  const filteredProducts = allProducts.filter((product) => {
    return product.category.toLowerCase() === category;
  });
  showProducts(filteredProducts);
};

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listItems.forEach((li) => li.addEventListener("click", filterHandler));
