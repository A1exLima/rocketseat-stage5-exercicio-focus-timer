import { controlButton } from "./controlButton.js"
import { projectVariables } from "./projectVariables.js"
import { audioData } from "./sound.js"

let IdTimerOut
let InputMinute
let InputSecond
let minutes
let seconds

export const controlLogicTimer = {
  displayMinute: projectVariables.displayMinute,
  displaySecond: projectVariables.displaySecond,
  containerAlertMinSec: projectVariables.containerAlertMinSec,
  alertMinSec: projectVariables.alertMinSec,
  InputMinute: projectVariables.InputMinute,
  InputSecond: projectVariables.InputSecond,

  checkDecimal() {
    controlLogicTimer.captureInputMinSec()

    let decimalPlaceMinute = InputMinute <= 9
    let decimalPlaceSecond = InputSecond <= 9

    if (decimalPlaceMinute) {
      controlLogicTimer.displayMinute.textContent = `0${InputMinute}`
    } else {
      controlLogicTimer.displayMinute.textContent = InputMinute
    }

    if (decimalPlaceSecond) {
      controlLogicTimer.displaySecond.textContent = `0${InputSecond}`
    } else {
      controlLogicTimer.displaySecond.textContent = InputSecond
    }
  },

  checkGapValueAndAlert() {
    controlLogicTimer.captureInputMinSec()

    let alertInputMinute = InputMinute < 0 || InputMinute > 59
    let alertInputSecond = InputSecond < 0 || InputSecond > 59

    if (alertInputMinute) {
      controlLogicTimer.alertMinSec.innerText =
        "Digite um valor entre 0 e 59 minutos"
      controlLogicTimer.AddAlertContainerDisplay()
      controlButton.Timer()
    } else if (alertInputSecond) {
      controlLogicTimer.alertMinSec.innerText =
        "Digite um valor entre 0 e 59 segundos"
      controlLogicTimer.AddAlertContainerDisplay()
      controlButton.Timer()
    } else {
      controlLogicTimer.containerAlertMinSec.classList.remove("hide-alert")
    }
  },

  setTimerAndPlay() {
    controlLogicTimer.textContentVariableMinAndSec()

    let minAndSecReset = minutes == 0 && seconds == 0

    if (minAndSecReset) {
      controlLogicTimer.alertMinSec.innerText =
        "INFORME um valor para MINUTOS e um valor para SEGUNDOS"
      controlLogicTimer.AddAlertContainerDisplay()
    } else {
      controlLogicTimer.countDown()
      controlButton.Play()
    }
  },

  countDown() {
    IdTimerOut = setTimeout(function () {
      controlLogicTimer.textContentVariableMinAndSec()

      if (seconds <= 0) {
        seconds = 60
        controlLogicTimer.displayMinute.textContent = String(
          --minutes
        ).padStart(2, "0")
      }

      controlLogicTimer.displaySecond.textContent = String(--seconds).padStart(
        2,
        "0"
      )

      //reset timer
      if (minutes == 0 && seconds == 0) {
        controlButton.Stop()
        audioData.kitchenTimer.play()
        return
      }
      controlLogicTimer.countDown()
    }, 1000)
  },

  PauseDisplayTimer() {
    clearTimeout(IdTimerOut)
  },

  StopDisplayTimer() {
    controlLogicTimer.PauseDisplayTimer()
    controlLogicTimer.displaySecond.textContent = String(InputSecond).padStart(
      2,
      "0"
    )
    controlLogicTimer.displayMinute.textContent = String(InputMinute).padStart(
      2,
      "0"
    )
  },

  AddAlertContainerDisplay() {
    controlLogicTimer.containerAlertMinSec.classList.add("hide-alert")
  },

  captureInputMinSec() {
    InputMinute = controlLogicTimer.InputMinute.value
    InputSecond = controlLogicTimer.InputSecond.value
  },

  textContentVariableMinAndSec() {
    minutes = Number(controlLogicTimer.displayMinute.textContent)
    seconds = Number(controlLogicTimer.displaySecond.textContent)
  },
}
