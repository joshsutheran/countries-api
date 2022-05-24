import { countries } from "./createObject.js"
import renderClickedCountry from "./renderClickedCountry.js"

export default function renderBorderCountry() {
  document.addEventListener("click", function (event) {
    console.log(event)
    if (event.target.id == "clickedCountry") {
      let clickedCountry = event.target.classList[0]
      countries.forEach((country) => {
        if (clickedCountry === country.countryAbbreviation) {
          renderClickedCountry(country.countryCode)
          window.scrollTo(0, 0)
        }
      })
    }
  })
}
