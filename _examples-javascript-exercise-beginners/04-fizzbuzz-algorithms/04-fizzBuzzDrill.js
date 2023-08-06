/* Instructions:
Write a function named isFizzBuzz which checks if a parameter is divisible by any numbers in an array of numbers.

Function: isFizzBuzz
Parameters:
  arg: an integer that will be divided by another number to determine if it is evenly divisible.
  numsList: an array of two numbers. These will be used to divide arg, determining if arg is evenly divided by one, both, or neither.

Returns:
  If arg is divisible by the first number numsList, print => Fizz
  If arg is divisible by the second number in numsList, print => Buzz
  If arg is divisible by both the first and the second numbers in numsList, print => FizzBuzz
  If arg is NOT divisible by 3 or 5 print => given Input Number/Value
  If arg is a type other than Number/Value print => 'Nan - Not a Number! Please Input Number'
*/

function isfizzBuzz(arg){
  var argMod3 = (arg % 3 == 0);
  var argMod5 = (arg % 5 == 0);
  if (typeof(arg) !== 'number') {
    return 'Nan - Not a Number! Please Input Number';
  }
  else if (!argMod3 && !argMod5) {
    return arg;
  }
  else if (argMod3 || argMod5) {
    if (argMod3 && argMod5){
      return "FizzBuzz";
    }
    else if (argMod3 && !argMod5) {
      return "Fizz";
    }
    else if (argMod5 && !argMod3)
    return "Buzz"
  }
}
