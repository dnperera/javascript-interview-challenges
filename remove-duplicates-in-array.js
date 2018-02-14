// // Remove all duplicate in an array without using any loops or higher order functions. do it in one line
// // 

// let array = [1,2,3,2,4,5,6,4,7,2,8]
// //new unique array
// //
// let newArray = [...new Set(array)];

// // write the display values of v and l once you execute the function
// let func = function(){
// 	{
// 		let l ='let';
// 		var v= 'var'
// 	}

// 	console.log(v); // v will display 'var'
// 	console.log(l);// l will be undefined 
// }

// console.log(5<6<7);  //true
// console.log(7>6>5); //false

// let a = () => arguments;

// let b = function () {
// 	return arguments;
// }

// let c = (...args) => args;

// console.log(a('Denith')); // Do not return arguments if you use arrow functions . it does return the passing values
// console.log(b('Denith')); // return the passing value as an object
// console.log(c('Dasith')); // return passing value as an array

// //How to prevent adding new property 'age' to the bellow object

// let profile ={
// 	name : 'Dayan'
// }
// Object.freeze(profile); //prevent adding new properties to the object.

// profile.age = 5;
// console.log(profile);


// Javascrip Spread Operator 

let x = [ 1,2,3,4,5]
let y = x // y will have the reference to x 
let t = Object.assign([],x); // create shallow copy
let z = [...x] // shallow copy - z will be a new array  . not a reference

let arr = [3,5,8,9,10,1,2]
//find the min value of the array
console.log(Math.min(...arr));

//Find the max value of the array
console.log(Math.max(...arr));

//ES - Template literals

const htmlStr = `<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
<p>${arr}</p>
</body>
</html>`;

//ES 6 For Of Loop

let values = ['a','b','c','d'];

for( let [index,element] of values.entries()) {
	console.log(`Index - ${index} value -- ${element}`);
}
