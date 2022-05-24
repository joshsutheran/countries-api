const logo = document.querySelector(".logo")

export default function logoReload() {
  logo.addEventListener("click", function () {
    window.location.reload()
  })
}
