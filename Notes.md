# 6 0ct 2025
## History of Javascript
**Breandan Eich** deveolped js.<br>
Name changes -> Mocha(1995)->Livescript(1996)->Js(10 days)1997-> ECMA Standard established (ECMA international)<br>
1999->ES3 comes out and IES-Microsoft is all the rage (error handling)<br>2000-2005 -> AJAX gain popularity in apps<br>
2009->DOuglas Crocford came up with the idea of OOP and ESS came out (JSON Supports)<br>2015->ES6/ECMAScrpit 2015 comes out,it has most syntatic sugar.<br>
![afnkaf](1759719019621.jpg)<br>
# Module 2
It is a interpreted prog language that means it follows line by line execution.<br> It is dynamically typed language and weakly typed language ( eg: a=10 and we can reassign a="STR")<br>
It is asynchronous prog language.It can be achieved by using async,wait,callback etc...
# Oct 7 2025
- It is a event driven prog lang(i.e clicking a button to show some actions or events )<br>
- It is a single Page application (i.e If we perform any actions The page will not reload,it will give the content inside the page)
- It is a object based scripting language
# Module 3- working of Js in browser and in with HTML
The V8 engine in chrome browser converts out code into machine language and processing and gives the result(client side), in server side(Node js)
- The script tag must be at the end of the body tag because it will load all the tags and to make them dynamic
- console.log()->method shows error and output in console
- Document.write() method directly writes the content in the HTML page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>make dynamic</h1>
    <script>
      //alert("hi")
      setTimeout(() => {
      document.querySelector("h1").innerHTML = "Im changed";
      },4000 )
      document.write("Basics of Javascipt")
    </script>
  </body>
</html>
```
# Module 4 - Intro to Prog lang and fundamentals of Js
The prog lang is lang used to communicate with the computer.
## Variable
- It is a container used to store the value (a=10)
- Three types of var declaration **let**,**var**,**const**
- keyword var_name= value;
```js
let username="keerthivasan";
var email="keerthimukesh1803@gmail.com";
const password="1234";
```
# Module 5 - Keywords
## condition based
- if,else,switch
## loop
- do,while,for,function
class - is used to create a template 
delete - is used to delete a object

## Identifier Rules
- All js variables must be identified with unique names
- Name must begin with a letter,can also begin with '$' and _,Names are case sensitive
**No internal and external scripting must be linked**<br>
Types of Casing
- Camel case -> newEmployeeId
- Pascal case -> NewEmployeeId
- Under case -> New_Employee_Id
# Module - 6 Var,Let,Const difference
```js
// var age=100; Declaration and initialization
var age;// Declaration
age=50;//Initalization or assigning
console.log(age);
var age=40 //Redeclaration
age=21//Reassign or Reinitalize

// let  newAge=100; Declaration and initialization
let newAge;// Declaration
console.log(newAge);// output -> "undefined"
newAge=150;//Intitalize
//let newAge=30; Redeclare is not possible
newAge="Keerthi"; // Reassign

// const name; is not possible both declaration and intialization performed together
const named="keerthi";
// const name="vasan";redeclare is not possible;
//named="mukesh";// error not shown here but reassign is also not possible
//console.log(named);
// Printing Statements
//alert(named)
document.write(newAge);
document.writeln("Vasan");
//confirm("named");// The difference is it has two options both ok and cancel

let userage=prompt("Enter your age")// This is used to take input from the user
document.write(userage)
console.error(123);
console.clear();// To clear the console
```
# Oct 8 2025
# Module 7 - Datatypes
## Primitive
- Number,String,Boolean,Null,Undefined
## Non Primitive
- Object ->(Array,Object,Function,Date)
```js
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
```
# Module 8 -Operators
- add,sub,mul,div,modulus,increment,decrement
# Module 9 - Pre and post increment on another variable

```js
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
```
# Module 9 - Assignment and relational operators
```js
let a=10
let b+=a; // b=b+a
console.log(a,b)// (10,20)
// Relational Operator
// == ->Equal to
// === -> Strict equal
let a11=10
let b11='10'
console.log(a11==b11)// It checks only visible chars not datatypes
console.log(a11===b11)//It checks both data types and equality
```
# Module 11 - Logical Operators
- &&->both connditon true -> true
- ||-> one condition true ->true
- ! -> !(true) = false ,, !(false)->true

# OCt 14
# Module12- String and Template String
```js
let str="keerthi"
let str1="vasan"
console.log(str+str1) // keerthivasan
console.log(str+str1+"is learning javascript");

