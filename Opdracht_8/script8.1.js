
function multiply() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    var ans = getal1 * getal2;
    document.getElementById("answer").innerHTML = "Het antwoord is " + ans;
}

function minus() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    var ans = getal1 - getal2;
    document.getElementById("answer").innerHTML = "Het antwoord is " + ans;
}

function add() {
    var getal1 = parseInt(document.getElementById("getal1").value, 10);
    var getal2 = parseInt(document.getElementById("getal2").value, 10);
    var ans = getal1 + getal2;
    document.getElementById("answer").innerHTML = "Het antwoord is " + ans;
}

function devide() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    var ans = getal1 / getal2;
    document.getElementById("answer").innerHTML = "Het antwoord is " + ans;
}
