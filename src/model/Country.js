// Country Class: Represent a Country
export default class Country {
  constructor(
    id,
    commonName,
    officialName,
    capital,
    population,
    languages,
    flags,
    emoji,
    currency,
    continent,
    map,
    favorite,
    journals
  ) {
    this.id = id;
    this.commonName = commonName;
    this.officialName = officialName;
    this.capital = capital;
    this.population = population;
    this.languages = languages;
    this.flags = flags;
    this.emoji = emoji;
    this.currency = currency;
    this.continent = continent;
    this.map = map;
    this.favorite = favorite;
    this.journals = journals;
  }
}
