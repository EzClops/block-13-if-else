/*-We will create 4 varialbes that contain either numbers or strings
    -once we recieve the variables, we will compare both sets to eachother
    -if either pair is true we will output a true 
        -it takes both pair compairsons output to be false for the entier comparison to be false
    -we will create 2 variables inside the function to compare each set of varialbes before the if else statements to reduce redundancy in code
*/

let param1A = "";
let param1B = "";
let param2A = "";
let param2B = "";

function pairAndCompare(param1A, param1B, param2A, param2B){
    let value1 = (param1A === param1B);
    let value2 = (param2A === param2B);
    if (value1 === true || value2 === true){return true}

    return false;
}

pairAndCompare(param1A, param1B, param2A, param2B);