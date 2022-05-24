import { countriesContainer } from "../script.js"

export default function errorHandler(err) {
  countriesContainer.innerHTML = ""
  let html = `<h1 class="error--handler">${err}. Please try again...</h1>`
  countriesContainer.insertAdjacentHTML("beforeend", html)
}
