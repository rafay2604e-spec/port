
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("show");
  });
});
