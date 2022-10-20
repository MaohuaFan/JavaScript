var getal = 0;

function clicker() {
    getal = getal + 1;
    
    if(getal >= 10) {
        getal = 0;
    };
    document.getElementById("p1").innerHTML = "Het getal is " + getal;
};