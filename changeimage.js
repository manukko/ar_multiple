var electric = document.getElementById("electriccar1"); 
electric.style.display = "none";
var oil = document.getElementById("oilcar1");
oil.style.display = "block";
document.addEventListener("click", function(){
  console.log("ciao");
  if(oil.style.display=="block"){
    oil.style.display="none";
    electric.style.display="block";
  }
  else{
    oil.style.display="block";
    electric.style.display="none";
  }
  
});
