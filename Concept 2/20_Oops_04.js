//  Use of 'super' keyword...........



class Employee{

    constructor(name){
        console.log(`${name} - Employee constructor is here.`)
        this.name = name
    }

    
    login(){
        console.log(`Employee has logged in.`)
    }
    
    logout(){
        console.log(`Employee has logged out.`)
    }
    
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves.`)
    }
}


class programmer extends Employee{
    
    // constructor(...args){                           //  Default constructor........
    //     super(...args)                              //  this is used so that it could call the constructor of the parent class first.....
    // }

    
    constructor(name){
        super(name)                                     //  this has to be used in order to create the parent's object at backend first....
        console.log(`${name} - Programmer constructor is here.`)
        this.name = name
    }


    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees.`)
    }

    requestLeaves(leaves){                                  //  function overriding.........
        super.requestLeaves(leaves)                         //  super keyword can be used to call the overrided function of the parent as it is.
        console.log("One extra is granted.")                //  extra changes are also done for which the function was overrided....
    }
}



let e = new Employee("Ansh")
e.requestLeaves(5)

console.log('\n')

let e1 = new programmer("Guru")                 //  whenever an object of derived class is made then by default an object of the base class is also made in the backend....
e1.requestLeaves(5)




