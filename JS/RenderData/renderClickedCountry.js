import { countryInfoPage } from "../script.js"
import { countries } from "./createObject.js"

export default function renderClickedCountry(countryCard) {
  countryInfoPage.innerHTML = ""
  let borderCountries = ""
  countries.forEach((country) => {
    if (countryCard === country.countryCode) {
      let currency = Object.values(country.currencies)[0].name
      let language = Object.values(country.languages)[0]
      if (country.borderCountries === undefined) {
        borderCountries = `<p class="border--country">None</p>`
      } else {
        country.borderCountries.forEach((country) => {
          borderCountries += `<p id="clickedCountry" class="${country} border--country">${country}</p>`
        })
      }
      let html = `
              <div class="back--btn" id='btnPrepend'>
                <img id='btnPrepend' src="./imgs/left-arrow.png" alt="Left hand arrow" />
                <p id='btnPrepend'>Back</p>
              </div>
              <div class="country--info--grid">
                <div class="country--info--left">
                  <div class="current--country--flag">
                    <img
                    src="${country.flag}"
                    alt="${country.name}'s flag"
                  />
                  </div>
              </div>
                <div class="country--info--right">
                  <div class="current--country--title">
                    <h4>${country.name}</h4>
                  </div>
                  <div class="current--country--info">
                    <div class="current--country--info--left">
                      <p><b>Official Name: </b>${country.name}</p>
                      <p><b>Region: </b>${country.region}</p>
                      <p><b>Timezone: </b>${country.timezone[0]}</p>
                      <p><b>Main Language: </b>${language}</p>
                      <p><b>Capital: </b>${country.capital}</p>
                    </div>
                    <div class="current--country--info--right">
                      <p><b>Population: </b>${country.population}</p>
                      <p><b>Continent: </b>${country.subRegion}</p>
                      <p><b>Main Currency: </b>${currency}</p>
                    </div>
                  </div>
                  <div class="border--countries">
                    <div class="border--countries--title">
                      <h4><b>Border Countries:</b></h4>
                    </div>
                    <div class="border--countries--list">
                    ${borderCountries}
                    </div>
                  </div>
                </div>
              </div>
        `
      countryInfoPage.insertAdjacentHTML("beforeend", html)
    }
  })
}
