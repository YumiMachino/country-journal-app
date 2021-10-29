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

  // Handling Journal Page UI

  // display all emojis
  static displayEmojis(allJournals) {
    let emojis = [];
    allJournals.forEach((journal) => {
      if (!emojis.includes(journal.emoji)) {
        emojis.push(journal.emoji);
      }
    });
    this.emojisWrapper.innerHTML = "";
    emojis.forEach((emoji) => {
      const emojiItem = document.createElement("SPAN");
      emojiItem.classList.add("country-emoji");
      emojiItem.innerHTML = emoji;
      this.emojisWrapper.append(emojiItem);
    });
  }

  // display all journals
  static displayAllJournals(allJournals) {
    this.journalWrapper.innerHTML = ``;
    const countries = UI.getAllCountryNames(allJournals);
    countries.forEach((country) => {
      const journals = UI.journalsPerCounry(country, allJournals);
      console.log("journals per counry", journals);
      UI.addJournalsToContainer(country, journals);
    });
  }

  // add journals per country
  static addJournalsToContainer(country, journals) {
    const journalContainer = document.createElement("div");
    journalContainer.classList.add("journal-container");
    journalContainer.innerHTML = `
      <div class="journal-country" id="${country}-container">
            <h1 class="journal-country-name">${country}</h1>
          </div>
    `;
    this.journalWrapper.appendChild(journalContainer);
    journals.forEach((journal) => {
      UI.addJournalToContainer(country, journal);
      UI.addModalToCountainer(country, journal);
    });
  }
  // add one journal to container
  static addJournalToContainer(country, journal) {
    const journalEle = document.createElement("div");
    journalEle.classList.add("journal");
    journalEle.innerHTML = `
     <div class="journal-text">
              <div class="journal-date">${journal.date}</div>
              <h5 class="journal-title">${journal.title}</h5>
              <div class="journal-para">
                ${journal.text}
              </div>
              <div class="btn-wrapper">
                <button id="edit-${journal.id}" class="btn secondary-btn">Edit</button>
                <button id="delete-${journal.id}" class="btn tertiary-btn">Delete</button>
              </div>
            </div>
    `;
    const container = document.getElementById(`${country}-container`);
    container.appendChild(journalEle);
  }

  // add modal
  static addModalToCountainer(country, journal) {
    const modalEle = document.createElement("div");
    modalEle.classList.add("modal");
    modalEle.id = `edit-modal-${journal.id}`;
    modalEle.innerHTML = `
       <div class="edit-modal-content" data-country="${country}" >
            <span id="edit-close-${journal.id}" class="modal-close">&times;</span>

            <form>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title-${journal.id}"
                  class="form-control"
                  placeholder="Enter title"
                />
              </div>
              <div class="form-group">
                <label for="date">Date</label>
                <input type="date" name="date" id="date-${journal.id}" placeholder="Enter date" />
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <textarea id="text-${journal.id}" class="textarea" placeholder="Enter text"></textarea>
              </div>
            </form>
            <button class="btn primary-btn save">Save Changes</button>
          </div>
     `;
    this.journalWrapper.appendChild(modalEle);
    const title = document.getElementById(`title-${journal.id}`);
    const date = document.getElementById(`date-${journal.id}`);
    const text = document.getElementById(`text-${journal.id}`);
    title.value = journal.title;
    date.value = journal.date;
    text.value = journal.text;
  }

  // return an array of countries
  static getAllCountryNames(allJournals) {
    let countries = [];
    allJournals.forEach((journal) => {
      // if it's not already pushed
      const lowerJournal = journal.country.toLowerCase();
      if (!countries.includes(lowerJournal)) {
        countries.push(lowerJournal);
      }
    });
    return countries;
  }
  // return journals based on country input
  static journalsPerCounry(country, allJournals) {
    let journals = [];
    allJournals.forEach((journal) => {
      const lowerCaseJournal = journal.country.toLowerCase();
      if (lowerCaseJournal === country) {
        journals.push(journal);
      }
    });
    return journals;
  }
}
