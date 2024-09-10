"use strict";
const user1 = {
    name: "string;",
    email: "fsjnhsd_@fjsb.com",
    id: "1",
    password: "sjgbn",
    phoneNumber: "350982",
};
user1.email = "fjso";
// cannot reeassign after giving values once, since they are all readonly.
const user2 = {
    name: "string;",
    email: "fsjnhsd_@fjsb.com",
    id: "1",
    password: "sjgbn",
    phoneNumber: "350982",
};
// user2.email="dbk"; will give error
