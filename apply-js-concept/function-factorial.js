function getFactorial(number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    };
    return factorial;
}
var myFactorial = getFactorial(7);
console.log('my factorial number is', myFactorial);
