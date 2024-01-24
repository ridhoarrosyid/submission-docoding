// awal ambil element
// header element
const collectionDropdown = document.getElementById("collectionDropdown");
const collectionWarp = document.getElementsByClassName("collection-warp")[0];
const triangleLine = document.getElementsByClassName("triangle-line")[0];
const menu = document.getElementsByClassName("menu")[0];
const navItem = document.getElementsByClassName("navItem")[0];
const judulKopi = [...document.getElementsByClassName("judulKopi")];
const historyKopi = [...document.getElementsByClassName("history")];
const characterKopi = [...document.getElementsByClassName("character")];
const regionKopi = [...document.getElementsByClassName("notabelKopi")];
const learnNow = document.getElementById("learnNow");
const about = document.getElementById("about");
const next = document.getElementsByClassName("next")[0];

// akhir ambil elemen

// awal interaksi
// header interaksi
collectionWarp.addEventListener("click", () => {
  toggleRotate180(triangleLine);
  toggleHeight0(collectionDropdown);
  toggleOpacity0(collectionDropdown);
});

menu.addEventListener("click", () => {
  toggleOpacity0(navItem);
  toggleWidth0(navItem);
  if (!collectionDropdown.classList.contains("height-0")) {
    addHeight0(collectionDropdown);
    addOpacity0(collectionDropdown);
  }
});

learnNow.addEventListener("click", () => {
  removeScale0(about);
  removeOpacity0(about);
});

next.addEventListener("click", () => {
  addScale0(about);
  addOpacity0(about);
});
// akhir interaksi

// awal function
// header function
function toggleRotate180(element) {
  element.classList.toggle("rotate180");
}

function toggleHeight0(element) {
  element.classList.toggle("height-0");
}

function toggleWidth0(element) {
  element.classList.toggle("width-0");
}

function toggleOpacity0(element) {
  element.classList.toggle("opacity-0");
}

function addHeight0(element) {
  element.classList.add("height-0");
}

function removeScale0(element) {
  element.classList.remove("scale-0");
}

function removeOpacity0(elemen) {
  elemen.classList.remove("opacity-0");
}

function addOpacity0(element) {
  element.classList.add("opacity-0");
}

function addScale0(element) {
  element.classList.add("scale-0");
}
// akhir function

// awal fetch api
const baseURL = `https://coffee-type-api.web.app/coffee`;

function getCoffeeData() {
  return fetch(baseURL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("error fetching coffe data:", error));
}

async function menampilkanJudul() {
  const data = await getCoffeeData();
  judulKopi.forEach((e, i) => {
    e.innerText = data[i].type;
  });
}

async function menampilkanHistory() {
  const data = await getCoffeeData();
  historyKopi.forEach((e, i) => {
    e.innerText = data[i].history;
  });
}

async function menampilkanCharakter() {
  const data = await getCoffeeData();
  characterKopi.forEach((e, i) => {
    e.innerText = data[i].characteristics.flavor;
  });
}

async function menampilkanNotabel() {
  const data = await getCoffeeData();
  const newData = data.map((e) => {
    return e.notable_regions.map((e) => ` <li>${e}</li>`).join("");
  });
  regionKopi.forEach((e, i) => {
    e.innerHTML = newData[i];
  });
}

menampilkanJudul();
menampilkanHistory();
menampilkanCharakter();
menampilkanNotabel();
// akhir fetch api

// kondisi ketika screen > 425px
if (innerWidth > 425) {
  navItem.classList.remove("width-0", "opacity-0");
  about.classList.remove("scale-0", "opacity-0");
} else {
  navItem.classList.add("width-0", "opacity-0");
  about.classList.add("scale-0", "opacity-0");
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 425) {
    navItem.classList.remove("width-0", "opacity-0");
    about.classList.remove("scale-0", "opacity-0");
  } else if (this.innerWidth <= 425) {
    navItem.classList.add("width-0", "opacity-0");
    about.classList.add("scale-0", "opacity-0");
  }
});
