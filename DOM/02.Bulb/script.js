let bulb = document.querySelector("#bulb");
let btnON = document.querySelector("#on");
let btnOFF = document.querySelector("#off");

btnON.addEventListener(("click"), function(){
    bulb.style.background = "yellow"
})


btnOFF.addEventListener(("click"), function(){
    bulb.style.background = "white"
})