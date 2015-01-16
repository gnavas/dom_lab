window.addEventListener("load",function(){

//1. change the greeting from "Hello, World!" to "Hello, Planet Earth!".//
var greetingF = document.getElementById("greeting");
greetingF.innerHTML = "Hello, Planet Earth!";
console.log(greetingF);
//2. set the `backgroundColor` of each `<li>` to `yellow`.//
var colorY = document.getElementsByTagName("li");
console.log(colorY);
for (var i = 0; i < colorY.length; i++) {
	var yel = colorY[i];
	yel.style.backgroundColor = ("yellow");
};
//3. add the class of `selected` to an `<li>` when it is clicked.
function y() {
	event.target.setAttribute("class","selected");
	document.querySelector("img").setAttribute("src","./images/"+event.target.innerHTML+".jpeg");
}
function g() {
	console.log("check");
	var n = document.getElementsByTagName("li");
	for (var i = 0; i , n.length; i++) {
		gan = n[i];
		gan.setAttribute("class","");
		document.querySelector("img").setAttribute("src","./images/panic.jpeg");
	};
}

var x = document.getElementsByTagName("li");
for (var i = 0; i < x.length; i++) {
	var z = x[i];
	z.addEventListener("click",y);
}
//4. change the image to be the last clicked food item.//
//5.
var but = document.getElementById("reset");
console.log(but);
but.addEventListener("click",g)


})
