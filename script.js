// SLIDER
const images = [
    "images/lion.jpeg",
    "images/tiger.jpeg",
    "images/elephant.jpeg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
}, 3000);


// SEARCH
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = name.includes(value) ? "flex" : "none";
    });
});


// FILTER
const filterSelect = document.getElementById("filterSelect");

filterSelect.addEventListener("change", () => {
    const value = filterSelect.value;

    cards.forEach(card => {
        const region = card.getAttribute("data-region");

        card.style.display =
            value === "all" || value === region ? "flex" : "none";
    });
});


// DARK MODE
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// MODAL
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.parentElement;
        const title = card.querySelector("h3").innerText;
        const desc = card.querySelector("p").innerText;

        modalText.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
        modal.style.display = "flex";
    });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};