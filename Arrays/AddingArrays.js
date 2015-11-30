console.log(range(1,6));

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
  return list;
}
