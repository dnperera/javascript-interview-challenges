//check if two strings are anagrams of each other

// let string1 = 'abc';
// let string2 = 'cba';

const isAnagrams =(str1,str2) =>{
	//converted to Upper case 
	let string1 = str1.toUpperCase().split('').sort().join('')
	let string2 = str2.toUpperCase().split('').sort().join('')
	if(string1===string2){
		return true;
	}
	return false;
}

console.log(isAnagrams('abc','eac'));