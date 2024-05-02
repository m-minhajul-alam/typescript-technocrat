// There are 2 data types.

// Primitive data type
// Non-primitive data type

// Primitive data type are:
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol

// Non Primitive data type are:
// 1. Array
// 2. Tuple
// 3. Object

// Tricky question: Do we find the TS type in runtime?

// Ans: No, because we don't run TS in runtime. We compile the TS and convert it into JS and we run the JS throw browser or node js environment. So in runtime, we found the JS type, not the TS type. TS help us to check the data type when it compiles.

// If the TS compiler assumes or infers a variable data type, it is called an impels data type.
// If we declare the data type, it is called expressive data type.

{
  //
  //Basic Data Type

  // string
  let name: string = "alam";

  // number
  let rool: number = 123;

  // boolean
  let isAdmin: boolean = true;

  // undefined
  let x: undefined = undefined;

  // null
  let y: null = null;

  // any
  // let d;
  let d: number;

  d = 123;
  // d = "abc";
  // d = true;
  // console.log(d);

  // Array
  let friendList: string[] = ["rashed", "rohmot", "arfat"];

  let roolList: number[] = [1, 2, 3, 4];

  // roolList.push(5);
  // roolList.push("ss");
  // console.log(roolList);

  // tuple --> It's like a Array --It's Order type value
  let rools: [number, number, number] = [34, 45, 23];

  let nameAgeIsAdmin: [string, number, boolean] = ["mr. x", 37, true];
  //   nameAge[0] = 22;
  //   console.log(nameAgeIsAdmin);

  //
}
