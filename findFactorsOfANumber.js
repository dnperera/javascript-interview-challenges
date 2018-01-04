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

console.log(findFactors(6));