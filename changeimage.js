var electric = document.getElementById("electriccar1").style.display = "none";
var oil = document.getElementById("oilcar1").style.display = "block";
document.addEventListener("click", function(){
  console.log("ciao");
  if(oil=="block"){
    oil="none";
    electric="block";
  }
  else{
    oil="block";
    electric="none";
  }
  
});
