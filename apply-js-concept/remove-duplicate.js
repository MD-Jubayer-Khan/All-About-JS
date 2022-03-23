const numbers = [12, 25,121,31,13,12, 52,15, 12, 13, 52,31,25,55, 2, 5, 8, 3];
function duplicateNumber (numbers){
    const unique = [];
    for (const element of numbers){
        console.log(element);
        if(unique.indexOf(element) == -1);
        unique.push(element);
    };
    return unique;
};
const uniqueNumber = duplicateNumber(numbers);
console.log(uniqueNumber);