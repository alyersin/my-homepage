const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//INTEGRATED GEOLOCATION API
// const successCallback = (position) => {
//   console.log("my position:", position);
// };
// const errorCallback = (error) => {
//   console.log(error);
// };
// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// GEOLOCATION API
// const successCallback = (position) => {
//   console.log(position);
// };

// const errorCallback = (error) => {
//   console.log(error);
// };

// let geolocationID;

// if ("geolocation" in navigator) {
//   // Access the API
//   geolocationID = navigator.geolocation.watchPosition(
//     successCallback,
//     errorCallback
//   );
// } else {
//   // Use a third-party geolocation service
//   console.log("Browser does not support the Geolocation API");
// }

//FREE GEOLOCATION API

const gpslocation = async (id) => {
  try {
    const res = await axios.get(`http://ip-api.com/json/?fields=61439`);
    console.log(res.data);
  } catch (e) {
    console.log("ERR", e);
  }
};
gpslocation();

//WEATHER API
// const weather = async (id) => {
//   try {
//     const res = await axios.get(
//       `https://api.open-meteo.com/v1/forecast?latitude=44.18&longitude=28.63&hourly=temperature_2m`
//     );
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERR", e);
//   }
// };

// weather();
