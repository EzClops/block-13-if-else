//create an if else statement that prints multiple different false statements
//if any statements are true print "true"
//We will test the false cases first since they are specific while having the final case be the true one
    //can use a break steatement so that we break out of the function passing the true case

let value = '';
function truthy(value){
    if(typeof(value) === "boolean" && value !== true){
        return console.log("The boolean value false is falsy");
    }else if(value === null){
        return console.log("The null value is falsy"); 
    }else if(value === undefined){
        return console.log("undefined is falsy");
    }else if(value === 0){
        return console.log("The number 0 is falsy (the only falsy number)");
    }else if(value.length === 0){
        return console.log("The empty string is falsy (the only falsy string)");
    }else{return "true"}
}

truthy(value);