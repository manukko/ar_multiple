var electric = document.getElementById("electriccar1"); 
electric.style.visibility = "hidden";
var oil = document.getElementById("oilcar1");
oil.style.visibility = "visible";
document.addEventListener("click", function(){
  console.log("ciao");
  
  if(oil.style.visibility=="visible"){
    oil.style.visibility="hidden";
    electric.style.visibility="visible";
  }
  
  else{
    oil.style.visibility="visible";
    electric.style.visibility="hidden";
  }
  
});
