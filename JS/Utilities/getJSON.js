import timeout from "./timeoutFunction.js"

export default async function getJSON(url) {
  try {
    const res = await Promise.race([fetch(url), timeout(5)])
    const data = await res.json()
    if (!res.ok) throw new Error(`${data.message} (${res.status})`)
    return data
  } catch (err) {
    throw err
  }
}
