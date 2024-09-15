//  static functions in Oops............



class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }

    walk(){
        console.log("Animal " + this.name + " is walking.")
    }

    static capitalize(name){                //  NOTE :- static functions belong to the class not object. Therefore static functions are not available for individual objects.....
        return name.charAt(0).toUpperCase() + name.substr(1)                //  first letter is capitalized.........
    }
}


let j = new Animal("mack")
j.walk()
console.log('\n')

let p = 56

console.log(j instanceof Animal)            //  tells if the object is an instance of the given class......
console.log(p instanceof Animal)




//  Getters and Setters are same as in c++.........
