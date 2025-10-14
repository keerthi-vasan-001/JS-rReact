// Explicit conversion
console.log(10+Number('10')) //20
console.log(Number('')) //0
console.log(Number('abc')) //NaN
console.log(Number(undefined)) //NaN
console.log(Number([])) //0
console.log(Number([1,2])) //NaN
console.log(Number({})) //Nan
console.log(String(10)) //'10'