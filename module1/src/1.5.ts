{
  //
  // Reference type data ---> Object

  const user: {
    readonly gander: string; // read only type
    company: "Programming Hero"; // literal type
    fristName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    // company: "Programming Hero BD",
    gander: "male",
    company: "Programming Hero",
    fristName: "Jhonkar",
    lastName: "Mahbub",
    isMarried: true,
  };

  // user.company = "P-Hero";
  // user.gander = "female";

  //
}
