
function multiply() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    var som = getal1 * getal2;
    if (getal1 == 0 || getal2 == 0) {
        document.getElementById("ans").innerHTML = "Het getal is te laag";
    }
    else {
        document.getElementById("ans").innerHTML = "Het antwoord is " + som;
    }
}

function minus() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    var som = getal1 - getal2;
    if (getal1 == 0 || getal2 == 0) {
        document.getElementById("ans").innerHTML = "Het getal is te laag";
    }
    else {
        document.getElementById("ans").innerHTML = "Het antwoord is " + som;
    }
}

function add() {
    var getal1 = parseInt(document.getElementById("getal1").value, 10);
    var getal2 = parseInt(document.getElementById("getal2").value, 10);
    var som = getal1 + getal2;
    if (getal1 == 0 || getal2 == 0) {
        document.getElementById("ans").innerHTML = "Het getal is te laag";
    }
    else {
        document.getElementById("ans").innerHTML = "Het antwoord is " + som;
    }
}

function devide() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    var som = getal1 / getal2;
    if (getal1 == 0 || getal2 == 0) {
        document.getElementById("ans").innerHTML = "Het getal is te laag";
    }
    else {
        document.getElementById("ans").innerHTML = "Het antwoord is " + som;
    }
}