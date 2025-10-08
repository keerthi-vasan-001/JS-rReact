let a=10;
console.log(typeof(a))
let b=10.2
console.log(typeof(b));
var c=true
var c=false
console.log(typeof(c));
var d=null
console.log(d);
var e;
console.log(e) // undefined

//Non primitive data types
// Array
let arr=[1,2,3,4,"keerthi"]// Unlike other prog langs ,we can store mixed data in an array 
console.log(arr)// printing the whole array
console.log(arr.length)//return length of the array
// Normal indexing starts from 0
console.log(arr[0]);

//Object ->key value pair
let vechicle={
    vechicletype:"Car",
    Brand:"Toyota",
    color:"Blue",
    Price:600000,
    fuel:"petrol"
}
console.log(vechicle)//printing the whole object
//Accessing the individual properties using . operator
console.log(vechicle.Brand)
console.log(vechicle.Price)
console.log(5+2*2);

//Post Increment
/*
1.substiute
2.Operation
3.Increment
*/
let num=20;
let num1=num++;

//num1=20++
//num1=20
//num->becames 21
console.log(num,num1) // (21,20)
// In post increment num1 is assigned with num inital value(20) only,after it num is incremented to 21

// Using multiple increments
let a1=20;
let b1= a1++ + a1++
//  b1 = 20++ ->(now a1 is updated to 21 ) + 21++(a1 is updated to 22)
// b1=20+21 =41
console.log(a1,b1) // (22,41)

//pre increment
var p1=20;
var p2=++p1;
console.log(p1,p2)//(21,21)
var p1=20;
var p2=++p1 + ++p1;
// p2= 21 + 22 =43 ,-> p1 is updated to 22
console.log(p1,p2);//(22,43)

// post decrement
var p1=20;
var p2=p1--
// p2 is assgined with 20 first and p1 value is decremented to 19
console.log(p1,p2) //(19,20)
var p1=20;
var p2=p1-- - p1--;
// p2= 20 - 19 =1 ->finally p1 is updated to 18
console.log(p1,p2)//(18,1)

// Pre decrement --a
var p1=20;
var p2=--p1;
console.log(p1,p2)//(19,19)
var p1=20;
var p2=--p1 - --p1;
// p2= 19 - 18 =1, p1=18
console.log(p1,p2)//(18,1)

// Relational Operator
// == ->Equal to
// === -> Strict equal
let a11=10
let b11='10'
console.log(a11==b11)// It checks only visible chars not datatypes
console.log(a11===b11)//It checks both data types and equality




