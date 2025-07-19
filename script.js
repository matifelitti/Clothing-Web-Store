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

  const cartItem = document.getElementById("cartItem");
  const cartButtons = document.querySelectorAll(".cart-button");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productImageSrc =
        button.parentElement.parentElement.querySelector("img").src;
      const productName =
        button.parentElement.querySelector(".card-title").textContent;

      const newItem = document.createElement("li");

      const productLink = document.createElement("a");
      productLink.classList.add("dropdown-item");
      productLink.href = "#";

      const productImage = document.createElement("img");
      productImage.src = productImageSrc;
      productImage.alt = productName;
      productImage.classList.add("mr-2", "cart-product-image");
      productLink.appendChild(productImage);

      const productNameText = document.createElement("span");
      productNameText.textContent = productName;
      productNameText.classList.add("cart-product-name");
      productLink.appendChild(productNameText);

      newItem.appendChild(productLink);

      const emptyMessage = document.getElementById("emptyCartMessage");
      if (emptyMessage) {
        emptyMessage.remove();
      }

      cartItem.appendChild(newItem);

      const cartCount = document.getElementById("cart-count");
      let currentCount = parseInt(cartCount.textContent);
      cartCount.textContent = currentCount + 1;
    });
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".scroll-fade").forEach((el) => {
    observer.observe(el);
  });

  const year = new Date().getFullYear();
  document.getElementById(
    "year"
  ).innerHTML = `&copy; ${year} Clothes.Inc. All rights reserved.`;
});
