function buyApple(taka){
    console.log('Apple er jonno diche ', taka);
    console.log('Mama apple dan.')
    var applePrice = 10;
    var appleQuantity = taka / applePrice;
    return appleQuantity;

}
var money = 220;
var apple = buyApple(money);
console.log('Here is your', apple, 'apple');
