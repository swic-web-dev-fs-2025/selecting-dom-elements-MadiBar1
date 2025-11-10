import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>
`;

const HeaderElement = document.querySelector("main-element");
console.info(HeaderElement);

const navLinks = document.querySelectorAll(`.navbar a`);
console.info(navLinks);
