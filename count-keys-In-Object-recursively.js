//Write a function that counts the number of times a given key occurs in an object.

const countKeysInObj = function(obj, key) {
	let counter=0;

	for(let k in obj){
		if(k === key){
			counter++;
		}
		if(typeof obj[k] ==='object'){
			counter += countKeysInObj(obj[k],key);
		}
	}
	return counter;
}

var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(countKeysInObj(obj, 'r')); // 1
console.log(countKeysInObj(obj, 'e')); // 2