// Template String or Template literal (` `)->not single quotes it is backspace 
let a1=`javascript`
let a2=`${a1} is a scripting language`
console.log(a2)
let num1=5;
let num2=2;
console.log(`${num1} * ${num2} = ${num1*num2}`) // for evaluating expression also
```
# Module 13-Type Conversion
```js
// Implicit conversion(Auto conversion)
str="45"
num=100
console.log(str+num) // it 45100 (string concat) data tyep->string
// String 
console.log("Hi"+true) // Hitrue
console.log("Hi"+undefined) // Hiundefined
console.log("Hi"+null) // Hinull
console.log("Hi"+[1,2]) //Hi1,2
// String + anything ===anything+string

//Number
console.log(10+true) // 11
// true-1,false-0
console.log(10+undefined) // Nan ->Not a Number
console.log(10+null) // 10+0 -> 10
console.log(10+[1,2]); // 101,2 (String)
console.log(10+{}) // 10[object object]
console.log(typeof(10+'')) // string 

//Boolean
console.log(10 + true) //11
console.log(true+undefined)//Nan
console.log(true+null) // 1+0 =1
console.log(true+[1,2]) // true1,2 (String)
console.log(true+{})// true[object object]
console.log(true+'')// true

//operations 
console.log(10+'2') //102
console.log(10-'3') //7
console.log(10*'3') //30
console.log(10-'abc')//NaN


// Explicit conversion
console.log(10+Number('10')) //20
console.log(Number('')) //0
console.log(Number('abc')) //NaN
console.log(Number(undefined)) //NaN
console.log(Number([])) //0
console.log(Number([1,2])) //NaN
console.log(Number({})) //Nan

//Boolean
console.log(Boolean(0)) // false
// Boolean values of null,undefined,0," "-> false
console.log(Boolean([]))// true
// boolean value of other than zero is true
```
# Module 14 - Control Statements

## Conditional Statements
- if ,if else, if else if else,

Very basic concepts 

# Module 15- If elseif else
Basic example of is else if else (which is used for mutliple scenarios)

# Module 16- switch
Normal siwtch expression as same for all
 Importance of break statement in switch 
```js
let day="mon"
switch(day)
{
    case "mon":
    case "tue":
    case "wed":
    case "thur":
    case "fri": console.log("weekday");
    break;
    case "sat":
    case "sun": console.log("weekend");break;
    default: console.log("wrong input");break;
}
//The mutiple choice based options are classified under same switch statement
```
# Module 17 - Nested if else,ternary operator
 Basic examples 

# Oct 21
# Module 18-looping Statement
 for loop in module 18
# Module 19- while loop
first checks the condition and execute the statements if it is true
```js
let i=5
while(i>0) // condition check
{
  console.log(i)// statement
  i--; // decrement or increment opeartion 
}
// 5 4 3 2 1 

// example  program sum of digits in a number -> 1234 ->1+2+3+4=10
let num=1234
sum=0
while(num>0)
{
  let rem=(num)%10; // extracting the unit digit
  sum+=rem;
  num=parseInt(num/10) // reducing the unit digit,i.e dividing the number by 10
}
console.log(sum)
```
# Module 20 - Do while loop
It executes the statements atleast one time if the condition is even false
break -> used to terminate the loop 
continue=> used to skip the iteration

# Module 21 - Function 
A js function is a block of JS code that performs a task or calcualtes a value.
```js
let person1={
    name1:"John",
    Age:40
}
function printusername(uname,uage){

    //console.log("Hello Everyone",person1.name1,person1.Age)
    console.log(`Hi ${uname} , age is ${uage}`)
}
printusername("Keerthi",12)
printusername("Mukesh",13)
printusername("SK",41)
printusername("SK") // If we dont give age the value is undefined
```
# Module 22 - Defalut parameter and default value
We are assigining the value for a argument when it is not initialised or the value is passed
```js
function printusername(uname="Johnny",uage=18){

    //console.log("Hello Everyone",person1.name1,person1.Age)
    console.log(`Hi ${uname} , age is ${uage}`)
}
printusername("SK") // Hi SK,age is 18
printusername() // Hi Johnny ,age is 18

// Default value for variable
let empId="12345"
let newId=empId || "56789"
console.log(newId) // 12345
// If empId is not intialised with any value  then value is 56789
```

# Oct 30
# Module 23-Return and Non Return Type
```js
// Return Type
function findRectangleArea(l,b)
{
    return l*b //return keyword must be the last statement in a return function
}
Area=findRectangleArea(10,20) // Storing the value from return function
console.log(Area) // Printing the value
function findCubicArea(num)
{
    return (num*3,"sk") // important note: If we return multiple values in return statement
    // It will always return the last value  
    // o/p=> sk
}
let val=findCubicArea(4)
console.log(val) //sk

//Non return type
function nameprint(name)
{
    console.log("Non return type: ",name);
}
nameprint("Keerthi")
// It does not return any value ,it will only console.log() or updating the values like void method in java
```
# Module 24 - Var let Const Scope difference
```js
// var -> function scope
function outerfunction()
{
    if(true)
    {
        var functionvar="Im a variable"
        console.log(functionvar)
    }
    console.log(functionvar) // We can also access the variable declared with var keyword within the function scope

}
outerfunction()

