
function largestElement (numbers){
    const maxNum = Math.max(...numbers);
    return maxNum;
};
const allNum = [12, 54, 2, 34, 75,32, 12];
const maxNum = largestElement(allNum);
console.log(maxNum);