// Union And Intersection Types

{
  // Union type
  type FrontendDeveloper1 = "fakibazDeveloper" | "juniorDeveloper"; // string letaral type
  type FullstackDeveloper1 = "frontendDeveloper" | "expartDeveloper";
  type NewDeveloper = FrontendDeveloper1 | FullstackDeveloper1;

  const newDeveloper: NewDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    gender: "male" | "felame";
    bloodGroup: "A+" | "B+" | "AB+" | "O+" | "A-" | "B-" | "AB-" | "O-";
  };

  const user: User = {
    name: "Mir Jafor",
    gender: "male",
    bloodGroup: "B-",
  };

  // Intersection type

  type FrontendDeveloper = {
    skill: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skill: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer: FullstackDeveloper = {
    skill: ["HTM", "CSS", "JS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
