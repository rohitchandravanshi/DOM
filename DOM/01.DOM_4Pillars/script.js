//Pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener


// var a = document.querySelector("h1")
// // console.log(a);


// a.innerHTML = "Changed HTML";
//Same code in one line
// document.querySelector("h1").innerHTML = "Changed HTML";


// var a = document.querySelector("h1")
// a.style.color = "red";
// a.style.backgroundColor = "grey"

var a = document.querySelector("h1")

a.addEventListener("click", function(){
    console.log("hey");
})
