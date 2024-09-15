



const emp = {
    name : "Ansh",
    age : 22,
    salary : 1289847,
    address : {
        state : "UP",
        city : "Ayodhya",
        pincode : 224141
    }
}


console.log(Object.keys(emp))               //  to get the list of all keys....
                                            //  don't get the nested keys.
console.log(Object.getOwnPropertyNames(emp))        //  does the same thing as 'Object.keys()'
console.log()

console.log(Object.values(emp))               //  to get the list of all values....
console.log()

console.log(Object.entries(emp))               //  to get the list of all key, value pairs....
console.log('\n')

/************************************************************************************************************************************************** */

emp_new = Object.assign({}, emp, {role : "developer"})              //  created a new empty object 'emp_new' and assigned it all the fields of 'emp' and an extra field 'role'.
console.log(emp_new)
console.log('\n')

/************************************************************************************************************************************************** */

Object.freeze(emp)                      //  now object emp is freezed i.e no modification/ addition/ deletion of object field is possible.

console.log(emp.name)
emp.name = "Anurag"
console.log(emp.name)
console.log()

console.log(Object.isFrozen(emp))           //  tells if the object is frozen or not.
console.log('\n')

/************************************************************************************************************************************************** */

Object.seal(emp_new)                      //  now object emp is sealed i.e no addition or deletion of object field is possible. but fields can be modified.

emp_new.height = 5.4
console.log(emp_new)                    //  no field addition........

delete emp_new.name
console.log(emp_new)                    //  no field deletion........

emp_new.name = "Rohit"
console.log(emp_new)                    //  field modification can be done........
console.log()

console.log(Object.isSealed(emp_new))           //  tells if the object is sealed or not.
console.log('\n')

/************************************************************************************************************************************************** */

console.log(Object.hasOwn(emp, "age"))             //  tells if the object has a key/field named 'age'.
console.log(Object.hasOwn(emp, "company"))
console.log('\n')

/************************************************************************************************************************************************** */

console.log(Object.getOwnPropertyDescriptors(emp))          //  gives the description of all the keys of the object.
console.log('\n')

/************************************************************************************************************************************************** */

for (x in emp){                 //  traversing all the keys of the object using for each loop....
    console.log(x)
}
console.log('\n')

/************************************************************************************************************************************************** */

obj = Object.assign({}, emp)            //  creating a copy of emp......
console.log(obj)
console.log('\n')

Object.defineProperties(obj,{salary : {value : 999999, enumerable : false}})        //  setting the salary's value and enumerable(part of salary's description) as 999999 and false respectivelly.

for (y in obj){                 //  traversing all the keys of the object. But as salary is not enumerable, it is not traversed.
    console.log(y)
}
console.log('\n')

console.log(obj)                       //   even here, there is no. salary field present...
console.log()
console.log(obj.salary)                //  we can see, the value of salary is also changed.....
console.log('\n')







