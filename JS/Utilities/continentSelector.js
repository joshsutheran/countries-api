export default function continentSelector() {
  Array.from(filterMenu.children).forEach((continent) => {
    continent.addEventListener("click", function (e) {
      selectedContinent = e.target.hash.slice(1)
      loadSearchCountries(searchBar.value.toUpperCase())
    })
  })
}
