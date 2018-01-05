//Write a function 'fromListToObject' which takes in an array of arrays, 
//and returns an object with each pair of elements in the array as a key-value pair.

/*
	Input: nested array // [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
	Output : Objrect with key value pair //{make:'Ford',model:'Mustang',year:1964}
	Assumptions: Elements of the array would be an array with length of 2
 */

//Solution 1- using regular for loop
function fromListToObject(array) {
	let outputObj={};
	for(let i=0; array.length>i;i++){
		outputObj[array[i][0]]=array[i][1];
	}
	return outputObj;
}

//Solution 2 -using Higher Order Functions
function fromListToObject(array) {
	return array.reduce((accumilator,element)=>{
		accumilator[element[0]]=element[1];
		return accumilator;
	},{});
}
console.log(fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));

