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

console.log(replaceKeysInObj(obj,'e','denith'));