import { authHandler } from "../../utils/authorization.js";
import { setCookie } from "../../utils/cookie.js";
import { postData } from "../../utils/httpReq.js";
import { validateForm } from "../../utils/validation.js";

const inputs = document.querySelectorAll("input");
const loginButton = document.getElementById("login-btn");

const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputs[0].value;
  const password = inputs[1].value;
  const validation = validateForm(username, password);
  if (!validation) {
    return;
  }
  const response = await postData("auth/login", { username, password });
  setCookie(response.token);
  location.assign("index.html");
};

document.addEventListener("DOMContentLoaded", authHandler);
loginButton.addEventListener("click", submitHandler);
