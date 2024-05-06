"use strict";
{
    // OOP --> Inheritence
    // parent
    class Parent {
        constructor(name, age, address) {
            (this.name = name), (this.age = age), (this.address = address);
        }
        getSleep(numOfHoure) {
            console.log(`${this.name} will sleep for ${numOfHoure} hr.`);
        }
    }
    // student
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("mr. student", 20, "US");
    student1.getSleep(3);
    // teacher
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        getClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass} class.`);
        }
    }
    const teacher1 = new Teacher("mr. teacher", 20, "US", "Head Teacher");
    teacher1.getSleep(10);
    teacher1.getClass(5);
    //
}
