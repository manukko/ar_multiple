var electric = document.querySelector('#electriccar').style.display = "none";
var oil = document.getElementById("#oilcar").style.display = "block";
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
