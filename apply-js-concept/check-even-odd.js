function isEven(number){
    if( number % 2 ==0){
        return true;
    }
    return false;
};

const myNum = 145;
const isMynumberEven = isEven(myNum);
console.log('my number is even', isMynumberEven);

const herNum = 144;
const isHernumberEven = isEven(herNum);
console.log('my number is even', isHernumberEven);
