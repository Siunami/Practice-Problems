/* Aa tip calculator that takes the price of the meal and a description of the
service level to calculate the final bill*/
var low = ["bad, dissatisfactory"]
var medium = ["good", "nice"]
var high = ["excellent", "great"]
/*^^^Would like to allow a large list of possible options for each level of
description. Need to figure out how to take a large list of descriptions and
turn them into individual strings.*/

function tip (cost, service) {
  for (var i=0; l=low.length, l>i; i++){
    if (low[i] === service){
    return cost + cost * .05;
    }
  }
  for (var i=0; l=medium.length, l>i; i++){
    if (medium[i] === service){
      return cost + cost * .10;
    }
  }
  for (var i=0; l=high.length, l>i; i++){
    if (high[i] === service){
      return cost + cost * .15;
    }
  }
  console.log("How was the service?");
}

console.log(tip(60, "excellent"));
