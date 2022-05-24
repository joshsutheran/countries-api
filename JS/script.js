// MODULE IMPORTS //
import searchBarInput from "./Utilities/searchBar.js"
import loadSearchCountries from "./RenderData/loadSearchCountries.js"
import dropdownMenu from "./Utilities/continentDropdown.js"
import toggleColorMode from "./Utilities/toggleColorMode.js"
import loadAllCountries from "./RenderData/loadAllCountries.js"
import renderBorderCountry from "./RenderData/renderBorderCountry.js"
import logoReload from "./Utilities/logoReload.js"

// GLOBAL VARIABLES //
// Header and Search
export const searchBar = document.querySelector(".search--bar")
export const filterBtn = document.querySelector(".filter--dropdown")
export const filterMenu = document.querySelector(".filter--dropdown--content")
const resetBtn = document.querySelector(".reset--btn")
// Countries Grid
export const countryLoad = document.querySelector(".countries--load")
export const countriesContainer = document.querySelector(".country--grid")
// Country Info Page
export const countryInfoPage = document.querySelector(".country--info--page")
// Global Variables
export let selectedContinent = 'All';

// Continent Selector

const continentSelector = function () {
  Array.from(filterMenu.children).forEach((continent) => {
    continent.addEventListener("click", function (e) {
      selectedContinent = e.target.hash.slice(1)
      loadSearchCountries(searchBar.value.toUpperCase())
    })
  })
}

resetBtn.addEventListener("click", function () {
  selectedContinent = "All"
  searchBar.value = ""
  loadSearchCountries("")
})

// Back Button
document.addEventListener("click", function (e) {
  if (e.target.id == "btnPrepend") {
    countryInfoPage.innerHTML = ""
    countryLoad.classList.remove("hidden")
    selectedContinent = "All"
    searchBar.value = ""
    loadSearchCountries("")
    window.scrollTo(0, 0)
  }
})
////////////////////////////////////////////////
// INIT //
loadAllCountries()
dropdownMenu()
continentSelector()
searchBarInput()
toggleColorMode()
renderBorderCountry()
logoReload()
