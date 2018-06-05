window.onload = function start() {
    slide();
}


function slide(){

var next1 = document.getElementById("next");
var prev1 = document.getElementById("prev");
var ulist = document.getElementById("slidelist").lastElementChild;
var ulist1 = document.getElementById("slidelist").firstElementChild;
var slides = document.querySelectorAll("li");

for(var i=0; i<3; i++){
slides[i].style.display = 'none';
}

slides[0].classList.add("active");

document.getElementsByClassName("active")[0].style.display = "block";

function next() {
	var current = document.getElementsByClassName("active");
    current[0].classList.add("oldActive");

	if(Object.is(current[0] , ulist)){
		slides[0].classList.add("active");

	}
	else{
		var newSlide = current[0].nextElementSibling;
		newSlide.classList.add("active");
	}
	
    document.getElementsByClassName("oldActive")[0].style.display = "none";
	document.getElementsByClassName("oldActive")[0].classList.remove("active");
	document.getElementsByClassName("oldActive")[0].classList.remove("oldActive");
	for(var i=0; i<3; i++){
    slides[i].style.display = 'none';
    }
	document.getElementsByClassName("active")[0].style.display = "block";
}

function prev() {
	var current = document.getElementsByClassName("active");
    current[0].classList.add("oldActive");

	if(Object.is(current[0] , ulist1)){
		slides[2].classList.add("active");

	}
	else{
		var newSlide = current[0].previousElementSibling;
		newSlide.classList.add("active");
	}
	
    document.getElementsByClassName("oldActive")[0].style.display = "none";
	document.getElementsByClassName("oldActive")[0].classList.remove("active");
	document.getElementsByClassName("oldActive")[0].classList.remove("oldActive");
	for(var i=0; i<3; i++){
    slides[i].style.display = 'none';
    }
	document.getElementsByClassName("active")[0].style.display = "block";
}


next1.addEventListener('click' , function() {
	next();
});


prev1.addEventListener('click' , function() {
	prev();
});


window.setInterval(next , 3000);

}