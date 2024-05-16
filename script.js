document.addEventListener("DOMContentLoaded", function () {
  const brandsLinks = document.getElementById("brands-links");
  const brandsContainer = document.getElementById("brands-container");

  brandsLinks.addEventListener("click", (event) => {
    event.preventDefault();
    brandsContainer.scrollIntoView({ behavior: "smooth" });
  });

  const magazineLink = document.getElementById("magazine-link");
  const magazineContainer = document.getElementById("magazine-container");

  magazineLink.addEventListener("click", (event) => {
    event.preventDefault();
    magazineContainer.scrollIntoView({ behavior: "smooth" });
  });
});
