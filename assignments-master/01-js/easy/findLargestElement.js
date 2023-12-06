/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
/*
let a=Number.parseInt( prompt("Input nuber of elements of the array"));
let list=[];
list[0]=Number.parseInt(prompt("Enter the first number"));
*/
let big=list[0];
for(let i=1;i<a;i++)
{
    list[i]=Number.parseInt(prompt("Enter the next number"));
    
}
function findLargestElement(numbers) {
    for(let i=1;i<a;i++)
{
    
    big=(list[i]>big)? list[i]:big;
}
return big;
    
}

module.exports = findLargestElement;