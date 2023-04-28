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

// C A R S - ARRAY

const cars = [
  {
    model: "Dacia Logan",
    type: "Sedan",
    capacity: 5,
    gearbox: "Manual",
    trunc: 2,
    year: 2015,
    fuel: "Gasoline",
  },
  {
    model: "Opel Astra",
    type: "Sedan",
    capacity: 5,
    gearbox: "Manual",
    trunc: 3,
    year: 2019,
    fuel: "Diesel",
  },
  {
    model: "Ford Mondeo",
    type: "Sedan",
    capacity: 5,
    gearbox: "manual",
    trunc: 3,
    year: 2016,
    fuel: "Diesel",
  },
  {
    model: "Opel Insignia",
    type: "Sedan",
    capacity: 5,
    gearbox: "automatic",
    trunc: 3,
    year: 2020,
    fuel: "Gasoline",
  },
  {
    model: "Mercedes Benz C-Class",
    type: "Sedan",
    capacity: 5,
    gearbox: "automatic",
    trunc: 3,
    year: 2019,
    fuel: "Diesel",
  },
  {
    model: "Ford Kuga",
    type: "suv",
    capacity: 5,
    gearbox: "manual",
    trunc: 7,
    year: 2017,
    fuel: "Diesel",
  },
  {
    model: "Opel Zafira",
    type: "van",
    capacity: 7,
    gearbox: "manual",
    trunc: 5,
    year: 2018,
    fuel: "Diesel",
  },
  {
    model: "Renault Traffic",
    type: "van",
    capacity: 8,
    gearbox: "manual",
    trunc: 5,
    year: 2016,
    fuel: "Diesel",
  },
  {
    model: "Ford Focus Combi",
    type: "station wagon",
    capacity: 5,
    gearbox: "manual",
    trunc: 3,
    year: 2018,
    fuel: "Gasoline",
  },
  {
    model: "Mercedes Benz GLC",
    type: "suv",
    capacity: 5,
    gearbox: "automatic",
    trunc: 4,
    year: 2019,
    fuel: "Diesel",
  },
  {
    model: "mini",
    type: "cabriolet",
    capacity: 4,
    gearbox: "manual",
    trunc: 1,
    year: 2018,
    fuel: "Gasoline",
  },
];

//VEHICLE TYPE

const carType = [
  "sedan",
  "suv",
  "coupe",
  "convertible",
  "stationWagon",
  "passengerVan",
  "luxuryVehicle",
];

const sedan = document.querySelector(".sedan");
const suv = document.querySelector(".suv");
const coupe = document.querySelector(".coupe");
const convertible = document.querySelector(".convertible");
const stationWagon = document.querySelector(".stationWagon");
const passengerVan = document.querySelector(".passengerVan");
const luxuryVehicle = document.querySelector(".luxuryVehicle");

// const refactor = () => {
//   for (let i = 0; i < carType.length; i++) {
//     if (`${carType[i]}.classList.contains(${carType[i]})`) {
//       carType[i].classList.remove("hide");
//     } else {
//       carType[i].classList.add("hide");
//       carType[i].classList.remove("flex");
//     }
//   }
// };

//RESET FILTER
const resetFilter = () => {
  document.querySelector(".reset-filter").addEventListener("click", () => {
    document.querySelectorAll(".car-container").forEach((element) => {
      if (element.classList.contains("hide")) {
        element.classList.remove("hide");
        element.classList.add("flex");
      } else {
      }
    });
  });
};
resetFilter();

// TO REFACTOR

// const refactor = (e) => {
//   document.querySelectorAll(".car-container").forEach((element) => {
//     for (let car of carType) {
//       if (element.classList.contains(`${car}`)) {
//         console.log("CONTAINS");
//         element.classList.remove("hide");
//       } else {
//         console.log("NOT CONTAINS");
//         element.classList.add("hide");
//         element.classList.remove("flex");
//       }
//     }
//   });
// };

// sedan.addEventListener("click", refactor);

sedan.addEventListener("click", () => {
  document.querySelectorAll(".car-container").forEach((element) => {
    if (element.classList.contains("sedan")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});

suv.addEventListener("click", () => {
  document.querySelectorAll(".car-container").forEach((element) => {
    if (element.classList.contains("suv")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});

coupe.addEventListener("click", () => {
  document.querySelectorAll(".car-container").forEach((element) => {
    if (element.classList.contains("coupe")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});

convertible.addEventListener("click", () => {
  document.querySelectorAll(".car-container").forEach((element) => {
    if (element.classList.contains("convertible")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});

stationWagon.addEventListener("click", () => {
  document.querySelectorAll(".car-container").forEach((element) => {
    if (element.classList.contains("stationWagon")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});

passengerVan.addEventListener("click", () => {
  document.querySelectorAll(".car-container").forEach((element) => {
    if (element.classList.contains("passengerVan")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});

luxuryVehicle.addEventListener("click", () => {
  document.querySelectorAll(".car-container").forEach((element) => {
    if (element.classList.contains("luxuryVehicle")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});
//AUTOMATIC FILTER

const switchAuto = document.querySelector(".slider");

switchAuto.addEventListener("click", () => {
  document.querySelectorAll(".manual").forEach((element) => {
    if (element.classList.contains("hide")) {
      element.classList.remove("hide");
      element.classList.add("flex");
    } else {
      element.classList.add("hide");
      element.classList.remove("flex");
    }
  });
});

// PASSENGER FILTER

// const passSlider = document.querySelector(".sliderPass");

// const sliderValue = (passSlider.oninput = () => {
//     console.log(passSlider.value);
// });

// passSlider.addEventListener("click", () => {
//     if ((sliderValue.value = 3)) {
//         console.log("YESSSSS");
//         document.querySelectorAll(".car-container").forEach((element) => {
//             if (element.classList.contains("four-seat")) {
//                 element.classList.remove("hide");
//                 element.classList.add("flex");
//             } else {
//                 element.classList.add("hide");
//                 element.classList.remove("flex");
//             }
//         });
//     } else if ((sliderValue.value = 4)) {
//         document.querySelectorAll(".car-container").forEach((element) => {
//             if (element.classList.contains("five-seat")) {
//                 element.classList.remove("hide");
//                 element.classList.add("flex");
//             } else {
//                 element.classList.add("hide");
//                 element.classList.remove("flex");
//             }
//         });
//         console.log("NOOOOO");
//     } else {}
// });

// CAR INFO POPUP

const carContainer = document.querySelectorAll(".car-container");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const body = document.querySelector("body");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < carContainer.length; i++) {
  carContainer[i].addEventListener("click", openModal);
  // console.log("clicked");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
