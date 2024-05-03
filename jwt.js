const express= require('express');
const app = express();
const jwt = require ('jsonwebtoken');
const user={
    username: 'abhinav',
    password:'abhi',
    email:'patraabhinav12@ggmail.com'
}
const secretKey='justasecret';
const token=jwt.sign(user,secretKey);
console.log(token);
const details=jwt.decode(token);
console.log(details);
try{
    jwt.verify(token,'secretKey')
    console.log("user verified");


}
catch(err){
    console.error('wrong data or Key i.e. \n',err.message);
}
