import { filterBtn } from "../script.js"
import { filterMenu } from "../script.js"

export default function dropdownMenu() {
  filterBtn.addEventListener("click", function () {
    filterMenu.classList.toggle("hidden")
  })
}
