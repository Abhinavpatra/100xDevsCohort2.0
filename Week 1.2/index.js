
/*
let a="Abhinav";
let b="Patra";
console.log("first name is " +a+" last name is "+b);
let gender= prompt("What is your gender");
if(gender=="male")
console.log("hello sir");
else
console.log("hello maam");
let num=0;
for(let i=0;i<=100;i++)
num+=i;
//1 hour 11 min mark
function funcSum(a,b){
return a+b;
}
console.log(funcSum(3,5));
*/
/*
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
let sum=sum(3,4);
displayResult(sum);

*/

function sum(num1, num2,fnToCall) {
    let result = num1 + num2;
    
    fnToCall(result);
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
sum(3,4,displayResult);