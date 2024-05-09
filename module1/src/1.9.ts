// Type Alias In Typescript

{
  //
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Hsan",
    age: 23,
    gender: "male",
    contactNo: "01700000000",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "Mir",
    age: 22,
    gender: "male",
    address: "Ctg",
  };

  const student3: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "Jafor",
    age: 43,
    gender: "male",
    contactNo: "01700000000",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Mir Jafor";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
