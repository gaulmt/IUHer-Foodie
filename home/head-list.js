const nav = document.getElementById("nav");
const backdrop = document.getElementById("backdrop");
const menuBtn = document.querySelector('.header-list');
const closeBtn = document.querySelector('.close-btn');
function openMenu() {
  nav.classList.remove("hidden");
  nav.style.transform = "translateX(0)";
  backdrop.classList.remove("hidden");
}
function closeMenu() {
  nav.style.transform = "translateX(100%)";
  setTimeout(() => nav.classList.add("hidden"), 300);
  backdrop.classList.add("hidden");
}
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);