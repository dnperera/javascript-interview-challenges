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

console.log(recursiveMap([4,5,7,9], timesTwo));