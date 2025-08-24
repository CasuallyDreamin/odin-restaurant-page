import "./css/about.css"

function aboutSection() {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");
    
    const img = document.createElement("img");
    img.src = "https://picsum.photos/400/200?random=101"; // placeholder
    img.alt = "Hanami cuisine";
    img.classList.add("about-image");

    aboutDiv.innerHTML = `
    <h2>Tradition served with every bloom. 🌸</h2>
    <p>
      At Hanami, we celebrate the beauty of tradition much like the fleeting blossoms 
      our name is inspired by. Our kitchen brings together the culinary heritage of 
      <strong>Japan, Korea, and China</strong>, each recipe prepared with care and authenticity.
    </p>
    <p>
      From the warmth of a shared meal to the joy of raising a glass, Hanami offers two experiences: 
      our <em>Restaurant</em>, where timeless dishes are served with respect for tradition, and 
      our <em>Bar</em>, where the art of East Asian drinks meets modern creativity.
    </p>
    <p>
      Whether you’re starting with delicate dumplings, savoring a hearty noodle bowl, 
      or enjoying a glass of sake or soju among friends, Hanami is more than dining — 
      it’s a moment to pause, connect, and savor life’s flavors together.
    </p>
  `;
  aboutDiv.appendChild(img);
    return aboutDiv
};

export { aboutSection };