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
	arr.map((element)=>{element.toString(); console.log(typeof(element)); return element;})
    return arr;
}
console.log(stringItUp([2, 5, 100]));
console.log(stringItUp([10,2,4,6,20]));

