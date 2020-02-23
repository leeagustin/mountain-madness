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
    }, 10000);
    clearFarmBar();
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


function moveFarmProgressBar(){
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("farmBar");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        elem.style.width = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function moveMetalProgressBar(){
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("metalBar");
      var width = 1;
      var id = setInterval(frame, 150);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          elem.style.width = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

  function moveWaterProgressBar(){
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("waterBar");
      var width = 1;
      var id = setInterval(frame, 240);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          elem.style.width = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }