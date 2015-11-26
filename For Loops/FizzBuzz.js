for (number=1; number<101; number++){
  if(number % 3 == 0 && number % 5 != 0){
    console.log(number + "Fizz");
  }else if (number % 5 == 0 && number % 3 != 0){
    console.log(number + "Buzz");
  }else if (number % 3 == 0 && number % 5 == 0){
    console.log(number + "FizzBuzz");
  }else{
    console.log(number);
  }
}
/*The FizzBuzz Challenge
For an interval 1-100,
If the number is divisible by 3, print Fizz
If the number is divisible by 5, print Buzz,
If the number is divisible by both, print FizzBuzz
*/
