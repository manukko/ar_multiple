var electric = document.querySelector('#electriccar').style.visibility = "hidden";
var oil = document.getElementById("#oilcar").style.visibility = "visible";
document.addEventListener("click", function(){
  console.log("ciao");
  if(oil=="visible"){
    oil="hidden";
    electric="visible";
  }
  else{
    oil="visible";
    electric="hidden";
  }
  
});
