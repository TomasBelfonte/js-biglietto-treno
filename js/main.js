const inputKm = prompt ("Inserire il numero di Km Da percorrere");

if (isNaN(inputKm)) {
    alert("il valore inserito non è valido");

}

const inputAge = prompt ("inserire l'età del passeggero");

if (isNaN(inputAge)) {
    alert("il valore inserito non è valido");
}

if (inputAge >=18 && inputAge <=65) {
    function tbfunction() {
    var num = (inputKm * 0.21);
    var n = num.toFixed(2)
    document.getElementById("costoBiglietto").innerHTML = n;
    }
}

if (inputAge <18) {
    function tbfunction() {
    var num = ((inputKm * 0.21) * 0.8);
    var n = num.toFixed(2)
    document.getElementById("costoBiglietto").innerHTML = n;
    }
}

if (inputAge >65) {
    function tbfunction() {
    var num = ((inputKm * 0.21) * 0.6);
    var n = num.toFixed(2)
    document.getElementById("costoBiglietto").innerHTML = n;
    }
}