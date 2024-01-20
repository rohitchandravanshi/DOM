let bulb = document.querySelector("#bulb");
let btnON = document.querySelector("#on");

var click = 0

btnON.addEventListener(("click"), function(){
    if(click == 0){
        bulb.style.background = "yellow"
        console.log("clicked");
        click = 1
    }else{
        bulb.style.background = "transparent"
        console.log("clicked again");
        click = 0
    }
 
})


