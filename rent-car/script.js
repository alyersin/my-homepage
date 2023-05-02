//INTEGRATED GEOLOCATION API
const successCallback = (position) => {
  console.log(position);
};
const errorCallback = (error) => {
  console.log(error);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//NAV EXTENSION
const burgerBtn = document.querySelector(".burger");
const navPanel = document.querySelector(".nav-map");
const overLay = document.querySelector("overlay");

const hidden = () => {
  if (navPanel.classList.contains("hide")) {
    navPanel.classList.remove("hide");
  } else {
    navPanel.classList.add("hide");
  }
};
burgerBtn.addEventListener("click", hidden);

document.addEventListener("keydown", (e) => {
  let keyName = e.key;
  document.querySelector(".nav-map").classList.add("hide");
});

//COLLAPSIBLE SETTINGS

let pickInput = document.querySelector(".pick");
let todayPick = new Date().toISOString().split("T")[0];
pickInput.setAttribute("min", todayPick);

let returnInput = document.querySelector(".return");
let todayReturn = new Date().toISOString().split("T")[0];
returnInput.setAttribute("min", todayReturn);

//PICK-UP RETURN DATE input

const showCarsBtn = document.querySelector(".show-cars-btn");

const newFunc = (e) => {
  let selectedDate = e.target.value;
  let currentDate = new Date().toISOString().split("T")[0];

  if (selectedDate >= currentDate) {
    console.log("we can show cars");
    showCarsBtn.style.opacity = "calc(100%";
    showCarsBtn.style.cursor = "pointer";
  }
};

document.querySelector(".pick").addEventListener("input", newFunc);
document.querySelector(".return").addEventListener("input", newFunc);
