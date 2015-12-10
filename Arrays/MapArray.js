var SoccerTeam = [
  {name: 'Matthew', fitness: 78},
  {name: 'Mark', fitness: 65},
  {name: 'Ben', fitness: 43},
  {name: 'Alex', fitness: 81},
  {name: 'Peter', fitness: 67},
  {name: 'Jack', fitness: 72}
]

var sum = 0;

var fitness = SoccerTeam.map(function(x){
  var fitness = x.fitness;
  return fitness;
});

console.log(fitness);

for( var i = 0; i < fitness.length; i++ ){
    sum += parseInt(fitness[i], 10 );
}
var average = sum/fitness.length;
console.log(average);

console.log("You're teams average fitness level is " + average + ".");
