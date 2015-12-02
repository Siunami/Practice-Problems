/* Take a string of letters and numbers and add the numbers together*/
var str = "In 2015 , I want to know how much does iPhone 6 + cost?";

var numbers=str.match(/\d+/g);
var sum = 0;
if (numbers === null){
  console.log(0);
}
for (i = 0; i < numbers.length; i++){
  sum += parseInt(numbers[i]);
}
console.log(sum);
