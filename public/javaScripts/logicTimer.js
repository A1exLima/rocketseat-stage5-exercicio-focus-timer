import { controlButton } from "./controlButton.js"

let IdTimerOut
let InputMinute
let InputSecond
let minutes
let seconds

export const controlLogicTimer = {
  displayMinute: document.querySelector("#minute"),
  displaySecond: document.querySelector("#second"),
  containerAlertMinuteSecond: document.querySelector(".alert-minute-second"),
  alertMinuteSecond: document.querySelector(".alert"),
  InputMinute: document.querySelector("#InputMinute"),
  InputSecond: document.querySelector("#InputSecond"),

  checkDecimal() {
    InputMinute = controlLogicTimer.InputMinute.value
    InputSecond = controlLogicTimer.InputSecond.value

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
    InputMinute = controlLogicTimer.InputMinute.value
    InputSecond = controlLogicTimer.InputSecond.value

    let alertInputMinute = InputMinute < 0 || InputMinute > 59
    let alertInputSecond = InputSecond < 0 || InputSecond > 59

    if (alertInputMinute) {
      controlLogicTimer.alertMinuteSecond.innerText =
        "Digite um valor entre 0 e 59 minutos"
      controlLogicTimer.AddAlertContainerDisplay()
      controlButton.Timer()
    } else if (alertInputSecond) {
      controlLogicTimer.alertMinuteSecond.innerText =
        "Digite um valor entre 0 e 59 segundos"
      controlLogicTimer.AddAlertContainerDisplay()
      controlButton.Timer()
    } else {
      controlLogicTimer.containerAlertMinuteSecond.classList.remove(
        "hide-alert"
      )
    }
  },

  setTimerAndPlay() {
    minutes = Number(controlLogicTimer.displayMinute.textContent)
    seconds = Number(controlLogicTimer.displaySecond.textContent)

    let minAndSecReset = minutes == 0 && seconds == 0

    if (minAndSecReset) {
      controlLogicTimer.alertMinuteSecond.innerText =
        "INFORME um valor para MINUTOS e um valor para SEGUNDOS"
      controlLogicTimer.AddAlertContainerDisplay()
    } else {
      controlLogicTimer.countDown()
      controlButton.Play()
    }
  },

  countDown() {
    IdTimerOut = setTimeout(function () {
      minutes = Number(controlLogicTimer.displayMinute.textContent)
      seconds = Number(controlLogicTimer.displaySecond.textContent)

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

      if (minutes == 0 && seconds == 0) {
        controlButton.Stop()
        return
      }
      controlLogicTimer.countDown()
    }, 100)
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
    controlLogicTimer.containerAlertMinuteSecond.classList.add("hide-alert")
  },
}
