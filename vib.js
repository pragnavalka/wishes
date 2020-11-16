var pics = [
    "Images/AR1.gif", 		//0
    "Images/AR2.gif", 		//0
    "Images/AR3.gif", 		//0
    "Images/AR4.gif", 		//0
    "Images/AR5.gif", 		//0
    
]

var btn = document.querySelector("button")
var img = document.querySelector("img")
var counter = 0

btn.addEventListener("click", function(){
	if(counter === 5){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1
});