// let,const -> blockscope 
function blockscope()
{
    if(true)
    {
        let blockvar="I am a block scope variable"
        const blockvar1="I am a const var"
        console.log(blockvar) 
        console.log(blockvar1)
        // Within the block only the variables are acessed 
    }
    console.log(blockvar); // ReferenceError: blockvar is not defined
    console.log(blockvar1); // ReferenceError: blockvar1 is not defined
}
blockscope()

var a=10
let b=20
const c=30
function accesslocalvar()
{//the variables inside the function is local variable
  var a=100
 let b=200
 const c=300
console.log(a+b+c) 
}
accesslocalvar() //600
function accessglobalvar()
{
    console.log(a+b+c)
}
accessglobalvar()// 60 ,because the function will check for the local variables and if it is not found
// It will automatically acccess the global variables

// Scope Chain : The process of accessing the variables within the block and if it is not found search by upper scope 
```
# Module 25 - Functions
- Named function
- Anonymous function 
- Arrow function
- Higher Order Function 
- Callback function
```js
//Named function
function Keerthi(){
    console.log("Keerthivasan")

}
Keerthi()

//Anonymous function
let age=function(uage) // assigning variable name with function keyword
{
    console.log("Age is",uage)
}
age(21) // calling the function with variable name

//Arrow function ()=>
// This function is mainly for single line execution of a function
let arrowfunc=()=> console.log("This is a arrow function")
arrowfunc()
//Mainly the arrow function is used for minimizing the function interms of line of code
// pass a name to the function and return the name
//Eg:
let printname=uname=> uname //by arrow funciton
storedname=printname("SK")
console.log(storedname)

//Higher Order function and Callback function
function function1(){
    console.log("I am higher Order function")
}
function function2(){
    console.log("I am callback function")
}
//The function which itself passed as a parameter is callback function and the function which recieves another function is known as Higher Order Function
function1(function2()) // o/p -> I am callback function
                                //I am a Higher Order Function
// Because always the parameter function is executed first

//another example
function add(callback,num1,num2){
    console.log(num1+num2)
    sub(65,55)
}
function sub(num1,num2){
    console.log(num1-num2)
}
add(sub,10,20)
```
# Module 26- Hoisting
Before the code execution all the declarations of variables and functions are moved to the top internally that is known as Hoisting
- Variable declaration Hoisting
```js
//Internally declaration starts before execution so,var a -> for only declared variables the value is undefined
// For var 
console.log(a)99 // o/p->undefined
var a=10
console.log(a) // 10

//For let 
console.log(b) // Reference Error: cannot access 'b' before initiaization
let b=11
//Because the let and const variables are into temporary dead zone .so error is thrown

// For const
console.log(c)
const c=12 // For same for both let and const
```
- Function declartion Hoisting 
It is only possible for named function
# Nov 3
#  Currying function
Uncurrying -> f(a,b,c) -> f=(a,b,c) -> abc means performing some operation <br>
Currying  -> f(a)(b)(c) -> f=a=>b=>c  -> abc
```js
//Uncurrying function example -> Normal function
function add(a,b,c){
    console.log(a+b+c)
}
add(1,2,3) //op->6
//Currying function
function add(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}
//chaining call
add(10)(20)(30) // o/p-> 60
let curry1=add(100)
let curry2=curry1(200)
curry2(300) // op ->600
console.log(curry1) // o/p-> [Function (anonymous)]
console.log(curry2) // o/p-> [Function (anonymous)]
```
# Module 28- Self Invoke Function 
- IIFE(Immediately Invoked Function Expression)
- That is the function is not called explicitly by anyone.For example the prepinsta page automatically shows the ad pop up page
```js
function NormalFun(){
    console.log("Executed Whenever I called")
}
NormalFun();


//IIFE - Immediately Invoked Function Expression
// The Function is nothing but it is self invoked ,so the function must be anonymous ->Syntax (function(){}())
(function(){
    console.log("Self Invoked Function")
}) ();
//with parameter
(function IIFepatern(username,phone){
    console.log(`This is ${username} website and contact number is ${phone}`)
})("Keerthivasan",7904479992)
// We can also name this function but no use of it,because if we explicitly call it with function name(),it will throws an error
//IIFepatern("Keerthivasan",2301282408) // ReferenceError:IIFepatern is not defined
```
- Closure Function 
```js
// Closure Function 
// Accessing or using the outervarible from outerfunction from within the inner function 
function outerfunction(){
    let outervariable="I am from outer scope"
    function innerfunction(){
        console.log(outervariable)
    }
    return innerfunction ///returning as value not a function 
}
let innerfun=outerfunction() // storing the functions value in variable
innerfun() //calling the innerfun variable as a function 
```






