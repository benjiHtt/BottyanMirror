
//reggel
//var morningcompliments =["Jó Reggelt!", "Legyen Jó Napod!" , "Bottyán János Technikum 2023"]

//delben
//var afternooncompliments =["Szia!","Hello!", "Bottyán János Technikum 2023"]

//este
//var nightcompliments =["Szép Álmokat!","Álmodj Szépeket!", "Bottyán János Technikum 2023"]
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

document.querySelector("#myButton").onclick = function(){

    const h2 = document.querySelector("#myH2");
    h2.innerText = "Bye World!";

}