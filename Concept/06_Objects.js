



const person = {
    name : "Ansh",                         //   key : value pairs are to be defined...
    age : 22,                              //   comma is necessary in order to be able to write the next key : value pair.
    hobby : "Football",                       //   the keys are either 'string' or 'symbol' datatype.
    address : {                             //  object within object as a value.
        state : "UP",
        city : "Ayodhya",
        pincode : 224141
    }
}


console.log(typeof person)
console.log(person)
console.log()

console.log(person.name)
console.log(person["age"])                  //  another way of accessing....
console.log(person["hobby"])
console.log()

console.log(person.address.city)
console.log(person["address"].city)
console.log(person["address"]["city"])

console.log('\n')

/********************************************************************************************************************************************** */

user = {
    true : "dskjfskjd",
    23 : "dscbsdc",
    greet : function(){                   //    the value can also be a function.
        console.log("hello")
    }
}                                         //  implicitly converts keys 'true' and '23' to string from bool and integer respectivelly.

console.log(user)
console.log()
user.greet()
console.log('\n')

/********************************************************************************************************************************************** */

const obj = new Object()                    //  another way of creating an object using object class and calling object constructor.

console.log(obj)                            //  empty object is made.
console.log('\n')

/********************************************************************************************************************************************** */

function emp(id, name, salary){                 //  another way of creating an object using a function.....
    this.id = id
    this.name = name
    this.salary = salary
}

const emp_obj = new emp(1, "ansh", 38402)

console.log(emp_obj)
console.log()
console.log(emp_obj.id)
console.log(emp_obj.name)
console.log(emp_obj.salary)
console.log('\n')

/********************************************************************************************************************************************** */

const student = {}                     //  empty object...

student.roll_no = 4                     //  while accessing if the field does not exist, it is automatically created.
student.name = "Ansh"
student.class = 12
console.log(student)

student.name = "rohit"                  //  if the field exists, it is modified.
console.log(student)

delete student.roll_no                  //  the field 'roll_no' is deleted.
console.log(student)
console.log('\n')






