const navbarAvatar = document.querySelector(".navbar-avatar");
const dropdownMenu = document.querySelector(".dropdown-menu");

navbarAvatar.addEventListener("click", function (event) {
  event.stopPropagation();
  navbarAvatar.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (
    !navbarAvatar.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    navbarAvatar.classList.remove("active");
  }
});
