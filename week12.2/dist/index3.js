"use strict";
const Users0 = new Map();
Users0.set("1", { id: "1", name: "John" });
Users0.set("2", { id: "2", name: "Jane" });
Users0.set("3", { id: "3", name: "Bob" });
console.log(Users0.get("2"));
console.log(Users0.get("1"));
console.log(Users0.get("3"));
