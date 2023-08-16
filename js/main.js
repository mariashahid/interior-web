const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    var navActive = document.querySelector(".nav .active");
    navActive.classList.remove("active");
  })
);
