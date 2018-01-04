promise = new Promise((resolve,reject)=>{
	setTimeout(reject,3000)
});

promise
	.then(()=>console.log('Finally Finished !'))
	.then(()=>console.log('Second Function Started !'))
	.catch(()=>console.log('Action Rejected'))