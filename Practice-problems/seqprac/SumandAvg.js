//program that reads 5 Random 2 Digit values then find their sum and the average.

function generateRandomNumber(){
    return Math.round(Math.random() * 89 + 10);
}
let sum = 0;
for(index = 1 ; index <=5 ; index++){
    let number = generateRandomNumber();
    console.log("Number" + index + " = " + number);
    sum += number;
}

console.log("Sum of 5 random nos = " + sum);
console.log("Average of 5 random nos = " + sum/5);