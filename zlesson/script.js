var budget = 100;
var product = 60;

function balance (){
    if(budget>product)
    {
        alert("U heeft genoeg geld!");
        document.getElementById("tekst1").innerHTML = "<h2>U heeft genoeg geld!</h2>";
        document.getElementById("tekst1").style.color = "green";
    }
    else {
        alert("Helaas, te weinig geldt");
        document.getElementById("tekst1").innerHTML = "<h2>Helaas, te weining geldt</h2>";
        document.getElementById("tekst1").style.color = "red";
    }
}