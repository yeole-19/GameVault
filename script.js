const games = [
    {
        title: "Red Dead Redemption 2",
        price: 3079,
        category: "Open World",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmYkh80D5i2Rv7qgmZGQ-Q-I9Wj91nHR_gTIlgknSHMlLpmvQ"
    },
    {
        title: "The Elder Scrolls V: Skyrim",
        price: 1800,
        category: "RPG",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlOmOTidO6ZLe8s4dhVR9f1G8-fKT5RpQrBr5rprMr9PrzLba9"
    },
    {
        title: "Ghost of Tsushima",
        price: 4999,
        category: "Action",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7hlmSt7buXmy_kJLDW438XsKxC_M8atMiAq48d27Q8QTfMLcB"
    },
    {
        title: "The Witcher 3",
        price: 1800,
        category: "Adventure",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOPtH8lO6v8aRGGNpdEpaJgtR5GEO1UlnPv33E4-9hyPDQHa7"
    }
];

const grid = document.getElementById("gameGrid");
const buttons = document.querySelectorAll(".cat-btn");

let cartCount = 0;

// Render Games
function renderGames(category) {
    grid.innerHTML = "";

    const filtered = category === "All"
        ? games
        : games.filter(game => game.category === category);

    filtered.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="card-body">
                <h4>${game.title}</h4>
                <div class="price">₹${game.price.toLocaleString()}</div>
                <button onclick="addToCart()">Add to Cart</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Category Filter
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");
        renderGames(btn.dataset.category);
    });
});

// Cart Function
function addToCart() {
    cartCount++;
    alert("Item added to cart 🛒 Total Items: " + cartCount);
}

// Initial Load
renderGames("All");
