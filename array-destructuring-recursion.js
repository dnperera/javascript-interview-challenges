//Using array destructuring & recursion . Double the numbers in the array 
//

var numbers =[5,10,15,20,25]

 function dubleNumbers(numbers){
 	var {length}=numbers;
 	
 	if(length===0){
 		return [];
 	}

 	var [number,...rest]=numbers;

 	return [number*2,...dubleNumbers(rest)]
 }

console.log(dubleNumbers(numbers)); 



//Another Way to Double the numbers or squre
var doubledArray =Array.from(numbers,x=>x*2);
console.log(doubledArray);
