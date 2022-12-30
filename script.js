const lines = document.querySelector(".lines");
const navMenu = document.querySelector(".navmenu");
const html = document.querySelector("html");

lines.addEventListener("click", () => {
    html.classList.toggle('menu-open');
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    html.classList.remove('menu-open');
}))

window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 0);
});