import { controlButton } from "./controlButton.js"
import { controlLogicTimer } from "./logicTimer.js"

const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    
    controlLogicTimer.setTimerAndPlay()
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
  buttonConfirmMs(event) {
    event.preventDefault(event)

    controlButton.ConfirmMinSecond()
    controlLogicTimer.checkDecimal()
    controlLogicTimer.checkGapValueAndAlert()
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
const buttonConfirmMinSecond = document.querySelector(".confirm-minute-second")

buttonPlay.addEventListener("click", startupControl.buttonPlay)
buttonPause.addEventListener("click", startupControl.buttonPause)
buttonStop.addEventListener("click", startupControl.buttonStop)
buttonTimer.addEventListener("click", startupControl.buttonTimer)
buttonSoundOn.addEventListener("click", startupControl.buttonSoundOn)
buttonSoundOff.addEventListener("click", startupControl.buttonSoundOff)
buttonConfirmMinSecond.addEventListener("click", startupControl.buttonConfirmMs)
