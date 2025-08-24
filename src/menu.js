import "./css/menu.css";

function menuSection() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const menuData = {
  Bar: {
    Japanese: {
      Starters: [
        { name: "Edamame", price: "$5", desc: "Steamed soybeans lightly salted, perfect for snacking" },
        { name: "Takoyaki", price: "$7", desc: "Golden fried octopus balls topped with savory sauce" }
      ],
      "Main Drinks": [
        { name: "Sake", price: "$8", desc: "Traditional Japanese rice wine, served warm or cold" },
        { name: "Umeshu", price: "$7", desc: "Sweet plum wine with a rich fruity aroma" }
      ],
      "Side Dishes": [
        { name: "Seaweed Salad", price: "$6", desc: "Fresh seaweed tossed with sesame and vinegar dressing" }
      ],
      Desserts: [
        { name: "Mochi Ice Cream", price: "$5", desc: "Soft rice cake filled with creamy ice cream" }
      ]
    },
    Korean: {
      Starters: [
        { name: "Kimchi", price: "$4", desc: "Spicy fermented cabbage, a Korean classic" },
        { name: "Tteokbokki", price: "$6", desc: "Chewy rice cakes in a sweet and spicy chili sauce" }
      ],
      "Main Drinks": [
        { name: "Soju", price: "$7", desc: "Clear Korean spirit, smooth and versatile" },
        { name: "Makgeolli", price: "$6", desc: "Traditional milky rice wine, lightly sweet" }
      ],
      "Side Dishes": [
        { name: "Pajeon", price: "$5", desc: "Savory green onion pancake, crispy and tender" }
      ],
      Desserts: [
        { name: "Hotteok", price: "$4", desc: "Sweet filled Korean pancakes with brown sugar and nuts" }
      ]
    },
    Chinese: {
      Starters: [
        { name: "Spring Rolls", price: "$5", desc: "Crispy rolls filled with vegetables and meat" },
        { name: "Dumplings", price: "$6", desc: "Soft dumplings stuffed with pork and vegetables" }
      ],
      "Main Drinks": [
        { name: "Baijiu", price: "$8", desc: "Strong Chinese spirit with a complex aroma" },
        { name: "Chinese Tea", price: "$4", desc: "Traditional tea, light and aromatic" }
      ],
      "Side Dishes": [
        { name: "Spicy Peanuts", price: "$5", desc: "Crunchy peanuts coated in a savory spicy mix" }
      ],
      Desserts: [
        { name: "Red Bean Buns", price: "$5", desc: "Soft buns filled with sweet red bean paste" }
      ]
    }
  },
  Restaurant: {
    Japanese: {
      Starters: [
        { name: "Miso Soup", price: "$4", desc: "Classic soup with miso, tofu, and seaweed" },
        { name: "Gyoza", price: "$6", desc: "Pan-fried dumplings filled with pork and vegetables" }
      ],
      "Main Dishes": [
        { name: "Ramen", price: "$12", desc: "Noodle soup with rich broth, meat, and toppings" },
        { name: "Sushi Platter", price: "$18", desc: "Assorted fresh sushi, expertly prepared" }
      ],
      "Side Dishes": [
        { name: "Rice", price: "$3", desc: "Steamed white rice, perfect accompaniment to meals" }
      ],
      Desserts: [
        { name: "Matcha Cake", price: "$6", desc: "Soft cake infused with finely ground green tea" }
      ]
    },
    Korean: {
      Starters: [
        { name: "Kimchi Pancake", price: "$5", desc: "Savory pancake with tangy kimchi flavor" },
        { name: "Japchae", price: "$6", desc: "Sweet potato noodles stir-fried with vegetables" }
      ],
      "Main Dishes": [
        { name: "Bibimbap", price: "$12", desc: "Mixed rice bowl with vegetables, meat, and spicy sauce" },
        { name: "Bulgogi", price: "$15", desc: "Marinated grilled beef with a sweet-savory glaze" }
      ],
      "Side Dishes": [
        { name: "Banchan", price: "$4", desc: "Variety of small Korean side dishes to share" }
      ],
      Desserts: [
        { name: "Patbingsu", price: "$7", desc: "Shaved ice dessert with sweet red beans and toppings" }
      ]
    },
    Chinese: {
      Starters: [
        { name: "Hot & Sour Soup", price: "$5", desc: "Spicy and tangy soup with tofu and mushrooms" },
        { name: "Dumplings", price: "$6", desc: "Steamed or fried dumplings filled with pork or vegetables" }
      ],
      "Main Dishes": [
        { name: "Kung Pao Chicken", price: "$12", desc: "Stir-fried chicken with peanuts and chili peppers" },
        { name: "Mapo Tofu", price: "$10", desc: "Spicy tofu dish with minced meat and chili bean paste" }
      ],
      "Side Dishes": [
        { name: "Steamed Vegetables", price: "$5", desc: "Lightly steamed seasonal vegetables" }
      ],
      Desserts: [
        { name: "Fortune Cookies", price: "$3", desc: "Crispy cookies with fun messages inside" }
      ]
    }
  }
};


  let currentMain = "Bar";
  let currentCuisine = "All";

  // Top selector (Bar / Restaurant)
  const mainSelector = document.createElement("div");
  mainSelector.classList.add("selector-bar");
  Object.keys(menuData).forEach(mainCat => {
    const btn = document.createElement("button");
    btn.textContent = mainCat;
    btn.classList.toggle("active", mainCat === currentMain);
    btn.addEventListener("click", () => {
      currentMain = mainCat;
      currentCuisine = "All";
      updateSelectors();
      renderMenu();
    });
    mainSelector.appendChild(btn);
  });
  menuDiv.appendChild(mainSelector);

  // Cuisine selector
  const cuisineSelector = document.createElement("div");
  cuisineSelector.classList.add("selector-bar");
  menuDiv.appendChild(cuisineSelector);

  // Menu content
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  menuDiv.appendChild(menuContent);

  // Update selectors
  function updateSelectors() {
    Array.from(mainSelector.children).forEach(btn => {
      btn.classList.toggle("active", btn.textContent === currentMain);
    });

    cuisineSelector.innerHTML = "";

    // All button
    const allBtn = document.createElement("button");
    allBtn.textContent = "All";
    allBtn.classList.toggle("active", currentCuisine === "All");
    allBtn.addEventListener("click", () => {
      currentCuisine = "All";
      updateSelectors();
      renderMenu();
    });
    cuisineSelector.appendChild(allBtn);

    // Individual cuisines
    Object.keys(menuData[currentMain]).forEach(cuisine => {
      const btn = document.createElement("button");
      btn.textContent = cuisine;
      btn.classList.toggle("active", cuisine === currentCuisine);
      btn.addEventListener("click", () => {
        currentCuisine = cuisine;
        updateSelectors();
        renderMenu();
      });
      cuisineSelector.appendChild(btn);
    });
  }

  // Render menu
  function renderMenu() {
    // Fade-out
    menuContent.classList.add("fade-out");

    setTimeout(() => {
      menuContent.innerHTML = "";

      const cuisinesToShow = currentCuisine === "All"
        ? Object.keys(menuData[currentMain])
        : [currentCuisine];

      cuisinesToShow.forEach(cuisine => {
        if (currentCuisine === "All") {
          const cuisineHeader = document.createElement("h2");
          cuisineHeader.textContent = cuisine;
          cuisineHeader.classList.add("cuisine-header");
          menuContent.appendChild(cuisineHeader);
        }

        const courses = menuData[currentMain][cuisine];

        Object.keys(courses).forEach(course => {
          const courseSection = document.createElement("div");
          courseSection.classList.add("course-section");
          courseSection.innerHTML = `<h3>${course}</h3>`;

          const grid = document.createElement("div");
          grid.classList.add("dish-grid");

          courses[course].forEach(dish => {
            const card = document.createElement("div");
            card.classList.add("dish-card");

            // Reliable Picsum placeholder
            const imgUrl = `https://picsum.photos/150/120?random=${Math.floor(Math.random()*1000)}`;

            card.innerHTML = `
              <img src="${imgUrl}" alt="${dish.name}" />
              <h4>${dish.name}</h4>
              ${dish.desc ? `<p class="dish-desc">${dish.desc}</p>` : ""}
              <span class="dish-price">${dish.price}</span>
            `;

            grid.appendChild(card);
          });

          courseSection.appendChild(grid);
          menuContent.appendChild(courseSection);
        });
      });

      // Fade-in
      menuContent.classList.remove("fade-out");
      menuContent.classList.add("fade-in");

      setTimeout(() => {
        menuContent.classList.remove("fade-in");
      }, 300);

    }, 200);
  }

  // Initialize
  updateSelectors();
  renderMenu();

  return menuDiv;
}

export { menuSection };
