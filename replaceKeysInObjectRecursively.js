var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// console.log(countValuesInObj(obj, 'r')); // 2
// console.log(countValuesInObj(obj, 'e')); // 1

//Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// 
const replaceKeysInObj = function(obj, oldKey, newKey) {
	for(let key in obj){
		if(key ===oldKey){
			obj[newKey] = obj[key]
			delete obj[key];
			if(typeof obj[newKey]==='object'){
				replaceKeysInObj(obj[newKey],oldKey, newKey);
			}
		}

		if(typeof obj[key]==='object'){
			replaceKeysInObj(obj[key],oldKey, newKey);
		}
	}
	return obj;
}

//console.log(replaceKeysInObj(obj,'e','denith'));
//
// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if(n<2){
		return n;
	}
	return fibonacci(n-1) +fibonacci(n-2)
};


var obj1 = { x: 10 };

var obj2 = Object.create(obj1);

obj2.x += 10;
obj1.x = 15;
console.log(obj1);
console.log(obj2);

var result = obj2.x;
console.log(result);

