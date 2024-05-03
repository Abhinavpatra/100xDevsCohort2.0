
const changeText=function (){
    console.log(document.querySelector('h1').innerText="Not that")
    }


setTimeout(()=>{
    console.log("Hitesh")

},2000)

setTimeout(()=>{
    console.log("hello")
}
,3000)
setTimeout(changeText,4000);