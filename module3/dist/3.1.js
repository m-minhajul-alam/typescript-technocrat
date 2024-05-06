"use strict";
{
    // OOP
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;
        constructor(// "public" is "perameter propertie" or "modifier"
        name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            //   (this.name = name), (this.species = species), (this.sound = sound);
        }
        makeSound() {
            console.log(`the ${this.name} ${this.species} soound ${this.sound}`);
        }
    }
    const dog = new Animal("american", "dog", "gew gew");
    dog.makeSound();
    //
}
