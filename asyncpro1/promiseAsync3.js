const cart=["shoes", "pants","kurta"];
const pada= createOrder(cart);
pada.then((orderId)=>{
    console.log(orderId);
    return orderId;
})
.then((orderId)=>{
    return proceedToPayment(orderId);//this will return a promise in string
})
.then((paymentInfo)=>{
    console.log(paymentInfo);

})
.catch((err)=>{
    console.log(err.message);
})
.then(()=>{
    console.log("This will happen no matter what");
})

function createOrder(cart) {
    const pr= new Promise(function(resolve , reject){

        if(!validateCart(cart)) {
            const err =new Error("Cart is not valid");
            reject(err);
        }
        
        const orderId="12345";
        if(orderId){
            setTimeout(()=>{
                

                resolve(orderId);
            },5000);
        }
    
    });
    return pr;
}


function proceedToPayment(orderId){ 
    return new Promise(function(resolve, reject){
        resolve ("Payment successfully resolved");
        //doing the job of returning a promise which is enough for code.
    });
}

function validateCart(cart){
    return true;
}