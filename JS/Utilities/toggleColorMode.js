const colorMode = document.querySelector(".toggle--view")
const mainColor = document.querySelector(".day--mode")
const headerColor = document.querySelector(".day--mode--header")

export default function toggleColorMode() {
  colorMode.addEventListener("click", function () {
    if (mainColor.classList.contains("dark--mode")) {
      mainColor.classList.remove("dark--mode")
      headerColor.classList.remove("dark--mode--header")
      colorMode.innerHTML = ""
      colorMode.innerHTML = `
            <img src="../imgs/moon.png" alt="Moon Icon" />
            <p>Night Mode</p>
            `
    } else {
      mainColor.classList.add("dark--mode")
      headerColor.classList.add("dark--mode--header")
      colorMode.innerHTML = ""
      colorMode.innerHTML = `
            <img src="./imgs/sun--icon.png" alt="Sun Icon" />
            <p>Day Mode</p>
            `
    }
  })
}
