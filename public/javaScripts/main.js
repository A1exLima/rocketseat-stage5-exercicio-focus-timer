const startupControlButton = {
  buttonPlay: document.querySelector(".play"),
  buttonPause: document.querySelector(".pause"),
  buttonStop: document.querySelector(".stop"),

  buttonPlayToggle(event) {
    event.preventDefault(event)
    startupControlButton.buttonPlay.classList.add("hide")
    startupControlButton.buttonPause.classList.remove("hide")
  },
  buttonPauseToggle(event) {
    event.preventDefault(event)
    startupControlButton.buttonPause.classList.add("hide")
    startupControlButton.buttonStop.classList.remove("hide")
  },
  buttonStopToggle(event) {
    event.preventDefault(event)
    startupControlButton.buttonStop.classList.add("hide")
    startupControlButton.buttonPlay.classList.remove("hide")
  },
}

startupControlButton.buttonPlay.addEventListener(
  "click",
  startupControlButton.buttonPlayToggle
)
startupControlButton.buttonPause.addEventListener(
  "click",
  startupControlButton.buttonPauseToggle
)
startupControlButton.buttonStop.addEventListener(
  "click",
  startupControlButton.buttonStopToggle
)
