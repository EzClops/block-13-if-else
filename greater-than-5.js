/*- first we will create two num variables that recieve our values that need comparing
    -once we have both values we can comare them both to our test value 5
    -print the cooresponding boolean value to each comparison*/

let num1 = 0;
let num2 = 0;

function greaterOrEqualThan5(num1, num2){
    if(num1 >= 5 && num2 >=5){return true}
    
    return false;
}

greaterOrEqualThan5(num1, num2);