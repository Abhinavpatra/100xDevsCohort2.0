const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value");
    },10000);
});

const p2= new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve("Promise resolved value");
},5000);
});

async function handlePromise(){
console.log("Hello world!!");
let val1= await p1;
console.log(val1);

let val2=await p2;
console.log(val2);
}
handlePromise();
console.log("i am written outside the async func");