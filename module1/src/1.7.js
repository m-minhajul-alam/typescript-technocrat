"use strict";
// Spread And Rest Operator
// Spread Operator
// Rest Operator
// Distructuring
{
    //
    // Spread Operator
    const freandList1 = ["Rashed", "Akib", "Minhaj"];
    const freandList2 = ["Sakib", "Nakib", "Dakib"];
    freandList1.push(...freandList2);
    console.log(freandList1);
    const userList1 = {
        user1: "Hamid",
        user2: "Sakib",
        user3: "Yaqub",
    };
    const userList2 = {
        user4: "Akib",
        user5: "Nkib",
        user6: "Lakib",
    };
    const allUserList = Object.assign(Object.assign({}, userList2), userList1);
    console.log(allUserList);
    // Rest Operator
    //   const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    //     console.log(`Hi ${friend1}, ${friend2} and ${friend3}`);
    //   };
    //   greetFriends("Akib", "Sakib", "Dakib");
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Akib", "Sakib", "Dakib", "Hakib");
    //
}
