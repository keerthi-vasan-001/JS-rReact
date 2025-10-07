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