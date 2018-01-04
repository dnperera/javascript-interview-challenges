/*
Outline :
1)check given number is a natural integer
2)find all factors of the number
3)filter prime factors 
4)find largest 
 */

const findLargestPrimeFactor =(number)=>{
	if(!Number.isInteger(number)){
		return 'Invalid Number';
	}
	return findFactors(number)
	.filter((factor)=>{
		return findFactors(factor).length===2 //any number with two factors is prime
	}).reduce((num1,num2)=>{
		return Math.max(num1,num2);
	});
}

const findFactors =(number)=>{
	let n=1;
	let factors=[];
	while(number>=n){
		if(number%n===0){
			factors.push(n)
		}
		n++;
	}
	return factors;
}
console.log(findFactors(99));
console.log(findLargestPrimeFactor(99));