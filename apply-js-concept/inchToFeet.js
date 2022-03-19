function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 144;
var feet = inchToFeet(myInches);
console.log(feet);

var friendInches = 156;
var feet = inchToFeet(friendInches);
console.log('friend feet', feet);

