const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  json.forEach((person) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".billede").src = "faces/" + person.billede;
    klon.querySelector(".navn").textContent = person.fornavn;
    klon.querySelector(".efternavn").textContent = person.efternavn;
    klon.querySelector(".email").textContent = person.email;
    main.appendChild(klon);
  });
}

hentData();
