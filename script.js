//reggel
var morningcompliments =["Jó Reggelt!", "Legyen Jó Napod!" , "Bottyán János Technikum 2023"];
//delben
var afternooncompliments =["Szia!","Hello!", "Bottyán János Technikum 2023"];
//este
var nightcompliments =["Szép Álmokat!","Álmodj Szépeket!", "Bottyán János Technikum 2023"];

var monday = [
    ["Alkalmazott matematika", "M107", "Németh Zsolt"],
    ["Idegen nyelv", "B107", "Borosházi Hilda"],
    ["Elektronika", "M201", "Oláh Gábor Sándor"],
];
var thursday = [
    ["Foglalkoztatás I.", "B107", "Borosházi Hilda"],
    ["Elektronika gyakorlat D", "M105", "Peőcz József László"],
    ["Irányítástechnika D", "M105", "Peőcz József László"],
    ["Műszaki dokumentáció", "M2", "Kalocsay Ferencné"],
    ["Irányítástechnika D", "M202", "Ladányi Attila"],
];


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

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, {weekday: 'long'});
}

let d = new Date();
var dateStr = d.toLocaleDateString();
var day = getDayName(dateStr, "hu-HU"); // visszadja a napot
document.getElementById("dayname").innerHTML = day.toUpperCase();

// document.querySelector("#myButton").onclick = function(){
//
//     const h2 = document.querySelector("#myH2");
//     h2.innerText = "Bye World!";
//
// }

let time1 = document.getElementById("current-time");

setInterval(() => {
  let d = new Date();
  time1.innerHTML = d.toLocaleTimeString();
}, 1000)


let time = document.getElementById("datename");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleDateString();
  showGreetings()
}, 1000)

// napszak
function showGreetings() {
    var day = new Date();
    var hr = day.getHours();
    showtext = morningcompliments;
    if (hr >= 12 && hr <= 17) {
        showtext = afternooncompliments;
    } else if (hr >= 17 || hr <= 4) {
        showtext = nightcompliments;
    }
    document.getElementById("txt1").innerHTML = showtext[0];
    document.getElementById("txt2").innerHTML = showtext[1];
    document.getElementById("txt3").innerHTML = showtext[2];
}

// órarend
document.getElementById("orarend1").innerHTML = thursday[0][0] + " (" + thursday[0][1] + ")";
document.getElementById("orarend2").innerHTML = thursday[1][0] + " (" + thursday[1][1] + ")";
document.getElementById("orarend3").innerHTML = thursday[2][0] + " (" + thursday[2][1] + ")";
document.getElementById("orarend4").innerHTML = thursday[3][0] + " (" + thursday[3][1] + ")";
document.getElementById("orarend5").innerHTML = thursday[4][0] + " (" + thursday[4][1] + ")";

//  időjárás
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("temperature").innerHTML = this.responseText + "°C";
        }
    };
    xhttp.open("GET", "http://192.168.43.127/temperature", true);
    xhttp.send();
}, 1000);

setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("humidity").innerHTML = "Páratartalom: " + this.responseText;
        }
    };
    xhttp.open("GET", "http://192.168.43.127/humidity", true);
    xhttp.send();
}, 1000);
