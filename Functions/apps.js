var getal1 = 1;
var getal2 = 12;
var som = getal1 * getal2;
document.getElementById("p1").innerHTML = som;

function Calculator(num1, num2) {
    var som = num1 + num2;
    document.getElementById("p1").innerHTML = som;
}

function multiplyByFive() {
    var getal = prompt("Geef een getal dat je wilt vermenidvuldigen met 5: ");
    var som = getal * 5;
    document.getElementById("p1").innerHTML = som;
}

function calculateMinutes(sec) {
    var som = sec / 60;
    document.getElementById("p1").innerHTML = som + " minuten";
}

function checkinput() {
    var input = Math.max(9,20);
    alert(input);
}