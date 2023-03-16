import { controlButton } from "./controlButton.js"
import { controlLogicTimer } from "./logicTimer.js"
import { projectVariables } from "./projectVariables.js"

const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    controlLogicTimer.setTimerAndPlay()
  },
  buttonPause(event) {
    event.preventDefault(event)
    controlButton.Pause()
    controlLogicTimer.PauseDisplayTimer()
  },
  buttonStop(event) {
    event.preventDefault(event)
    controlButton.Stop()
    controlLogicTimer.StopDisplayTimer()
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

projectVariables.buttonPlay.addEventListener("click", startupControl.buttonPlay)
projectVariables.buttonPause.addEventListener("click", startupControl.buttonPause)
projectVariables.buttonStop.addEventListener("click", startupControl.buttonStop)
projectVariables.buttonTimer.addEventListener("click", startupControl.buttonTimer)
projectVariables.buttonSoundOn.addEventListener("click", startupControl.buttonSoundOn)
projectVariables.buttonSoundOff.addEventListener("click", startupControl.buttonSoundOff)
projectVariables.buttonConfirmMinSecond.addEventListener("click", startupControl.buttonConfirmMs)
