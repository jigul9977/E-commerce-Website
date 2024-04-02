import { getCookie } from "../../utils/cookie.js";

const loginButton = document.getElementById("login-btn");
const dashboardButton = document.getElementById("dashboard-btn");

const init = () => {
	const cookie = getCookie();
	if (cookie) {
		loginButton.style.display = "none";
	} else {
		dashboardButton.style.display="none"
	}
};

document.addEventListener("DOMContentLoaded", init);
