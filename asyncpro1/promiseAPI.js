p1= new Promise (function(resolve,reject){
    setTimeout(()=>resolve("p1 success"),1000);
})
p2= new Promise(function(resolve,reject){
    setTimeout(()=>resolve("p2 success"),3000);
})
p3= new Promise(function(resolve,reject){
    setTimeout(()=>reject("p3 fail"),2000);
})

Promise.all([p1,p2,p3])
.then((values)=>
console.log(values))
.catch((err)=>{
    console.error(err);
})