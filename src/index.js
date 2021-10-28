import Country from "./model/Country";
import Store from "./data/Store";
import UI from "./UI/UI";
import { langFormatter, currencyFormatter } from "./component/Formatter";

const countryContainer = document.querySelector(".country-container");

let allCountries;
Store.allCountries = allCountries;
UI.countryContainer = countryContainer;

// Data endpoint
const ALL_COUNTRY_URL = "https://restcountries.com/v3.1/all";

const navbar = document.querySelector(".navbar");
const hamburgerBtn = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

// // Initial UI setting
window.addEventListener("load", () => {
  if (!localStorage.getItem("countries")) {
    fetchCountries(ALL_COUNTRY_URL);
  } else {
    const countries = Store.getAllCountries();
    UI.displayCountries(countries);
  }
});

// Fetch all countries info
async function fetchCountries(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showCountries(data);
}

function showCountries(countries) {
  // console.log(countries);
  let count = 0;
  countries.forEach((country) => {
    const {
      name,
      capital,
      population,
      languages,
      flags,
      flag,
      currencies,
      continents,
      maps,
    } = country;
    // country element
    const countryEle = document.createElement("div");
    countryEle.classList.add("country");
    countryEle.innerHTML = `
        <div class="img-container">
            <img src="${flags.png}" alt="" />
            <div class="country-overlay">
              <button class="favorite-btn">
                <i id="fav-${count}" class="fas fa-heart"></i>
              </button>
              <button id="btn-${count}" class="btn primary-btn">Check</button>
            </div>
          </div>
          <h5 class="country-name">${name.common}</h5>
    `;
    countryContainer.appendChild(countryEle);

    // Modal element for the country
    const modalEle = document.createElement("div");
    modalEle.classList.add("modal");
    modalEle.id = `modal-${count}`;
    modalEle.innerHTML = `
      <div class="modal-content">
            <span id="modal-close-${count}" class="modal-close">&times;</span>
            <div class="modal-img-container">
              <img src="${flags.png}" alt="" />
            </div>
            <div class="modal-text">
              <p class="category">
                Country: <span class="category-info common-name">${
                  name.common
                }</span>
              </p>
              <p class="category">
                Country: <span class="category-info official-name">${
                  name.official
                }</span>
              </p>
              <p class="category">
                Capital: <span class="category-info capital">${capital}</span>
              </p>
              <p class="category">
                Language(s):
                <span class="category-info language">${langFormatter(
                  languages
                )}</span>
              </p>
              <p class="category">
                Currency(s):
                <span class="category-info currency">${currencyFormatter(
                  currencies
                )}</span>
              </p>
              <p class="category">
                Continent:
                <span class="category-info continent">${continents}</span>
              </p>
              <p class="category">
                Population:
                <span class="category-info country-continent">${population.toLocaleString(
                  "en-US"
                )}</span>
              </p>
              <p class="category">
                maps:
                <span class="category-info map"><a href="${
                  maps.googleMaps
                }" class="map-link" target="_blank">Check map</a></span>
              </p>
            </div>
            <button class="btn primary-btn">
              <a href="journals.html">Write Journal</a>
            </button>
          </div>

    `;
    countryContainer.appendChild(modalEle);

    const randomId = [...Array(100).keys()]
      .sort(() => Math.random() * 3 - 1)
      .slice(0, 3)
      .join("");

    const countryObj = new Country(
      count,
      name.common,
      name.official,
      capital,
      population,
      languages,
      flags,
      flag,
      currencies,
      continents,
      maps,
      false,
      []
    );
    console.log("obj: ", countryObj);
    // add to storage
    Store.addCountry(countryObj);
    count++;
  });
}

// Event Handler
countryContainer.addEventListener("click", (e) => {
  // Open modal
  if (e.target.tagName === "BUTTON") {
    console.log("button is clicked");
    const btnId = Number(e.target.id.split("-")[1]);
    const modal = document.getElementById(`modal-${btnId}`);
    modal.style.display = "block";
  }
  // Close modal
  if (e.target.tagName === "SPAN") {
    const closeId = Number(e.target.id.split("-")[2]);
    const modal = document.getElementById(`modal-${closeId}`);
    modal.style.display = "none";
  }
  // Toggle favorite
  if (e.target.tagName === "I") {
    const countryId = Number(e.target.id.split("-")[1]);
    let countries = Store.getAllCountries();
    if (countries[countryId].favorite) {
      e.target.parentElement.style.color = "#f6e8c9";
      countries[countryId].favorite = false;
    } else {
      e.target.parentElement.style.color = "red";
      countries[countryId].favorite = true;
    }
    Store.updateCountries(countries);
  }
});

