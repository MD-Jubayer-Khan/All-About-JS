// do function factorial using for loop

function getFactorial(number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    };
    return factorial;
}
var myFactorial = getFactorial(7);
console.log('my factorial number is', myFactorial);

// do function factorial using while loop
function getFact (num){
    let fact = 1;
    let i = 1;
    while (i <= num){
        fact = fact * i;
            i++
    };
    return fact
};
const myNum = getFact(6);
console.log(myNum);