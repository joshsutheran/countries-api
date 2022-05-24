import { searchBar } from "../script.js"
import loadSearchCountries from "../RenderData/loadSearchCountries.js"

export default function searchBarInput() {
  searchBar.addEventListener("input", function () {
    loadSearchCountries(searchBar.value.toUpperCase())
  })
}
