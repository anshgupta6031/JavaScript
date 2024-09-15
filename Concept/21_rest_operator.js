



//  when the same "..." is used to club all the elements, it is called rest operator.

const add = (...nums) =>{                           //  all passed arguments are packed to one identifier...
    return nums.reduce((sum, num) =>{
        return sum + num
    })
}


console.log(add(1,2,3,4,5,6))
console.log('\n')




//  rest operator with objects........


const person = {
    name : "John",
    age : 30,
    address : {
        city : "new york",
        country : "USA",
    },
}

const {name, ...remaining} = person                 //  all key : value  after name is packed into one identifier, remaining.

console.log(remaining)
console.log('\n')





