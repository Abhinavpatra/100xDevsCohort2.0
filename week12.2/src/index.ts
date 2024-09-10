interface User {
    id:string;
    name: String;
    age: number;
    email:String;
    password: string;

}

type UpdateUser= Pick<User,'password' | 'name'>;

type UpdateUserOne=Partial<UpdateUser>;
function sumOfAge(user1:User, user2:User){
    return user1.age+user2.age;
}
const ar =[1,2,3];
ar[0]=3;
