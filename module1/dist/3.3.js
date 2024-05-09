"use strict";
// Type Guard Using Typeof & In
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    console.log(add(2, 3));
    console.log(add("2", 3));
    const normalUser = {
        name: "Mr. Normal",
    };
    const adminUser = {
        name: "Mr. Admin",
        role: "admin",
    };
    const getUser = (user) => {
        // user.
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    getUser(normalUser);
    getUser(adminUser);
    //
}
