function square(n){
    return n*n
}
function cube(n){
    return n*n*n;
}
function sumOfFunc(a,b,func){
    return func(a)+func(b);
}
console.log(sumOfFunc(1,2,square));