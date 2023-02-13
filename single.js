const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const navn = params.get("navn");
let person;

document.querySelector("h1").textContent = "Hej " + navn;

document.addEventListener("DOMContentLoaded", hentData);

const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri/";
const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function hentData() {
  const resspons = await fetch(url + id, options);
  person = await resspons.json();
  visDetaljer();
}

function visDetaljer() {
  popup.style.display = "block";
  popup.querySelector("img").src = "faces/" + person.billede;
  popup.querySelector("h2").textContent = person.fornavn + " " + person.efternavn;
  popup.querySelector(".titel").textContent = person.titel;
  popup.querySelector(".email").textContent = person.email;
  const fdag = person.fødselsdag.slice(8, 10);
  const fmd = person.fødselsdag.slice(5, 7);
  const faar = person.fødselsdag.slice(0, 4);
  console.log(fdag, fmd, faar);
  popup.querySelector(".fdag").textContent = fdag + ". " + fmd + ". " + faar;
  popup.querySelector(".hobby").textContent = person.hobby;
  popup.querySelector(".tro").textContent = person.troende;
}
