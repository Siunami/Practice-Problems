var SoccerTeam = [
  {name: 'Matthew', fitness: 78},
  {name: 'Mark', fitness: 65},
  {name: 'Ben', fitness: 43},
  {name: 'Alex', fitness: 81},
  {name: 'Peter', fitness: 67},
  {name: 'Jack', fitness: 72}
]

var Fitness = SoccerTeam.map(function(x){
  var fitness = x.fitness;
  return fitness;
});

console.log(Fitness);
