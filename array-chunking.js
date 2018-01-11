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
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 5));