var electric = document.getElementById("electriccar1"); 
electric.setAttribute('visible', false);
var oil = document.getElementById("oilcar1");
oil.setAttribute('visible', true);
document.addEventListener("click", function(){
  console.log("ciao");
  
  if(oil.getAttribute('visible') === true){
    oil.setAttribute('visible', false);
    electric.setAttribute('visible', true);
  }
  
  else{
    oil.setAttribute('visible', true);
    electric.setAttribute('visible', false);
  }
  
});
