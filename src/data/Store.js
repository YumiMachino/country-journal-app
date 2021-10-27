// Store Class: handles local storage

export default class Store {
  static getAllCountries() {
    if (localStorage.getItem("countries") === null) {
      this.allCountries = [];
    } else {
      this.allCountries = JSON.parse(localStorage.getItem("countries"));
    }
    return this.allCountries;
  }

  static addCountry(country) {
    this.allCountries = Store.getAllCountries();
    this.allCountries.push(country);
    // reset storage
    localStorage.setItem("countries", JSON.stringify(this.allCountries));
  }

  static updateCountries(countries) {
    localStorage.setItem("countries", JSON.stringify(countries));
  }

  static getAllFavorites() {
    this.allCountries = this.getAllCountries();
    const favorites = this.allCountries.filter(
      (country) => country.favorite === true
    );
    return favorites;
  }

  // get journals
  static getAllJournals() {
    if (localStorage.getItem("journals") === null) {
      this.allJournals = [];
    } else {
      this.allJournals = JSON.parse(localStorage.getItem("journals"));
    }
    return this.allJournals;
  }
  // add journals
  static addJournal(journal) {
    this.allJournals = Store.getAllJournals();
    this.allJournals.push(journal);
    //reset storage
    localStorage.setItem("journals", JSON.stringify(this.allJournals));
  }
  // update journals
  static updateJournals(journals) {
    localStorage.setItem("journals", JSON.stringify(journals));
  }

  static updateJournal(editedJournal) {
    this.allJournals = Store.getAllJournals();
    // let origJournal;
    this.allJournals.forEach((j) => {
      if (j.id === editedJournal.id) {
        j.country = editedJournal.country;
        j.emoji = editedJournal.emoji;
        j.date = editedJournal.date;
        j.title = editedJournal.title;
        j.text = editedJournal.text;
      }
    });
    localStorage.setItem("journals", JSON.stringify(this.allJournals));
  }

  // delete journals
  static deleteJournal(journal) {
    this.allJournals = Store.getAllJournals();

    const filtered = this.allJournals.filter((j) => {
      return j.id !== journal.id;
    });

    localStorage.setItem("journals", JSON.stringify(filtered));
  }

  // unique idにしなければいけない！
  static getNewId() {
    this.allJournals = Store.getAllJournals();
    const newId = this.allJournals.length;
    return newId;
  }

  static getJournalById(id) {
    let targetJournal;
    this.allJournals = Store.getAllJournals();

    this.allJournals.forEach((journal) => {
      if (journal.id == id) {
        targetJournal = journal;
      }
    });
    return targetJournal;
  }
}
