import getJSON from "../Utilities/getJSON.js"
import renderSpinner from "../Utilities/renderSpinner.js"
import createObject from "./createObject.js"
import errorHandler from "../Utilities/errorHandler.js"

export default async function loadAllCountries() {
  renderSpinner()
  try {
    let res = await getJSON(`https://restcountries.com/v3.1/all`)
    createObject(res)
  } catch (err) {
    errorHandler(err)
  }
}
