
document.getElementById("one").addEventListener("click", displayDate);
document.getElementById("two").addEventListener("mouseout", myFunction);
document.getElementById("three").addEventListener("mouseover",event);
document.getElementById("four").addEventListener('mouseleave',myscroll);
document.getElementById("five").addEventListener('dblclick',alertUser);

//div 1
function displayDate() {
    this.innerHTML=Date();
}

//div2
function myFunction() {
    this.style.backgroundColor = "green";
}

//div3
function event () {
    this.style.backgroundColor = "gold";
}

//div4
function alertUser () {
    alert("Im just alerting you");
}

//div5
function myscroll (){
    this.innerHTML = "word changed";
}
