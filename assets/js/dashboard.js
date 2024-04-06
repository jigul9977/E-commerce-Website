import { authHandler } from "../../utils/authorization.js";
import { deleteCookie, getCookie } from "../../utils/cookie.js";
import { getData } from "../../utils/httpReq.js";

const userSection = document.getElementById("user-section");
const logoutButton = document.getElementById("logout-btn");
const showUsers = (users) => {
  userSection.innerHTML = "";
  users.forEach((user) => {
    const {
      id,
      email,
      name: { firstname, lastname },
      username,
      phone,
      address: { city, street, zipcode },
    } = user;
    const userCardJSX = `
    <div class="user-card">
      <h3>${id}</h3>
      <div>
        <p><i class="fa-solid fa-user"></i> Name:</p>
        <span>${firstname} ${lastname}</span>
      </div>
      <div>
        <p><i class="fa-regular fa-id-badge"></i> Username:</p>
        <span>${username}</span>
      </div>
      <div>
        <p><i class="fa-solid fa-envelope"></i> Email:</p>
        <span>${email}</span>
      </div>
      <div>
        <p><i class="fa-solid fa-location-dot"></i> Address:</p>
        <span>${city} - ${street} - ${zipcode}</span>
      </div>
    </div>`;
    userSection.innerHTML += userCardJSX;
  });
};

const init = async () => {
  authHandler();
  const users = await getData("users");
  showUsers(users);
};

const logoutHandler = () => {
  deleteCookie();
}

document.addEventListener("DOMContentLoaded", init);
logoutButton.addEventListener("click",logoutHandler)