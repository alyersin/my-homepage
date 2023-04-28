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

//GEOLOCATION API
const successCallback = (position) => {
  console.log(position);
};
const errorCallback = (error) => {
  console.log(error);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//WEATHER API
const weather = async (id) => {
  try {
    const res = await axios.get(`http://ip-api.com/json/?fields=61439`);
    console.log(res.data);
  } catch (e) {
    console.log("ERR", e);
  }
};

weather();
