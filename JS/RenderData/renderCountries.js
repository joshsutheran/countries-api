import { countriesContainer } from "../script.js"
import renderClickedCountry from "./renderClickedCountry.js"
import { countryLoad } from "../script.js"

export default function renderCountries(countries) {
  countriesContainer.innerHTML = ""
  countries.forEach((country) => {
    const html = `
        <div class="${country.countryCode} country--card">
              <div class="flag">
                <img class="${country.name}"
                src="${country.flag}"
                alt="${country.name}'s flag"
                />
              </div>
              <div class="country--info">
                <h4 class="country--name">${country.name}</h4>
                <p class="country--pop"><b>Population: </b>${country.population}</p>
                <p class="country--region"><b>Region: </b>${country.region}</p>
                <p class="country--capital"><b>Capital: </b> ${country.capital}</p>
              </div>
            </div>
          </div>
        `
    countriesContainer.insertAdjacentHTML("beforeend", html)
  })
  Array.from(countriesContainer.children).forEach((countryCard) => {
    countryCard.addEventListener("click", function (event) {
      let clickedCountry = event.currentTarget.classList[0]
      renderClickedCountry(clickedCountry)
      countryLoad.classList.add("hidden")
      window.scrollTo(0, 0)
    })
  })
}
