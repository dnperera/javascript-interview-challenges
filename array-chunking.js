// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	//assume : given array is not empty
	//input : array and max size of the sub array
	//Outline : 
	//First define empty array as the final chunk array
	//Then iterate through the given array for each element
	//while iterating the array , get the last element of the chunk 
	//if the last element does not exist or last element length is equal to the size
	//push the new element to chunk
	//else push the new element to the last element of the chunk
	
	const chunk=[];
	for( let element of array){
		let lastElement= chunk[chunk.length-1];
		if(!lastElement ||lastElement.length===size){
			chunk.push([element])
		}else{
			lastElement.push(element)
		}
	}
	return chunk;
}
//console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 5));
//
// 23. Write a function that counts the number of times a value occurs in an object.
var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var counter=0;
	for(var key in obj){
		if(obj[key]===value){
			counter++;
		}
		if(typeof obj[key] ==='object'){
			counter += countValuesInObj(obj[key],value)
		}
	}
	return counter;
};
console.log(countValuesInObj(obj, 'e'));