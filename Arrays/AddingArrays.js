/*Insert a range of increasing numbers to add together*/
console.log(range(-9, 10));
/*returns 10*/

function range(a, b, step){
  if (step == null) step = 1;
  var list = [];
  if (step > 0){
    for(var i = a; i <= b; i += step)
      list.push(i);
  } else {
    for (var i = a; i >= b; i += step)
      list.push(i);
  }
  var sum = list.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}
