import "./css/main.css";

import { aboutSection } from "./about.js";
import { homeSection } from "./home.js";
import { menuSection } from "./menu.js";

const content = document.querySelector("#content");

function renderSection(sectionFunc) {
  content.innerHTML = "";
  content.appendChild(sectionFunc());
}

renderSection( homeSection);


const [homeBtn, menuBtn, aboutBtn] = document.querySelectorAll("header nav button");

homeBtn.addEventListener("click", () => renderSection(homeSection));
menuBtn.addEventListener("click", () => renderSection(menuSection));
aboutBtn.addEventListener("click", () => renderSection(aboutSection));