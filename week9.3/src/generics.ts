function stuff<T>(arg : T[]):T{
    return arg[0];
}
let output = stuff(["blah"]).toUpperCase();
