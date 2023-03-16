import { controlButton } from "./controlButton.js"
import { controlLogicTimer } from "./logicTimer.js"
import { projectVariables } from "./projectVariables.js"
import { audioData } from "./sound.js"

const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    controlLogicTimer.setTimerAndPlay()
    audioData.buttonPressAudio.play()
  },
  buttonPause(event) {
    event.preventDefault(event)
    controlButton.Pause()
    controlLogicTimer.PauseDisplayTimer()
    audioData.buttonPressAudio.play()
  },
  buttonStop(event) {
    event.preventDefault(event)
    controlButton.Stop()
    controlLogicTimer.StopDisplayTimer()
    audioData.buttonPressAudio.play()
  },
  buttonTimer(event) {
    event.preventDefault(event)
    controlButton.Timer()
    audioData.buttonPressAudio.play()
  },
  buttonConfirmMs(event) {
    event.preventDefault(event)
    controlButton.ConfirmMinSecond()
    controlLogicTimer.checkDecimal()
    controlLogicTimer.checkGapValueAndAlert()
    audioData.buttonPressAudio.play()
  },
  buttonSoundOn(event) {
    event.preventDefault(event)
    controlButton.SoundOn()
    audioData.bgAudio.play()
  },
  buttonSoundOff(event) {
    event.preventDefault(event)
    controlButton.SoundOff()
    audioData.bgAudio.pause()
  },
}

projectVariables.buttonPlay.addEventListener("click", startupControl.buttonPlay)
projectVariables.buttonPause.addEventListener("click", startupControl.buttonPause)
projectVariables.buttonStop.addEventListener("click", startupControl.buttonStop)
projectVariables.buttonTimer.addEventListener("click", startupControl.buttonTimer)
projectVariables.buttonSoundOn.addEventListener("click", startupControl.buttonSoundOn)
projectVariables.buttonSoundOff.addEventListener("click", startupControl.buttonSoundOff)
projectVariables.buttonConfirmMinSecond.addEventListener("click", startupControl.buttonConfirmMs)
