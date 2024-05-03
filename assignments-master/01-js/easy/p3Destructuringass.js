
/*
const obj = { a: 1, b: { c: 2 } };
const {a,b: { c: d },} = obj;
// Two variables are bound: `a` and `d`
console.log(a);//1
console.log(d);//2
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
*/
const obj={a:1,b:2};
console.log(obj.a);
const{a,b}=obj;
console.log(a);
console.log(b);
// const a = obj.a;
// const b = obj.b;