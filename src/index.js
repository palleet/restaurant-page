import homePage from "./modules/home.js";
import menuPage from "./modules/menu.js";
import aboutPage from "./modules/about.js";

import Icon from "./assets/wordmark.png";

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const menuBtn = document.getElementById("menuBtn");

function switchTab(page) {
	const content = document.getElementById("content");
	content.replaceChildren();
	content.appendChild(page);
}

homeBtn.addEventListener("click", function () {
	switchTab(homePage());
});

menuBtn.addEventListener("click", function () {
	switchTab(menuPage());
});

aboutBtn.addEventListener("click", function () {
	switchTab(aboutPage());
});

// Add wordmark image
const imgElement = document.getElementById("wordmark");
imgElement.src = Icon;
imgElement.style.height = "100px";

// initial load page with Home Page
(() => {
	switchTab(homePage());
})();
