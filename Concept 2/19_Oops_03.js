//  Inheritance.............



class animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }

    run(){
        console.log(this.name + " is running!")
    }
    
    shout(){
        console.log(this.name + " is shouting!")
    }
}


class monkey extends animal{                            //  now monkey inherits animal........
    eatBanana(){
        console.log(this.name + " is eating banana!")
    }
}


let a = new animal("Bruno", "black")
let b = new monkey("Chimpu", "orange")

a.run()
b.run()
b.eatBanana()
// a.eatBanana()                        //  this will give error.......

