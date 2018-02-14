var array = [[1,2],[3,4],[5,[6],7]];

function flatten(arr) {
 //initialze array
 var newArray =[];
 for( var i = 0; arr.length > i; i++) {
 	if( !Array.isArray(arr[i])) {
 		 newArray.push(arr[i])
 	}
 	 newArray = newArray.concat(flatten(arr[i]));
 }
 return newArray;
}

/*
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

 /**
  * @param {number} numRows
  * @return {number[][]}
  */
 var generate = function(numRows) {
 	// Input : Number 
 	// Output : nested array with numbers
     var results = [];

     for( var i=1; numRows >=i; i++){
     	var rowsArray = [];
     	if(i===1){
     		rowsArray.push(1);
     		results.push(rowsArray)
     	}else{
     		for( var j=1; i >= j; j++){
     			if(j===1 || j=== i){
     				rowsArray.push(1);
     			}else{
     				//console.log(results[j-1][0]+results[j-1][1])
     				rowsArray.push(results[j-1][0]+results[j-1][1]);
     			}
     		}
     		results.push(rowsArray)
     	}

     }
     return results;
 };
//generate(5)
 console.log(generate(5));