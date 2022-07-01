//1. different type of variable
var str = ' Hello, world ';
var num = 12;
var bln = true;
console.log( typeof( str));
console.log( typeof(num));
console.log( typeof(bln));

//2. let const and changing let value
const myName = 'MD Jubayer Khan';
let address = 'Bangladesh';
    address = ' Dhaka, Bangladesh'
console.log(address);

//3. simple math between two variable
const num1 = 154;
const num2 = 36;
const plusResult = num1 + num2;
console.log(plusResult);

const minusResult = num1 - num2;
console.log(minusResult);

const multiplacationResult = num1 * num2;
console.log(multiplacationResult);

const divitionResult = num1 / num2;
console.log(divitionResult);

const modulus = num1 % 2;
console.log(modulus); 

//4. comparesion oparetor
var x = 5;
var y = 7;
console.log(x < y,1);
console.log(x >y, 2);
console.log(x == y, 3);
console.log(x != y, 4);
console.log(x <= y, 5);
console.log(x >= y, 6);
console.log(x === y,  7);

//5. condisional
var number1= 4;
var number2 =6;
var number3 =5

if( number1 >2 && number2 >2 ||number3> 4){
    console.log( 'Your condition is right')
};
//6. condition with if else
if (number1 > number2){
    console.log('your condition is true')
}
else{
    console.log('your condition is false')

};

// 7. while loop
var i = 7;
while ( i < 20){
    console.log(i)
    i = i +2
};

// 8. array
let numbers= [12, 14, 5, 9, 33, 15, 20 ];
console.log(numbers);
console.log(numbers.length);
numbers[3] = 22;
console.log( numbers);
var plusArrayValue = numbers[1] + numbers[6];
console.log(plusArrayValue);
numbers.push(100);
numbers.push(200);
console.log(numbers);
numbers.pop();
console.log(numbers);

// 9. for loop

let number= [12, 14, 5, 9, 33, 15, 20];
for(let i = 0; i <= number.length; i++){
};
console.log(number);

// 10. show a number that < 80
let numberss= [12, 140, 50, 90, 33, 150, 200,];
for(const number of numberss ){
    if(number >80){
        console.log(number)
    }
};

// 11. return multiplycation result
function multiplyThreeNum (num1, num2, num3){
    const result = num1 * num2 * num3;
    return result;
};
const finalResult = multiplyThreeNum(5, 10, 8);
console.log(finalResult);

// 12. change value from an object
let person = {
    name: 'MD Jubayer Khan',
    age: 20,
    Dream: 'Be a web-developer',
};
console.log(person);
person.Dream = 'Become a Devops engineer'
console.log(person);