// Toggle display all vs show favorite
const displayAll = document.getElementById("display-all");
const showFavorite = document.getElementById("show-favorite");
displayAll.addEventListener("click", () => {
  // Fetch from local storage
  const countries = Store.getAllCountries();
  UI.displayCountries(countries);
});
showFavorite.addEventListener("click", () => {
  const favorites = Store.getAllFavorites();
  UI.displayCountries(favorites);
});

// // UI Class: Handle UI changes
// class UI {
//   // return specific country by id
//   static getTargetCountry(id) {
//     let countries = Store.getAllCountries();
//     return countries.filter((country) => country.id === id);
//   }
//   // display countries
//   static displayCountries(countries) {
//     countryContainer.innerHTML = "";
//     countries.forEach((country) => {
//       UI.addCountryToContainer(country);
//       UI.addModalToContainer(country);
//     });
//   }
//   // add a country to container
//   static addCountryToContainer(country) {
//     const countryEle = document.createElement("div");
//     countryEle.classList.add("country");
//     countryEle.innerHTML = `
//         <div class="img-container">
//             <img src="${country.flags.png}" alt="" />
//             <div class="country-overlay">
//               <button class="favorite-btn" style=${
//                 country.favorite ? "color:red;" : "color:#f6e8c9;"
//               }>
//                 <i id="fav-${country.id}" class="fas fa-heart"></i>
//               </button>
//               <button id="btn-${
//                 country.id
//               }" class="btn primary-btn">Check</button>
//             </div>
//           </div>
//           <h5 class="country-name">${country.commonName}</h5>
//     `;
//     countryContainer.appendChild(countryEle);
//   }

//   // add a modal for a country
//   static addModalToContainer(country) {
//     const modalEle = document.createElement("div");
//     modalEle.classList.add("modal");
//     modalEle.id = `modal-${country.id}`;
//     modalEle.innerHTML = `
//       <div class="modal-content">
//             <span id="modal-close-${
//               country.id
//             }" class="modal-close">&times;</span>
//             <div class="modal-img-container">
//               <img src="${country.flags.png}" alt="" />
//             </div>
//             <div class="modal-text">
//               <p class="category">
//                 Country: <span class="category-info common-name">${
//                   country.commonName
//                 }</span>
//               </p>
//               <p class="category">
//                 Country: <span class="category-info official-name">${
//                   country.officialName
//                 }</span>
//               </p>
//               <p class="category">
//                 Capital: <span class="category-info capital">${
//                   country.capital
//                 }</span>
//               </p>
//               <p class="category">
//                 Language(s):
//                 <span class="category-info language">${langContent(
//                   country.languages
//                 )}</span>
//               </p>
//               <p class="category">
//                 Currency(s):
//                 <span class="category-info currency">${currencyContent(
//                   country.currency
//                 )}</span>
//               </p>
//               <p class="category">
//                 Continent:
//                 <span class="category-info continent">${
//                   country.continent
//                 }</span>
//               </p>
//               <p class="category">
//                 Population:
//                 <span class="category-info country-continent">${country.population.toLocaleString(
//                   "en-US"
//                 )}</span>
//               </p>
//               <p class="category">
//                 maps:
//                 <span class="category-info map"><a href="${
//                   country.map.googleMaps
//                 }" class="map-link" target="_blank">Check map</a></span>
//               </p>
//             </div>
//             <button class="btn primary-btn">
//               <a href="journals.html">Write Journal</a>
//             </button>
//           </div>

//     `;
//     countryContainer.appendChild(modalEle);
//   }
// }

// // Search action
// const form = document.getElementById("form");
// const search = document.getElementById("search-input");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchTerm = search.value;
//   const allCountries = Store.getAllCountries();
//   if (searchTerm && searchTerm !== "") {
//     let filteredCountries = allCountries.filter((country) =>
//       country.commonName.includes(searchTerm)
//     );
//     UI.displayCountries(filteredCountries);
//     search.value = "";
//   }
// });
