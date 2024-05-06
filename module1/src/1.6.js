"use strict";
// If we set a function in an object it is a "method".
// If we want to access any object property from the "method" we can use "this".
// In JS "this" works on Normal Anonymous Function. "this" does not work on Arrow Anonymous Function
{
    //
    // There have 2 type of function:
    // 1. Normal Function
    function add(num1 = 10, num2) {
        return num1 + num2;
    }
    add(0, 9);
    // 2. Arrow Function
    const addArrow = (num1, num2) => num1 + num2;
    addArrow(4, 4);
    // Method
    const poorUser = {
        name: "Sakib",
        balance: 0,
        addBalance(balance) {
            return `My new Balance is: ${this.balance + balance}`;
        },
    };
    // Number Array
    const numbers = [2, 4, 6, 8];
    const squareArray = numbers === null || numbers === void 0 ? void 0 : numbers.map((number) => number * number);
    //
}
