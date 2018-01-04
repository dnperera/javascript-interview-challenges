let findFactors =(number)=>{
	let n=1;
	let factors=[]
	while(number>=n){
		if(number%n===0){
			factors.push(n)
		}
		n++;
	}
	return factors
}

//Prime Numbers - Can have only two factors , number one and number iteself

console.log(findFactors(3));