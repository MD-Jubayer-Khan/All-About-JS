const str = "hello, world. I'm exploring string reverse";
function reverseString(text){
    let reverse = "";
    for (const letter of text){
        reverse = letter + reverse;
    };
    return reverse;
};
const reversed = reverseString(str);
console.log(reversed);