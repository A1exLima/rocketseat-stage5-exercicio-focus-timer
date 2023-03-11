import { controlButton } from "../javaScripts/buttonToogle.js"

const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)

    controlButton.play()
  },
  buttonPause(event) {
    event.preventDefault(event)

    controlButton.pause()
  },
  buttonStop(event) {
    event.preventDefault(event)

    controlButton.stop()
  },
  buttonTimer(event) {
    event.preventDefault(event)
    
    console.log("teste temporizador")
  },
}

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonTimer = document.querySelector(".timer")
const buttonStop = document.querySelector(".stop")

buttonPlay.addEventListener("click", startupControl.buttonPlay)
buttonPause.addEventListener("click", startupControl.buttonPause)
buttonStop.addEventListener("click", startupControl.buttonStop)
buttonTimer.addEventListener("click", startupControl.buttonTimer)
