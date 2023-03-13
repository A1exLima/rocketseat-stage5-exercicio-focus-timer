export const controlButton = {
  play: document.querySelector(".play"),
  pause: document.querySelector(".pause"),
  timer: document.querySelector(".timer"),
  stop: document.querySelector(".stop"),
  soundOn: document.querySelector(".soundOn"),
  soundOff: document.querySelector(".soundOff"),
  boxTimer: document.querySelector(".box-hour-minute"),
  confirmHourMin: document.querySelector(".confirm-hour-minute"),

  Play() {
    controlButton.play.classList.add("hide")
    controlButton.pause.classList.remove("hide")
    controlButton.timer.classList.add("hide")
    controlButton.stop.classList.remove("hide")
  },

  Pause() {
    controlButton.pause.classList.add("hide")
    controlButton.play.classList.remove("hide")
  },

  Stop() {
    controlButton.stop.classList.add("hide")
    controlButton.timer.classList.remove("hide")
    controlButton.pause.classList.add("hide")
    controlButton.play.classList.remove("hide")
  },

  Timer() {
    controlButton.boxTimer.classList.toggle("hide")
  },

  SoundOn() {
    controlButton.soundOn.classList.add("hide")
    controlButton.soundOff.classList.remove("hide")
  },

  SoundOff() {
    controlButton.soundOn.classList.remove("hide")
    controlButton.soundOff.classList.add("hide")
  },

  ConfirmHourMin(){
    controlButton.boxTimer.classList.add("hide")
  },
}
