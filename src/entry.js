// import Journal from "./model/Journal";
// import Store from "./data/Store";

// let allJournals;
// Store.allJournals = allJournals;

// const navbar = document.querySelector(".navbar");
// const hamburgerBtn = document.querySelector(".hamburger-menu");
// const createModal = document.getElementById("new-modal");
// const createModalCloseBtn = document.getElementById("new-close");
// const newItemSaveBtn = document.getElementById("new-save");

// createModalCloseBtn.addEventListener("click", () => {
//   createModal.style.display = "none";
// });

// newItemSaveBtn.addEventListener("click", () => {
//   fetchFlagFromCountry();
// });

// hamburgerBtn.addEventListener("click", () => {
//   navbar.classList.toggle("open");
// });

// const journalWrapper = document.querySelector(".journals-wrapper");

// journalWrapper.addEventListener("click", (e) => {
//   console.log("clicked", e.target.id, e.target.tagName);
//   //要素がbuttonか確認
//   if (e.target.tagName === "BUTTON") {
//     const btnEle = e.target.id.split("-")[0];
//     if (btnEle === "edit") {
//       const editId = Number(e.target.id.split("-")[1]);
//       // country classのid確認してmodalを開く
//       const modal = document.getElementById(`edit-modal-${editId}`);
//       modal.style.display = "block";
//     } else if (btnEle === "delete") {
//       alert("Do you want to delete item?");
//       const deleteId = Number(e.target.id.split("-")[1]);
//       const deleteJournal = Store.getJournalById(deleteId);
//       Store.deleteJournal(deleteJournal);
//       journalUI.displayAllJournals();
//       journalUI.displayEmojis();
//     } else {
//       // idをGet, Storeからそのidと一致するjournalを持ってくる
//       const targetId = e.target.parentElement.parentElement.id.split("-")[2];
//       const country = e.target.parentElement.dataset.country;
//       // 新しい情報をゲットしてオブジェクトを作る
//       let title = document.getElementById(`title-${targetId}`).value;
//       let date = document.getElementById(`date-${targetId}`).value;
//       let text = document.getElementById(`text-${targetId}`).value;

//       const editedJournal = Store.getJournalById(targetId);
//       editedJournal.title = title;
//       editedJournal.date = date;
//       editedJournal.text = text;
//       // update journal function
//       Store.updateJournal(editedJournal);
//       const modal = document.getElementById(`edit-modal-${targetId}`);
//       modal.style.display = "none";
//       journalUI.displayAllJournals();
//     }
//   }
//   // modalのcloseクラスの場合はその親のmodalのidを確認してクローズ
//   if (e.target.tagName === "SPAN") {
//     if (e.target.id === "new-close") {
//       createModal.style.display = "none";
//     } else {
//       const closeId = Number(e.target.id.split("-")[2]);
//       const modal = document.getElementById(`edit-modal-${closeId}`);
//       modal.style.display = "none";
//     }
//   }
// });

// const newJournalBtn = document.getElementById("create");
// newJournalBtn.addEventListener("click", () => {
//   createModal.style.display = "block";
//   newCountry.value = "";
//   newTitle.value = "";
//   newDate.value = "";
//   newBody.value = "";
// });

// // create new journal obj
// const newCountry = document.getElementById("new-country");
// const newTitle = document.getElementById("new-title");
// const newDate = document.getElementById("new-date");
// const newBody = document.getElementById("new-body");
// const newSaveBtn = document.getElementById("new-save");

// // add new Journal to local
// function fetchFlagFromCountry() {
//   const country = newCountry.value;
//   const ENDPOINT = `https://restcountries.com/v3.1/name/${country}`;
//   fetchFlag(ENDPOINT);
// }

// async function fetchFlag(url) {
//   const res = await fetch(url);
//   console.log("response status: ", res.status);
//   if (!res.ok) {
//     const message = `An error has occured: ${res.status}`;
//     console.log(message);
//     const emoji = "";
//     createJournal(
//       newCountry.value,
//       emoji,
//       newDate.value,
//       newTitle.value,
//       newBody.value
//     );
//   } else {
//     const data = await res.json();
//     const emoji = data[0].flag;
//     createJournal(
//       newCountry.value,
//       emoji,
//       newDate.value,
//       newTitle.value,
//       newBody.value
//     );
//   }
// }

// function createJournal(country, emoji, date, title, body) {
//   const id = Store.getNewId();
//   const journal = new Journal(id, country, emoji, date, title, body);
//   // Add to storage
//   Store.addJournal(journal);
//   alert("New item has been added.");
//   createModal.style.display = "none";
//   journalUI.displayAllJournals();
//   journalUI.displayEmojis();
// }

