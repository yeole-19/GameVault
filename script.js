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
    },

    // NEW GAMES 👇
    {
        title: "Cyberpunk 2077",
        price: 2999,
        category: "Open World",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
    },
    {
        title: "God of War",
        price: 3999,
        category: "Action",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
    },
    {
        title: "Assassin's Creed Valhalla",
        price: 3499,
        category: "Adventure",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9_0MhcClESsULWWYalG-efy7DpBfC1v8B0rpotXU6VviTRW7"
    },
    {
        title: "Horizon Zero Dawn",
        price: 2499,
        category: "RPG",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ19wa2dqdGF-GpmYiveR9xduXoPdkTT1HO9TKKGTUdmsmbMLqp"
    },
    {
        title: "GTA V",
        price: 1999,
        category: "Open World",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XmzUbOYDLOo9-_lP67weKZaQJ8ZiQhYYJB6GarYpmJbekDiY"
    },
    {
        title: "Call of Duty: Modern Warfare",
        price: 4599,
        category: "Action",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOPIEZPrexqPdV5_-bNapv29xKe81afp5M2-B7hIKJEzdJFLao"
    },
    {
        title: "Dark Souls III",
        price: 2200,
        category: "RPG",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB7g2dmJ2X0NYqFOTRKf2OoL7q6oV_uH5A5wNfDPJ71TsjFono"
    },
    {
        title: "Uncharted 4",
        price: 2799,
        category: "Adventure",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRib5Ba70vQKwNdOraos3rS8aat64d7yeYqKewBYXkNisebrjj-"
    },
    {
        title: "Elden Ring",
        price: 4999,
        category: "RPG",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhzMqBnyE8eJebI8qI9fJgV8L-24UeRfDEWGcxhB6QeJbpJ4p"
    },
    {
        title: "Spider-Man Remastered",
        price: 3499,
        category: "Action",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUaXbOtn9e_MpJEQpce_B4wVIudectv-eCSjxIG-BCGBXxku56"
    },
    {
        title: "Far Cry 6",
        price: 2999,
        category: "Action",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV95AA1bCsIf4J55wcuuJ6REHoT0YTWj2iTpw2QrL_ett8OXyd"
    },
    {
        title: "Minecraft",
        price: 1500,
        category: "Adventure",
        image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/15F8/production/_131442650_mediaitem131442649.jpg.webp"
    }
];

const grid = document.getElementById("gameGrid");
const buttons = document.querySelectorAll(".cat-btn");
const searchInput = document.getElementById("searchInput");

let currentCategory = "All";

// 🔁 Render function
// function renderGames() {
//     const searchText = searchInput.value.toLowerCase();

//     grid.innerHTML = "";

//     const filtered = games.filter(game => {
//         const matchCategory =
//             currentCategory === "All" || game.category === currentCategory;

//         const matchSearch =
//             game.title.toLowerCase().includes(searchText);

//         return matchCategory && matchSearch;
//     });

//     filtered.forEach(game => {
//         const card = document.createElement("div");
//         card.classList.add("card");

//         card.innerHTML = `
//             <img src="${game.image}">
//             <div class="card-body">
//                 <h4>${game.title}</h4>
//                 <div class="price">₹${game.price}</div>
//                 <button>Add to Cart</button>
//             </div>
//         `;

//         grid.appendChild(card);
//     });
// }

function renderGames() {
    if (!grid) return;

    const searchText = searchInput ? searchInput.value.toLowerCase() : "";

    let filtered = games.filter(game => {
        const matchCategory =
            currentCategory === "All" || game.category === currentCategory;

        const matchSearch =
            game.title.toLowerCase().includes(searchText);

        return matchCategory && matchSearch;
    });

    // ⭐ LIMIT to 4 games ONLY on homepage
    if (!searchInput) {
        filtered = filtered.slice(0, 4);
    }

    grid.innerHTML = "";

    filtered.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${game.image}">
            <div class="card-body">
                <h4>${game.title}</h4>
                <div class="price">₹${game.price}</div>
                <button>Add to Cart</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

// 🎯 Category buttons
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        currentCategory = btn.dataset.category;
        renderGames();
    });
});

// 🔍 Search event
if (searchInput) {
    searchInput.addEventListener("input", renderGames);
}

// Initial load
renderGames();