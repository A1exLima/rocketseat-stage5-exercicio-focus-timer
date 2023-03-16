import { projectVariables } from "./projectVariables.js"

export const controlButton = {
  play: projectVariables.buttonPlay,
  pause: projectVariables.buttonPause,
  timer: projectVariables.buttonTimer,
  stop: projectVariables.buttonStop,
  soundOn: projectVariables.buttonSoundOn,
  soundOff: projectVariables.buttonSoundOff,
  confirmHourMin: projectVariables.buttonConfirmMinSecond,
  boxTimer: projectVariables.boxTimer,

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

  ConfirmMinSecond() {
    controlButton.boxTimer.classList.add("hide")
  },
}
