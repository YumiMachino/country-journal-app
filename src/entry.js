import Journal from "./model/Journal";
import Store from "./data/Store";
import { navbar, hamburgerBtn } from "./component/navbar";
import UI from "./UI/UI";

let allJournals;
Store.allJournals = allJournals;

hamburgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

// Create New Item
const newJournalBtn = document.getElementById("create");
newJournalBtn.addEventListener("click", () => {
  createModal.style.display = "block";
  newCountry.value = "";
  newTitle.value = "";
  newDate.value = "";
  newBody.value = "";
});
const createModal = document.getElementById("new-modal");
const createModalCloseBtn = document.getElementById("new-close");
const newItemSaveBtn = document.getElementById("new-save");

createModalCloseBtn.addEventListener("click", () => {
  createModal.style.display = "none";
});

// new journal input
const newCountry = document.getElementById("new-country");
const newTitle = document.getElementById("new-title");
const newDate = document.getElementById("new-date");
const newBody = document.getElementById("new-body");
const newSaveBtn = document.getElementById("new-save");

newItemSaveBtn.addEventListener("click", () => {
  fetchFlagFromCountry();
});

// Get country flag from country name
function fetchFlagFromCountry() {
  const country = newCountry.value;
  const ENDPOINT = `https://restcountries.com/v3.1/name/${country}`;
  fetchFlag(ENDPOINT);
}

async function fetchFlag(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    console.log(message);
    const emoji = "";
    createJournal(
      newCountry.value,
      emoji,
      newDate.value,
      newTitle.value,
      newBody.value
    );
  } else {
    const data = await res.json();
    const emoji = data[0].flag;
    createJournal(
      newCountry.value,
      emoji,
      newDate.value,
      newTitle.value,
      newBody.value
    );
  }
}

function createJournal(country, emoji, date, title, body) {
  const id = Store.getNewId();
  const journal = new Journal(id, country, emoji, date, title, body);
  // Add to storage
  Store.addJournal(journal);
  alert("New item has been added.");
  createModal.style.display = "none";
  allJournals = Store.getAllJournals();
  UI.displayAllJournals(allJournals);
  UI.displayEmojis(allJournals);
}

const journalWrapper = document.querySelector(".journals-wrapper");

const emojisWrapper = document.querySelector(".countries-emojis");

UI.emojisWrapper = emojisWrapper;
UI.journalWrapper = journalWrapper;

// Get initial countries only the first time
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".main-content").style.display = "block";
  allJournals = Store.getAllJournals();
  UI.displayAllJournals(allJournals);
  UI.displayEmojis(allJournals);
});

// Event Handler
journalWrapper.addEventListener("click", (e) => {
  //Check element tagname
  if (e.target.tagName === "BUTTON") {
    const btnEle = e.target.id.split("-")[0];
    if (btnEle === "edit") {
      const editId = Number(e.target.id.split("-")[1]);
      // Open modal by checking country class id
      const modal = document.getElementById(`edit-modal-${editId}`);
      modal.style.display = "block";
    } else if (btnEle === "delete") {
      alert("Do you want to delete item?");
      const deleteId = Number(e.target.id.split("-")[1]);
      const deleteJournal = Store.getJournalById(deleteId);
      Store.deleteJournal(deleteJournal);
      allJournals = Store.getAllJournals();
      UI.displayAllJournals(allJournals);
      UI.displayEmojis(allJournals);
    } else {
      // Get id and get a journal with correspond id
      const targetId = e.target.parentElement.parentElement.id.split("-")[2];
      const country = e.target.parentElement.dataset.country;
      // Create new object by getting new information
      let title = document.getElementById(`title-${targetId}`).value;
      let date = document.getElementById(`date-${targetId}`).value;
      let text = document.getElementById(`text-${targetId}`).value;
      const editedJournal = Store.getJournalById(targetId);
      editedJournal.title = title;
      editedJournal.date = date;
      editedJournal.text = text;
      // update journal function
      Store.updateJournal(editedJournal);
      const modal = document.getElementById(`edit-modal-${targetId}`);
      modal.style.display = "none";
      allJournals = Store.getAllJournals();
      UI.displayAllJournals(allJournals);
    }
  }
  // Close modal by checking close btn's parent modal id
  if (e.target.tagName === "SPAN") {
    if (e.target.id === "new-close") {
      createModal.style.display = "none";
    } else {
      const closeId = Number(e.target.id.split("-")[2]);
      const modal = document.getElementById(`edit-modal-${closeId}`);
      modal.style.display = "none";
    }
  }
});