// const emojisWrapper = document.querySelector(".countries-emojis");

// // Get initial countries only the first time
// window.addEventListener("load", () => {
//   journalUI.displayEmojis();
//   journalUI.displayAllJournals();
// });

// class journalUI {
//   static displayEmojis() {
//     emojisWrapper.innerHTML = "";
//     const emojis = getAllEmojis();
//     emojis.forEach((emoji) => {
//       const emojiItem = document.createElement("SPAN");
//       emojiItem.classList.add("country-emoji");
//       emojiItem.innerHTML = emoji;
//       emojisWrapper.append(emojiItem);
//     });
//   }

//   static displayAllJournals() {
//     journalWrapper.innerHTML = ``;
//     // get info
//     allJournals = Store.getAllJournals();
//     const countries = getAllCountryNames();
//     countries.forEach((country) => {
//       const journals = journalsPerCounry(country);
//       journalUI.addJournalsToContainer(country, journals);
//     });
//   }
//   static addJournalsToContainer(country, journals) {
//     const journalContainer = document.createElement("div");
//     journalContainer.classList.add("journal-container");
//     journalContainer.innerHTML = `
//       <div class="journal-country" id="${country}-container">
//             <h1 class="journal-country-name">${country}</h1>
//           </div>
//     `;
//     journalWrapper.appendChild(journalContainer);
//     journals.forEach((journal) => {
//       journalUI.addJournalToContainer(country, journal);
//       journalUI.addModalToCountainer(country, journal);
//     });
//   }

//   static addJournalToContainer(country, journal) {
//     const journalEle = document.createElement("div");
//     journalEle.classList.add("journal");
//     journalEle.innerHTML = `
//      <div class="journal-text">
//               <div class="journal-date">${journal.date}</div>
//               <h5 class="journal-title">${journal.title}</h5>
//               <div class="journal-para">
//                 ${journal.text}
//               </div>
//               <div class="btn-wrapper">
//                 <button id="edit-${journal.id}" class="btn secondary-btn">Edit</button>
//                 <button id="delete-${journal.id}" class="btn tertiary-btn">Delete</button>
//               </div>
//             </div>
//     `;
//     const container = document.getElementById(`${country}-container`);
//     container.appendChild(journalEle);
//   }
//   // add modal
//   static addModalToCountainer(country, journal) {
//     const modalEle = document.createElement("div");
//     modalEle.classList.add("modal");
//     modalEle.id = `edit-modal-${journal.id}`;
//     modalEle.innerHTML = `
//        <div class="edit-modal-content" data-country="${country}" >
//             <span id="edit-close-${journal.id}" class="modal-close">&times;</span>

//             <form>
//               <div class="form-group">
//                 <label for="title">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   id="title-${journal.id}"
//                   class="form-control"
//                   placeholder="Enter title"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="date">Date</label>
//                 <input type="date" name="date" id="date-${journal.id}" placeholder="Enter date" />
//               </div>
//               <div class="form-group">
//                 <label for="body">Body</label>
//                 <textarea id="text-${journal.id}" class="textarea" placeholder="Enter text"></textarea>
//               </div>
//             </form>
//             <button class="btn primary-btn save">Save Changes</button>
//           </div>
//      `;
//     journalWrapper.appendChild(modalEle);
//     const title = document.getElementById(`title-${journal.id}`);
//     const date = document.getElementById(`date-${journal.id}`);
//     const text = document.getElementById(`text-${journal.id}`);
//     title.value = journal.title;
//     date.value = journal.date;
//     text.value = journal.text;
//   }
// }

// // Countryのみのarrayを返す
// function getAllCountryNames() {
//   allJournals = Store.getAllJournals();
//   let countries = [];
//   allJournals.forEach((journal) => {
//     // if it's not already pushed
//     const lowerJournal = journal.country.toLowerCase();
//     if (!countries.includes(lowerJournal)) {
//       countries.push(lowerJournal);
//     }
//   });
//   return countries;
// }

// // emojiだけを返す
// function getAllEmojis() {
//   allJournals = Store.getAllJournals();
//   let emojis = [];
//   allJournals.forEach((journal) => {
//     if (!emojis.includes(journal.emoji)) {
//       emojis.push(journal.emoji);
//     }
//   });
//   return emojis;
// }

// // Countryごとにjournalを返す
// function journalsPerCounry(country) {
//   allJournals = Store.getAllJournals();
//   let journals = [];
//   allJournals.forEach((journal) => {
//     const lowerCaseJournal = journal.country.toLowerCase();
//     if (lowerCaseJournal === country) {
//       journals.push(journal);
//     }
//   });
//   return journals;
// }

// getAllCountryNames();
// getAllEmojis();
// journalsPerCounry("japan");
