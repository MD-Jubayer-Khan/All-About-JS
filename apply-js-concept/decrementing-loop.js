// decrementing usinf for loop
function getFactorial(number){
    let factorial = 1;
    for ( i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
const myNum = getFactorial(6)
console.log(myNum);

// decrementing usinf while loop

function getFact(num){
    let fact = 1;
    let i = num;
    while(i >= 1){
        fact = fact * i;
        i--;
    }
    return fact;
}
const myNumber = getFact(4);
console.log(myNumber);
