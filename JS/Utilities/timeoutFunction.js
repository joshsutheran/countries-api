export default function timeout(secs) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${secs} second`))
    }, secs * 1000)
  })
}
