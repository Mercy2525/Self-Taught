//Operators
food= Number (prompt('how much was the food?'));

tipPercentage= Number (prompt('tip%?'))/100;
tipAmount= food * tipPercentage;

console.log(tipAmount)
//alert(tipAmount)

total= (food+ tipAmount);
console.log('tipAmount', tipAmount)
console.log('total',total);