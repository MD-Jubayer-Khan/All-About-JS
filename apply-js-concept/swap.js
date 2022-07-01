let firstNumber = 45;
let secondNumber = 56;
console.log(firstNumber, secondNumber);

let temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
    console.log(firstNumber, secondNumber);

    // destructuring
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
    console.log(firstNumber, secondNumber);