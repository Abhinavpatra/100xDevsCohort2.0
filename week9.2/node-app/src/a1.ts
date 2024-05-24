interface User {
    firstname:string,
    lastName: string,
    email: string,
    age:number,
}

function isLeg(user1: User): boolean {
    if(user1.age>=18) return true;
    else return false ;
}