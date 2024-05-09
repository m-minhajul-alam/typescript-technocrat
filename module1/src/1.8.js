"use strict";
// Destructuring In Typescript
{
    // Object destructuring
    const user = {
        id: 788,
        name: {
            fristName: "Muhammad",
            middleName: "Minhajul",
            lastName: "Alam",
        },
        contactNo: "01700000000",
        address: "Bangladesh",
    };
    const { contactNo, // we can not expresively diclear the type here. becouse work the Name Alias
    name: { middleName: midName, // it's call "Name Alias"
    lastName, }, } = user;
    // Array destructuring
    const friends = ["Akib", "Bakib", "Cakib", "Dakib", "Eakib"];
    const [, , bestFriend, ...rest] = friends;
    //
}
