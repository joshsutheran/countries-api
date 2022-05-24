import { countriesContainer } from "../script.js"

export default function renderSpinner() {
  const html = `
              <div class="spinner">
                  <img src="./imgs/spinner-icon.png" alt="spinner-icon">
              </div> 
                  `
  countriesContainer.insertAdjacentHTML("beforeend", html)
}
