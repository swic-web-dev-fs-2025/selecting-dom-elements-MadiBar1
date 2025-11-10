import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>
`;

const HeaderElement = document.querySelector("main-element");
console.info(HeaderElement);

const navLinks = document.querySelectorAll(".navbar a");
console.info(navLinks);

const navInternalLinks = document.querySelectorAll('.navbar a[href^="/"]');
navInternalLinks.forEach((link) => {
  link.textContent += " (internal)";
});

document.querySelectorAll("input").forEach((element) => {
  element.style.outline = "2px solid gold";
});

document.querySelectorAll("card").forEach((card) => {
  card.setAttribute("data-viewed", "true");
});

const product = document.querySelector("[data-product-id=2]");
const priceElement = product.querySelector(".price");
priceElement.textContent = "$24.99";

const missingElement = document.querySelector(".non-existent");
if (missingElement) {
  missingElement.addEventListener("click", handleClick);
} else {
  console.warn("Element not found, cannot add event listener.");
}

function handleClick() {
  console.info("Element clicked!");
}
