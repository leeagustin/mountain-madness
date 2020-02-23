let foodHarvestingRate = 20;
let waterHarvestingRate = 26;
let metalHarvestingRate = 50;
let harvestingFood = false;
let harvestingWater = false;
let harvestingMetal = false;

function harvestFood() {
  if (harvestingFood)
    return;
  harvestingFood = true;
  moveFarmProgressBar();

  setTimeout(() => {
    foodLevel += foodHarvestingRate;
    harvestingFood = false;
    displayResults();
  }, 10000);
}

function diplayResults(){
  document.getElementById("farmProgress").innerHTML = "done :)"
}

function harvestWater() {
  if (harvestingWater)
    return;
  harvestingWater = true;
  moveWaterProgressBar();
  setTimeout(() => {
    waterLevel += waterHarvestingRate;
    harvestingWater = false;
  }, 13000);
}

function harvestMetal() {
  if (harvestingMetal)
    return;
  harvestingMetal = true;
  moveMetalProgressBar();
  setTimeout(() => {
    metalLevel += metalHarvestingRate;
    harvestingMetal = false;
  }, 15000);

}


function moveFarmProgressBar() {
  var elem = document.getElementById("farmProgress");
  var width = 1;
  var id = setInterval(frame, 100);
  function frame() {
    if (width == 100 ){
      elem.style.color = "black";
      elem.style.fontWeight = "bold"
      elem.innerHTML = "+"+foodHarvestingRate;
      setTimeout(() => {      
      elem.style.width = 0;
      elem.style.color = "grey"; 
      elem.innerHTML = "...";
      clearInterval(id);},1500);
    }else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

function moveMetalProgressBar() {
  var elem = document.getElementById("metalProgress");
  var width = 1;
  var id = setInterval(frame, 150);

  function frame() {
    if (width >= 100) {
      elem.style.color = "black";
      elem.style.fontWeight = "bold"
      elem.innerHTML = "+"+metalHarvestingRate;
      setTimeout(() => {      
      elem.style.width = 0;
      elem.style.color = "grey"; 
      elem.innerHTML = "...";
      clearInterval(id);},1500);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

function moveWaterProgressBar() {
  var elem = document.getElementById("waterProgress");
  var width = 1;
  var id = setInterval(frame, 240);

  function frame() {
    if (width >= 100) {
      elem.style.color = "black";
      elem.style.fontWeight = "bold"
      elem.innerHTML = "+"+waterHarvestingRate;
      setTimeout(() => {      
      elem.style.width = 0;
      elem.style.color = "grey"; 
      elem.innerHTML = "...";
      clearInterval(id);},1500);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}