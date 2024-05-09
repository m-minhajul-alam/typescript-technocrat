// Ternary, Optional Chaining & Nullish Coalescing Operator

{
  //
  const age = 20;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  // Ternary Operator
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  //Nullish Coalescing Operator
  // if we need to make a disition bane on "null" or "undefined" then we can use Nullish Coalescing Operator

  //   const isAuthenticated = undefined;
  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  // Optional Chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "golir matha",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address.";
  console.log({ permanentAddress });

  //
}
