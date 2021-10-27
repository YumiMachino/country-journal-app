// Journal Class: Represent a journal
export default class Journal {
  constructor(id, country, emoji, date, title, text) {
    this.id = id;
    this.country = country;
    this.emoji = emoji;
    this.date = date;
    this.title = title;
    this.text = text;
  }
}
