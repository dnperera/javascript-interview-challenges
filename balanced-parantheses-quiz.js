// Find given string has balanced parentheses

var str = ')(';

var isBalanced = function(str){
	return !str.split('')
	.reduce((counter,element) =>{
		if(counter<0){
			return counter;
		}
		if(element==='('){
			return ++counter;
		}
		if(element===')'){
			return --counter;
		}
	return counter
	},0)
}

console.log(isBalanced(str));