var suma = document.getElementById("sum");
var resta = document.getElementById("subs");
var reset = document.getElementById("reset");
var numero = document.getElementById("number");

suma.addEventListener("click", function () {
  numero.innerHTML = parseInt(numero.innerHTML) + 1;
});

resta.addEventListener("click", () => {
  if (parseInt(numero.innerHTML) > 0) {
    numero.innerHTML = parseInt(numero.innerHTML) - 1;
  }
});

reset.addEventListener("click", ()=>{
    numero.innerHTML = "0";
});