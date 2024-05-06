// Type Guard Using Typeof & In

{
  // Type Guard

  // type guard --> typeof
  type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(add(2, 3));
  console.log(add("2", 3));

  // type gurad --> in gurad

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
  };

  const getUser = (user: NormalUser | AdminUser) => {
    // user.
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
