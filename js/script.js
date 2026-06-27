document.addEventListener("DOMContentLoaded", () => {

    // ================= SLIDER =================
    const images = [
        "images/lion.jpeg",
        "images/tiger.jpeg",
        "images/elephant.jpeg"
    ];

    let index = 0;
    const slide = document.getElementById("slide");

    if (slide) {
        setInterval(() => {
            index = (index + 1) % images.length;
            slide.src = images[index];
        }, 3000);
    }


    // ================= ELEMENTS =================
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const cards = document.querySelectorAll(".card");


    // ================= FILTER + SEARCH (COMBINED FIX) =================
    function updateCards() {
        const searchValue = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value;

        cards.forEach(card => {
            const name = card.querySelector("h3").innerText.toLowerCase();
            const region = card.getAttribute("data-region");

            const matchSearch = name.includes(searchValue);
            const matchFilter = filterValue === "all" || filterValue === region;

            card.style.display = (matchSearch && matchFilter) ? "flex" : "none";
        });
    }

    if (searchInput) searchInput.addEventListener("keyup", updateCards);
    if (filterSelect) filterSelect.addEventListener("change", updateCards);


    // ================= DARK MODE =================
    const darkToggle = document.getElementById("darkToggle");

    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }


    // ================= MODAL =================
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    const closeBtn = document.getElementById("closeBtn");

    document.querySelectorAll(".card button").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.parentElement;
            const title = card.querySelector("h3").innerText;
            const desc = card.querySelector("p").innerText;

            modalText.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
            modal.classList.add("active");
        });
    });

    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.remove("active");
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    };

});