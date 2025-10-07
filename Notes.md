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