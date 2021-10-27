import { langFormatter, currencyFormatter } from "../component/Formatter";

// UI Class: handles UI changes
export default class UI {
  // return specific counry by id
  static getTargetCountry(id, allCountries) {
    return allCountries.filter((country) => country.id === id);
  }

  // display countries
  static displayCountries(countries) {
    this.countryContainer.innerHTML = "";
    countries.forEach((country) => {
      // add a country and a modal to container
      UI.addCountryToContainer(country);
      UI.addModalToContainer(country);
    });
  }

  // add a country to container
  static addCountryToContainer(country) {
    const countryEle = document.createElement("div");
    countryEle.classList.add("country");
    countryEle.innerHTML = `
        <div class="img-container">
            <img src="${country.flags.png}" alt="" />
            <div class="country-overlay">
              <button class="favorite-btn" style=${
                country.favorite ? "color:red;" : "color:#f6e8c9;"
              }>
                <i id="fav-${country.id}" class="fas fa-heart"></i>
              </button>
              <button id="btn-${
                country.id
              }" class="btn primary-btn">Check</button>
            </div>
          </div>
          <h5 class="country-name">${country.commonName}</h5>
    `;
    this.countryContainer.appendChild(countryEle);
  }
  // add a modal for a country
  static addModalToContainer(country) {
    const modalEle = document.createElement("div");
    modalEle.classList.add("modal");
    modalEle.id = `modal-${country.id}`;
    modalEle.innerHTML = `
      <div class="modal-content">
            <span id="modal-close-${
              country.id
            }" class="modal-close">&times;</span>
            <div class="modal-img-container">
              <img src="${country.flags.png}" alt="" />
            </div>
            <div class="modal-text">
              <p class="category">
                Country: <span class="category-info common-name">${
                  country.commonName
                }</span>
              </p>
              <p class="category">
                Country: <span class="category-info official-name">${
                  country.officialName
                }</span>
              </p>
              <p class="category">
                Capital: <span class="category-info capital">${
                  country.capital
                }</span>
              </p>
              <p class="category">
                Language(s):
                <span class="category-info language">${langFormatter(
                  country.languages
                )}</span>
              </p>
              <p class="category">
                Currency(s):
                <span class="category-info currency">${currencyFormatter(
                  country.currency
                )}</span>
              </p>
              <p class="category">
                Continent:
                <span class="category-info continent">${
                  country.continent
                }</span>
              </p>
              <p class="category">
                Population:
                <span class="category-info country-continent">${country.population.toLocaleString(
                  "en-US"
                )}</span>
              </p>
              <p class="category">
                maps:
                <span class="category-info map"><a href="${
                  country.map.googleMaps
                }" class="map-link" target="_blank">Check map</a></span>
              </p>
            </div>
            <button class="btn primary-btn">
              <a href="journals.html">Write Journal</a>
            </button>
          </div>
    
    `;
    this.countryContainer.appendChild(modalEle);
  }
}
