// Question 1
console.log("Question 1");
function doubleValues(arr){
	arr.forEach((element,index,ar)=>{ar[index]=element*2;})   
	return arr;
}
console.log(doubleValues([2,4,6]));
console.log(doubleValues([10,2,4,6,20]));


// Question 2
console.log("Question 2");
function onlyEvenValues (arr){
    newarr = []
	arr.forEach((element)=>{
        if(element%2==0)
            newarr.push(element);
    })   
	return newarr;
}
console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));

// Question 3
console.log("Question 3");
function showFirstAndLast(arr){
    newarr = []
	arr.forEach((element)=>{
        newarr.push(element[0]+element[element.length-1]);
    })   
	return newarr;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));


// Question 4
console.log("Question 4");
function addKeyAndValue (arr,key,value){
    newarr = [];
	arr.forEach((element)=>{
        element[key] = value;
        newarr.push(element);
    })   
	return newarr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

// Question 5
console.log("Question 5");
function vowelCount(str){
    let obj={};
    str = str.toLowerCase();
    str = str.split("");
    vowels = 'aouie'.split("");
    
    str.forEach((letter)=>{
        vowels.forEach((vowel)=>{
            if(letter==vowel){
                if (!obj.hasOwnProperty(vowel)) {
                    obj[vowel] = 1;
                } else {
                    obj[vowel]++;
                }
            }
        })
    })
    return obj;
  }
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};