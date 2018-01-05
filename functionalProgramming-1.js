const people=[
	{
		name:'Marisa',
		spirit_animal:'kola',
		beverages:[
			'tea','vodka'
		]
	},
	{
		name:'Jason',
		spirit_animal:'Bear',
		beverages:[
			'Coffee','Herbal Tea'
		]
	},
	{
		name:'Denith',
		spirit_animal:'Dino',
		beverages:[
			'Chai','Tea','vodka'
		]
	}
]

//remove the 'vodka'from beverage list and replace with 'coconut water'
//use decriptive programming (functional)

const fixBeverageList=(list) =>{
	return list.map((person)=>{
		return {...person,
				beverages:updateBeverageList(person.beverages)}
	});
}

const updateBeverageList= (beverageList) =>{
	return beverageList.map(replaceBeverage);
}

const replaceBeverage = (type) =>type.replace('vodka','coconut water');


console.log(fixBeverageList(people));