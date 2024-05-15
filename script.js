document.addEventListener("DOMContentLoaded", function () {
  const magazineLink = document.getElementById("magazine-link");
  const magazineContainer = document.getElementById("magazine-container");

  magazineLink.addEventListener("click", (event) => {
    event.preventDefault();
    magazineContainer.scrollIntoView({ behavior: "smooth" });
  });
});
