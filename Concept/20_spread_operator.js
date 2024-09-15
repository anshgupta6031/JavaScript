



const nums1 = [1,2,3]
const nums2 = [4,5,6]

const newArray = [...nums1, ...nums2]           //  when '...' is used as an argument, it is called spread operator.
                                                //  the spread operator saparates each individual elements of the array. i.e, here "...nums1" is equivalent to "1,2,3" .
console.log(newArray)
console.log()

console.log(Math.max(...newArray))
console.log('\n')




//  spread with function........

const sum = (a,b,c) =>{
    return a+b+c
}

console.log(sum(...nums1))                      //  all elements of nums1 passed as individual arguments.
console.log('\n')




//  spread with string........

const str = "abcd"

console.log(...str)                 //  splited into individual characters.....
console.log('\n')



//  spread with objects........


let obj1 = {
    name : "Ansh",
    age : 20,
}

let obj2 = {
    city : "Ayodhya",
    Country : "India",
    name : "Guru"
}


let new_obj = {...obj1, ...obj2}            //  "...obj1" symbolises individual key value pairs of obj1.
                                            //  later specified object's key(name) is stored in new_obj.

console.log(new_obj)
console.log('\n')






