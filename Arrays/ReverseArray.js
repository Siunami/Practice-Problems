var values = [1, 2, 3, 4, 5];
var reverse = [];

reverseArray(values);

function reverseArray (array) {
  for (i = array.length - 1; i >= 0; i--){
    reverse.push(values[i]);
  }
  console.log(reverse);
}
