const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".menu-item.active")?.classList.remove("active");
        item.classList.add("active");
    });
});