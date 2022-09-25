const lines = document.querySelector(".lines");
const navMenu = document.querySelector(".navmenu");

lines.addEventListener("click", () => {
    lines.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    lines.classList.remove("active");
    navMenu.classList.remove("active");
}))


window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 0);
});
