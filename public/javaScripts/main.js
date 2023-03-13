import { controlButton } from "./controlButton.js"

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

    let InputHour = document.querySelector("#InputHour").value
    let InputMinute = document.querySelector("#InputMinute").value
    let displayHour = document.querySelector("#hour")
    let displayMinute = document.querySelector("#minute")
    let containerAlerthourMinute = document.querySelector(".alert-hour-minute")
    let alertHourMinute = document.querySelector(".alert")

    let decimalPlaceHour = InputHour <= 9
    let decimalPlaceMinute = InputMinute <= 9
    let alertInputHour = InputHour < 0 || InputHour > 23
    let alertInputMinute = InputMinute < 0 || InputMinute > 59

    if (decimalPlaceHour) {
      displayHour.innerText = `0${InputHour}`
    } else {
      displayHour.innerText = InputHour
    }

    if (decimalPlaceMinute) {
      displayMinute.innerText = `0${InputMinute}`
    } else {
      displayMinute.innerText = InputMinute
    }

    if (alertInputHour) {
      alertHourMinute.innerText = "Digite um valor entre 0 e 23 horas"
      containerAlerthourMinute.classList.add("hide-alert")
      controlButton.Timer()
    } else if (alertInputMinute) {
      alertHourMinute.innerText = "Digite um valor entre 0 e 59 minutos"
      containerAlerthourMinute.classList.add("hide-alert")
      controlButton.Timer()
    } else {
      containerAlerthourMinute.classList.remove("hide-alert")
    }
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
