// axios vs fetch

const { METHODS } = require("http");

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async (r)=>{
//         const json= await r.json();
//         console.log(json.todos.length);

//     })
// }
// main();

const axios=require("axios");

// async function main1(){
//    const r = await axios.get("https://sum-server.100xdevs.com/todos");
//    console.log(r.data.todos); 
// }

// main1();

async function main2(){
// making call requests

     axios.put(" https://httpdump.app/dumps/c9ebb13a-aeb4-4712-ad1f-1ceffd7bc43c",{
       
        body:{
            username:"idaho",
            password:"sucks"

        },
        headers:{
            Authorization: true,
        }
        
    })

    
}
main2()