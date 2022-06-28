/*
*/
const fizzBuzz = n => {
    let arry = [];
    
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            arry.push("FizzBuzz");
        } else if (i % 3 == 0){
            arry.push("Fizz");
        } else if (i % 5 == 0){
            arry.push("Buzz");
        } else {
            arry.push(`${i}`);
        }
    } 
    
    return arry;
}