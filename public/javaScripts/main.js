import { controlButton } from "./controlButton.js"
import { controlLogicTimer } from "./logicTimer.js"

const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    controlButton.Play()
  },
  buttonPause(event) {
    event.preventDefault(event)
    controlButton.Pause()
  },
  buttonStop(event) {
    event.preventDefault(event)
    controlButton.Stop()
  },
  buttonTimer(event) {
    event.preventDefault(event)
    controlButton.Timer()
  },
  buttonConfirmHm(event) {
    event.preventDefault(event)
    
    controlButton.ConfirmHourMin()
    controlLogicTimer.checkDecimal()
    controlLogicTimer.checkValueAndAlert()
  },
  buttonSoundOn(event) {
    event.preventDefault(event)
    controlButton.SoundOn()
  },
  buttonSoundOff(event) {
    event.preventDefault(event)
    controlButton.SoundOff()
  },
}

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonTimer = document.querySelector(".timer")
const buttonStop = document.querySelector(".stop")
const buttonSoundOn = document.querySelector(".soundOn")
const buttonSoundOff = document.querySelector(".soundOff")
const buttonConfirmHourMin = document.querySelector(".confirm-hour-minute")

buttonPlay.addEventListener("click", startupControl.buttonPlay)
buttonPause.addEventListener("click", startupControl.buttonPause)
buttonStop.addEventListener("click", startupControl.buttonStop)
buttonTimer.addEventListener("click", startupControl.buttonTimer)
buttonSoundOn.addEventListener("click", startupControl.buttonSoundOn)
buttonSoundOff.addEventListener("click", startupControl.buttonSoundOff)
buttonConfirmHourMin.addEventListener("click", startupControl.buttonConfirmHm)
