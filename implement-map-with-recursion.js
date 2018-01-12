// Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

const recursiveMap=(array,callBack)=>{
	let currentArray = array.slice();
	let newArray=[];
	if(currentArray.length ===0){
		return [];
	}
	newArray.push(callBack(currentArray.shift()));
	return newArray.concat(recursiveMap(currentArray,callBack))
}

const timesTwo=(number)=>{
	return number*2;
}

//console.log(recursiveMap([4,5,7,9], timesTwo));ty
// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
const countKeysInObj = function(obj, key) {
	let counter=0;

	for(let k in obj){
		if(k ===key){
			counter++;
		}

		if(typeof obj[k] ==='object'){
			console.log('-----',obj[k]);
		    counter += countKeysInObj(obj[k],key);
		}	
	}
	return counter;
	//return counter;
	// if(obj.hasOwnProperty(key)){
	// 	counter++
	// }

	// if(obj[key] === 'object'){
	// 	return counter + countKeysInObj(obj[key],key);
	// }else{
	// 	return counter;
	// }

};

var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(countKeysInObj(obj, 'e'));