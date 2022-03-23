const str = "hello, world";
function reverseString(text){
    let reverse = "";
    for (const letter of text){
        reverse = letter + reverse;
    };
    return reverse;
};
const reversed = reverseString(str);
console.log(reversed);
