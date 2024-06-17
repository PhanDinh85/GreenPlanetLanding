document.getElementById("open-menu").addEventListener("click", function () {
  var menu = document.getElementById("hamburger-menu");
  menu.classList.remove("hidden");
});

document.getElementById("close-menu").addEventListener("click", function () {
  var menu = document.getElementById("hamburger-menu");
  menu.classList.add("hidden");
});
