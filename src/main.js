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
