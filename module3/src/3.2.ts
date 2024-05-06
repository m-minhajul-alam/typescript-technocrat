{
  // OOP --> Inheritence

  // parent
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      (this.name = name), (this.age = age), (this.address = address);
    }

    getSleep(numOfHoure: number) {
      console.log(`${this.name} will sleep for ${numOfHoure} hr.`);
    }
  }

  // student
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("mr. student", 20, "US");
  student1.getSleep(3);

  // teacher
  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} class.`);
    }
  }

  const teacher1 = new Teacher("mr. teacher", 20, "US", "Head Teacher");
  teacher1.getSleep(10);
  teacher1.getClass(5);

  //
}
