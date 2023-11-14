// Question 1
console.log("Question 1");
function doubleValues(arr){
	return arr.map((element,index,ar)=>{return element=element*2;})
}
console.log(doubleValues([2, 5, 100]));
console.log(doubleValues([10,2,4,6,20]));

// Question 2

console.log("Question 2");
function stringItUp(arr){
	return arr.map((element)=>{return element.toString();})
}
console.log(stringItUp([2, 5, 100]));
console.log(stringItUp([10,2,4,6,20]));


// Question 3

console.log("Question 3");
function capitalizeNames(arr){
	return arr.map((element)=>{
		el = element.toLowerCase(); el = el.charAt(0).toUpperCase()+el.slice(1); return el;
	})
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));




// Question 4

console.log("Question 4");
function namesOnly(arr){
	return arr.map((element)=>{
		return element.name;
	})
}

console.log(namesOnly([
	{
		name: "Angelina Jolie",
		age: 80
	},
	{
		name: "Eric Jones",
		age: 2
	},
	{
		name: "Paris Hilton",
		age: 5
	},
	{
		name: "Kayne West",
		age: 16
	},
	{
			name: "Bob Ziroll",
			age: 100
	}
])); 

// Question 5

console.log("Question 5");
function makeStrings(arr){
	return arr.map((element)=>{
		if (element.age < 18)
		return `${element.name} is under age!`;
		else
		return `${element.name} can go to The Matrix`;
	})
}

console.log(makeStrings([
	{
		name: "Angelina Jolie",
		age: 80
	},
	{
		name: "Eric Jones",
		age: 2
	},
	{
		name: "Paris Hilton",
		age: 5
	},
	{
		name: "Kayne West",
		age: 16
	},
	{
			name: "Bob Ziroll",
			age: 100
	}
])); 

// Question 6

console.log("Question 6");
function readyToPutInTheDOM(arr){
	return arr.map((element)=>{
		return "<h1>"+element.name+"</h1>"+"<h2>"+element.age+"</h2>";
	})
}

console.log(readyToPutInTheDOM([
	{
		name: "Angelina Jolie",
		age: 80
	},
	{
		name: "Eric Jones",
		age: 2
	},
	{
		name: "Paris Hilton",
		age: 5
	},
	{
		name: "Kayne West",
		age: 16
	},
	{
			name: "Bob Ziroll",
			age: 100
	}
])); 

// Question 7
console.log("Question 7");
function doubleValues2(arr){
	return arr.map((element)=>{return element=element*2;})
}
console.log(doubleValues2([2,4,6]));
console.log(doubleValues2([2,-4,-6]));


// Question 8
console.log("Question 8");
function valTimesIndex (arr){
	return arr.map((element,index)=>{return element=element*index;})
}
console.log(valTimesIndex ([1,2,3]));
console.log(valTimesIndex ([1,-2,-3]));


// Question 9
console.log("Question 9");
function extractKey(arr,key){
	return arr.map((element)=>{
		return element[key];
	})
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') );

// Question 10
console.log("Question 10");
function extractFullName(arr){
	return arr.map((element)=>{
		return element.first+ " " + element["last"];
	})
}
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, 
{first: 'Colt', last:"Steele"}])); // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']);
