/*-First we will create two variables that take in the two numbers so we can put them in a sum variable to test our if else if else statements
    -once we have our sum, we create the 5 different if statements 
    -these statements will return console.log so that we don't need to test the other cases once true
        -console.log will print a string
    -if all cases fail we can console.log to say print a real number
     */
let num1 = 0;
let num2 = 0;
function numberLine(num1, num2){
    let sum = num1 + num2;
    if(sum < -1000){return console.log(`${sum} is less than -1000`)}
    else if(sum < 0){return console.log(`${sum} is a negative number`)}
    else if(sum === 0){return console.log(`${sum} is equal to 0`)}
    else if(sum > 0 && sum <= 100){return console.log(`${sum} is greater than 0`)}
    else if(sum > 100){return console.log(`${sum} is greater than 100`)}
    
    return console.log("Input a valid number");
}

numberLine(num1, num2);