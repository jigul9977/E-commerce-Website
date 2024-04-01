import { authHandler } from "../../utils/authorization.js";
import { setCookie } from "../../utils/cookie.js";
import { postData } from "../../utils/httpReq.js";

const inputs = document.querySelectorAll("input");
const loginButton = document.getElementById("login-btn");

const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputs[0].value;
  const password = inputs[1].value;
  const response = await postData("auth/login", { username, password });
  setCookie(response.token);
  location.assign("index.html");
};


document.addEventListener("DOMContentLoaded", init);
loginButton.addEventListener("click", authHandler);
