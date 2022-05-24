import renderSpinner from "../Utilities/renderSpinner.js"
import { countriesContainer, selectedContinent } from "../script.js"
import renderCountries from "./renderCountries.js"
import { countries } from "./createObject.js"

export default function loadSearchCountries(search) {
  renderSpinner()
  let searchCountries = []
  countries.forEach((country) => {
    if (selectedContinent === "All") {
      if (country.name.toUpperCase().includes(search)) {
        searchCountries.unshift(country)
      }
    } else {
      if (search.value == "") {
        if (country.region.includes(selectedContinent)) {
          searchCountries.unshift(country)
        }
      } else {
        if (
          country.name.toUpperCase().includes(search) &&
          country.region.includes(selectedContinent)
        ) {
          searchCountries.unshift(country)
        }
      }
    }
  })
  if (searchCountries.length !== 0) {
    renderCountries(searchCountries)
  } else {
    countriesContainer.innerHTML = `<p class="no--countries--found">No Countries Found</p>`
  }
}
