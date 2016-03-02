//Function practice with Zoe in class:
var printMe = function(crap){
  console.log(crap);
}
var animals = ['cat','dog','wolf','pig'];
printMe(animals);
var animalLoop = function(monkeyBut){
  for (var i = 0;i<monkeyBut.length; i++) {
    printMe(monkeyBut[i]);
  }
}

animalLoop(animals);

animalLoop(['hi','no','yes']);

var addNums = function(num1, num2){
  // console.log(num1+num2);
  var myResult= num1+num2;
  return myResult;
}
var result=addNums(1,2);
printMe(result);

var subtractNums = function(num1, num2){
  var mySubtract = num1 - num2;
  return mySubtract;
}
var result2 = subtractNums(5,2);
printMe(result2);

var calculator = function(numberone, numbertwo, action){
  var mathStuff = action(numberone, numbertwo);
  return mathStuff;
}

//reference to a function is subtractNums in below:
var result3 = calculator(5,1,subtractNums)
// console.log(5,3,subtactNums)
printMe(result3);

var drinks = ['soda', 'baileys', 'vodka', 'coke'];

var drink2 = function(allTheDrinks){
  return allTheDrinks[1];
}
var serveDrink = function(drinklist, drinkFunction){
  return 'your drink is:' + drinkFunction(drinklist);
}
drink2(drinks);
var myDrink = serveDrink(drinks, drink2);
printMe(myDrink);
