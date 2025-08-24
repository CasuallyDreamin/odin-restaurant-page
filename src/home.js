import "./css/home.css";
import food_image from "./images/food_table.jpg";
function homeSection() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  homeDiv.innerHTML = `
    <div class="hero">
      <div class="hero-content">
        <div class="hero-image">
          <img src="${food_image}" alt="Iconic Dish">
        </div>
        <div class="description">
          <h1>Welcome to Hanami</h1>
          <p>
            Tradition served with every bloom. 🌸
            Experience the culinary heritage of Japan, Korea, and China in a warm, inviting atmosphere.
          </p>
          <button id="reserve-btn">Reserve Online</button>
        </div>
      </div>
    </div>
  `;

  return homeDiv;
}

export { homeSection };
