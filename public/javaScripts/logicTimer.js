import { controlButton } from "./controlButton.js"

export const controlLogicTimer = {
  displayMinute: document.querySelector("#minute"),
  displaySecond: document.querySelector("#second"),
  containerAlerMinuteSecond: document.querySelector(".alert-minute-second"),
  alertMinuteSecond: document.querySelector(".alert"),
  InputMinute: document.querySelector("#InputMinute"),
  InputSecond: document.querySelector("#InputSecond"),

  checkDecimal() {
    let InputMinute = controlLogicTimer.InputMinute.value
    let InputSecond = controlLogicTimer.InputSecond.value

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
    let InputMinute = controlLogicTimer.InputMinute.value
    let InputSecond = controlLogicTimer.InputSecond.value
    let alertInputMinute = InputMinute < 0 || InputMinute > 59
    let alertInputSecond = InputSecond < 0 || InputSecond > 59

    if (alertInputMinute) {
      controlLogicTimer.alertMinuteSecond.innerText =
        "Digite um valor entre 0 e 59 minutos"
      controlLogicTimer.containerAlerMinuteSecond.classList.add("hide-alert")
      controlButton.Timer()
    } else if (alertInputSecond) {
      controlLogicTimer.alertMinuteSecond.innerText =
        "Digite um valor entre 0 e 59 segundos"
      controlLogicTimer.containerAlerMinuteSecond.classList.add("hide-alert")
      controlButton.Timer()
    } else {
      controlLogicTimer.containerAlerMinuteSecond.classList.remove("hide-alert")
    }
  },

  countDown() {
    setTimeout(function () {
      let minutes = Number(controlLogicTimer.displayMinute.textContent)
      let seconds = Number(controlLogicTimer.displaySecond.textContent)

      let decimalPlaceMinute = minutes <= 10 && minutes != 0
      let decimalPlaceSecond = seconds <= 10 && seconds != 0

      if (minutes <= 0) {
        minutes = 60
      }

      if (seconds <= 0) {
        seconds = 60
        if (decimalPlaceMinute) {
          controlLogicTimer.displayMinute.textContent = `0${minutes - 1}`
        } else {
          controlLogicTimer.displayMinute.textContent = minutes - 1
        }
      }

      if (decimalPlaceSecond) {
        controlLogicTimer.displaySecond.textContent = `0${seconds - 1}`
      } else {
        controlLogicTimer.displaySecond.textContent = seconds - 1
      }

      controlLogicTimer.countDown()
    }, 1000)
  },
}
