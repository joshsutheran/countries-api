import renderCountries from "./renderCountries.js"

export let countries

export default function createObject(res) {
  countries = res.map((country) => {
    return {
      name: country.name.common,
      flag: country.flags.png,
      capital: country.capital,
      continent: country.continents,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      borderCountries: country.borders,
      currencies: country.currencies,
      languages: country.languages,
      timezone: country.timezones,
      countryCode: country.cca2,
      countryAbbreviation: country.cca3,
    }
  })
  renderCountries(countries)
}
