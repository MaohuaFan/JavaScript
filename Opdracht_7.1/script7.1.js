var budget = 100;
var product = 60;
let payment;
if (budget >= product)    {
    payment = "U heeft genoeg geld!";
}
else    {
    payment = "Helaas, te weinig geldt";
}
document.getElementById("balance").innerHTML = payment;

