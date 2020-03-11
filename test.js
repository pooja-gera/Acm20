var workshop= document.getElementById("ws");
var button = document.getElementById("work-shop");

button.onclick= function(){
if(workshop.className=="wclicked"){
    //shrink the box
workshop.className="";
button.innerHTML="Show More"
}
else{
    //expand the box 
    workshop.className="wclicked";
    button.innerHTML="Show Less";
}
};