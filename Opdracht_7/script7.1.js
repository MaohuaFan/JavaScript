var budget = 100;
var product = 60;
function balance() {    
    if(budget > product) {
        document.getElementById("p1").innerHTML = "U heeft genoeg geld!";
        document.getElementById("p1").style.color = "green";
    }
    else {
        document.getElementById("p1").innerHTML = "Helaas, te weinig geldt";
        document.getElementById("p1").style.color = "red";
    }
}