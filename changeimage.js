var i=0;
var electric = document.getElementById("electriccar1"); 
var oil = document.getElementById("oilcar1");
var co2 = document.getElementById("co21"); 
var fuelreserves = document.getElementById("fuelreserves1");

document.addEventListener("click", function(){
  console.log("ciao");
  i=(i+1)%4;
  
  
  if(i===1){
    fuelreserves.setAttribute('visible', true);
    co2.setAttribute('visible', false);
    oil.setAttribute('visible', false);
    electric.setAttribute('visible', false);
  }
  
  if(i===2){
    fuelreserves.setAttribute('visible', false);
    co2.setAttribute('visible', true);
    oil.setAttribute('visible', false);
    electric.setAttribute('visible', false);
  }
  if(i===3){
    fuelreserves.setAttribute('visible', false);
    co2.setAttribute('visible', false);
    oil.setAttribute('visible', true);
    electric.setAttribute('visible', false);
  }
  
  if(i===0){
    fuelreserves.setAttribute('visible', false);
    co2.setAttribute('visible', false);
    oil.setAttribute('visible', false);
    electric.setAttribute('visible', true);
  }
  
  
});
