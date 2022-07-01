function milesToKm(miles){
    var km = miles / 1.60934;
    return km;
};
var distanceInMiles = 18;
var km = milesToKm(distanceInMiles);
console.log( 'distance in', km, 'kilometer');
