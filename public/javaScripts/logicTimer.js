import { controlButton } from "./controlButton.js"

export const controlLogicTimer = {
  displayHour: document.querySelector("#hour"),
  displayMinute: document.querySelector("#minute"),
  containerAlerthourMinute: document.querySelector(".alert-hour-minute"),
  alertHourMinute: document.querySelector(".alert"),
  InputHour: document.querySelector("#InputHour"),
  InputMinute: document.querySelector("#InputMinute"),

  checkDecimal() {
    let InputHour = controlLogicTimer.InputHour.value
    let InputMinute = controlLogicTimer.InputMinute.value
    let decimalPlaceHour = InputHour <= 9
    let decimalPlaceMinute = InputMinute <= 9

    if (decimalPlaceHour) {
      controlLogicTimer.displayHour.innerText = `0${InputHour}`
    } else {
      controlLogicTimer.displayHour.innerText = InputHour
    }

    if (decimalPlaceMinute) {
      controlLogicTimer.displayMinute.innerText = `0${InputMinute}`
    } else {
      controlLogicTimer.displayMinute.innerText = InputMinute
    }
  },

  checkValueAndAlert() {
    let InputHour = controlLogicTimer.InputHour.value
    let InputMinute = controlLogicTimer.InputMinute.value
    let alertInputHour = InputHour < 0 || InputHour > 23
    let alertInputMinute = InputMinute < 0 || InputMinute > 59

    if (alertInputHour) {
      controlLogicTimer.alertHourMinute.innerText =
        "Digite um valor entre 0 e 23 horas"
      controlLogicTimer.containerAlerthourMinute.classList.add("hide-alert")
      controlButton.Timer()
    } else if (alertInputMinute) {
      controlLogicTimer.alertHourMinute.innerText =
        "Digite um valor entre 0 e 59 minutos"
      controlLogicTimer.containerAlerthourMinute.classList.add("hide-alert")
      controlButton.Timer()
    } else {
      controlLogicTimer.containerAlerthourMinute.classList.remove("hide-alert")
    }
  },
}
