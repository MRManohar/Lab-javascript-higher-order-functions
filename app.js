//initializing foods array
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
// declaring modifiedFood array
let modifiedFood = [];
document.write("<--------------- Progression 1 ----------------------->" + "<br>");
// Preogression 1 using slice function
modifiedFood = foods.slice(1, foods.length - 1);
document.write(modifiedFood + "<br>");
document.write("<br>" + "<--------------- Progression 2 ----------------------->" + "<br>");
// Preogression 2 using splice function
foods.splice(1, 0, "burger", "noodles", "icecream");
modifiedFood = foods;
document.write(modifiedFood + "<br>");
document.write("<br>" + "<--------------- Progression 3 ----------------------->" + "<br>");
// initializing numberArray
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
document.write("isEven()----------------->" + "<br>");
// defining  isEven function
function isEven(numberArray) {
    let evenNumbers = numberArray.filter(function (num) {
        if (num % 2 == 0)
            return num;
    });
    return evenNumbers;
}
document.write(isEven(numberArray));
document.write("<br>" + "isPrime()----------------->" + "<br>");
// defining isPrime Function
function isPrime(numberArray) {
    let primeNumbers = numberArray.filter(function (num) {
        let flag = 0;
        for (let i = 2; i < num; i++) {
            flag = 0;
            if (num % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            return num;
    });
    return primeNumbers;
}
document.write(isPrime(numberArray));
document.write("<br>" + "<--------------- Progression 5 ----------------------->" + "<br>");
// defining the isEven function by using Lamda Expression
function isEven(numberArray) {
    let anotherEvenNumbers = numberArray.filter(num => (num % 2) === 0)
    return anotherEvenNumbers;
}
document.write(isEven(numberArray));