// Write a function that counts the number of times a value occurs in an object.

const countValuesInObj = function(obj, value) {
	let counter=0;
	for( let key in obj){
		if(obj[key]===value){
			counter++;
		}

		if(typeof obj[key] ==='object'){
			counter += countValuesInObj(obj[key],value)
		}
	}
	return counter;
}

//

