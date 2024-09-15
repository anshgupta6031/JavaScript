



const person = {
    name : "John",
    age : 30,
    address : {
        city : "new york",
        country : "USA",
    },
}


const modifyPerson = (person) =>{                               //  object passed as a parameter.......
    
    const {name, age, address : {city}} = person                //  destructuring......

    return{                                                 //  object is returned......
        fullName : name,                                    //  allis name fullname is used as name.
        age : age * 2,
        currentCity : city,                                //  allis name currentCity is used as city.
    }
}


const p2 = modifyPerson(person)
console.log(p2)




