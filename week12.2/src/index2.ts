interface UserDetails{
   readonly name:string;
    email:string;
    id:string;
    password:string;
    phoneNumber:string;
}

const user1: UserDetails={
    name:"string;",
    email:"fsjnhsd_@fjsb.com",
    id:"1",
    password:"sjgbn",
    phoneNumber:"350982",

}
user1.email="fjso";


// cannot reeassign after giving values once, since they are all readonly.

const user2:Readonly<UserDetails>={
    name:"string;",
    email:"fsjnhsd_@fjsb.com",
    id:"1",
    password:"sjgbn",
    phoneNumber:"350982",


}
// user2.email="dbk"; will give error
