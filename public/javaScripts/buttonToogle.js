export const controlButton = {
  Play: document.querySelector(".play"),
  Pause: document.querySelector(".pause"),
  Timer: document.querySelector(".timer"),
  Stop: document.querySelector(".stop"),

  play() {
    controlButton.Play.classList.add("hide")
    controlButton.Pause.classList.remove("hide")
    controlButton.Timer.classList.add("hide")
    controlButton.Stop.classList.remove("hide")
  },

  pause() {
    controlButton.Pause.classList.add("hide")
    controlButton.Play.classList.remove("hide")
  },

  stop() {
    controlButton.Stop.classList.add("hide")
    controlButton.Timer.classList.remove("hide")
    controlButton.Pause.classList.add("hide")
    controlButton.Play.classList.remove("hide")
  },
}
