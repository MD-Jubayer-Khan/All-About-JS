const number = [12, 15, 25, 5, 64,33, 45];
let sum = 0;
for(let i = 0; i < number.length; i++){
    const element = number[i];
    sum = sum + element;
    
};
console.log(sum);

// do sum with function

function arrayTotal (numbers){
    let sum = 0;
    for( let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    };
    return sum
}
const total = arrayTotal([12, 15, 25, 5, 65,33, 45]);
console.log(total);