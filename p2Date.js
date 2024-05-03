let today=new Date();
console.log(today);
//here it is returning the actual current  date time. in yy/mm/dd
//today is an object of the class Date
let otherDate= new Date('12/11/2023');//in mm/dd/yy
console.log(otherDate);
//objectName.geDate(), gives you the date
console.log(today.getDate());
console.log(otherDate.getDate());
//objectName.getDay(), gives you the day of the week, 0-sunday
console.log(today.getDay());
console.log(otherDate.getDay());
//objectName.getFullYear(), returns the year from 1900
console.log(today.getYear());
console.log(otherDate.getFullYear());
//objectName.getMinutes()
//objectName.getSeconds()
//objectName.getTime(): time
//objectName.getMIlliseconds()
/*

this lets us know the time diffference between both the events.accurate to the milliseconds
*/
let current=new Date();
console.log(current.getMilliseconds());
let a =0;
console.log(current.getTime())

 for(let i=0;i<10000000000;i++)
{
    a =a+1;
}
console.log(current.getMilliseconds());
console.log(current.getTime())

