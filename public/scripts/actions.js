let foodHarvestingRate = 20;
let waterHarvestingRate = 26;
let metalHarvestingRate = 50;
let harvestingFood = false;
let harvestingWater = false;
let harvestingMetal = false;

harvestMetalCostPerLevel = 10;

function harvestFood() {
    if (harvestingFood)
    {
        return;
    } 
    harvestMetalCost = harvestMetalCostPerLevel * timesFoodUpgraded;
    if (metalLevel < harvestMetalCost) {
        noMetal(harvestMetalCost - metalLevel);
        return;
    }
    harvestingFood = true;
    metalLevel -= harvestMetalCost;
    moveFarmProgressBar();

    setTimeout(() => {
        foodLevel += foodHarvestingRate;
        harvestingFood = false;
        displayAddedFood();
    }, 10000);
}

function harvestWater() {
    if (harvestingWater)
    {
    return;
    }
    harvestMetalCost = harvestMetalCostPerLevel * timesWaterUpgraded;
    if (metalLevel < harvestMetalCost) {
        noMetal(harvestMetalCost - metalLevel);
        return;
    }
    harvestingWater = true;
    metalLevel -= harvestMetalCost;
    moveWaterProgressBar();
    setTimeout(() => {
        waterLevel += waterHarvestingRate;
        harvestingWater = false;
        displayAddedWater();
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
    displayAddedMetal();
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
  var id = setInterval(frame, 130);

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

function fixFoodSpoiling() {
    if (engineers >= 1) {
        foodRateModifier -= 1;
        isFoodSpoiling = false;
        engineers -= 1;

        var alert = document.getElementById("foodSpoilageAlert");
        alert.style.visibility = "hidden";
    }
}

function fixWaterLeakage() {
    if (engineers >= 1) {
        waterRateModifier -= 1;
        isWaterLeaking = false;
        engineers -= 1;

        var alert = document.getElementById("waterLeakageAlert");
        alert.style.visibility = "hidden";
    }
}