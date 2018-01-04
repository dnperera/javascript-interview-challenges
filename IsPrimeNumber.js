/*
Outline : 
check given value is a natural number
Then find the factors of that given numbers
If any number with two factors is a prime number

 */

const isPrimeNumber=(number) =>{
	if(!Number.isInteger(number)){
		return false;
	}
	return findFactors(number);
}

const findFactors= (number) =>{
	let n=1;
	let factors =[];
	while(number>=n){
		if(number%n===0){
			factors.push(n);
		}
		n++;
	}
	return factors.length===2;
}

console.log(isPrimeNumber(199));