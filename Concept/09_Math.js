



//  built in math constants........

console.log(Math.PI)                //  value of pi.
console.log(Math.E)                 //  value of 'e'.
console.log(Math.SQRT2)             //  value of root 2.
console.log(Math.LN2)               //  value of log 2.
console.log(Math.LN10)              //  value of log 10.

console.log('\n')


//  built in math methods.........

console.log(Math.abs(5-7))
console.log(Math.ceil(3.456))
console.log(Math.floor(3.456))
console.log(Math.trunc(3.456))      //  removes the fractional part....
console.log(Math.round(3.556))      //  rounds off.....
console.log(Math.sqrt(69))
console.log(Math.exp(2))            //  gives e^2
console.log(Math.pow(2,10))         //  gives 2^10
console.log(Math.random())          //  returns a random number between 0 and 1. 0 is included but 1 isn't.
console.log(Math.max(5,2,8,1,3,9))      //  returns max
console.log(Math.min(5,2,8,1,3,9))      //  returns min

console.log('\n')


//  Date.........

//  getters.......

let d = new Date()
console.log(d)                            //  gives current date and time data...
console.log(Date.now())                  //  also gives current date and time data...

console.log(d.getDate())                //  gives the date from the whole date data...
console.log(d.getMonth())                //  gives the month from the whole date data...        //  months are set based on 0 based indexing. i.e month 0 is jan and 11 is dec...
console.log(d.getDay())                //  gives the day no. of the week from the whole date data...        //  also based on 0 based indexing. i.e day 0 is sun and 6 is sat...
console.log(d.getFullYear())                //  gives the year from the whole date data...
console.log(d.getTime())                  //  also gives current date and time data...
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())
console.log(d.toDateString())           //  gives the date in the form of string.
console.log(d.toLocaleString())           //  also gives the date in the form of string.

//  similarly setters can also be used to set any date and time data. We use the same names of methods but use set instead of get.

console.log('\n')


//  sets.........

let s = new Set()
s.add(1)
s.add(2)
s.add(3)
s.add(3)        //  only unique elements are stored...
console.log(s)
console.log(s.size)
console.log()

console.log(s.entries())        //  corresponding key and value are same in sets...
console.log(s.keys())
console.log(s.values())
console.log()

s.delete(3)
console.log(s)
console.log(s.size)
console.log()

console.log(s.has(4))
console.log()

s.clear()
console.log(s)
console.log('\n')


arr = Array(1,2,3,3,5,5,7)
s1 = new Set(arr)                   //  array made into a set....
console.log(s1)
console.log()

arr1 = Array.from(s1)               //  set made into an array......
console.log(arr1)
console.log()

console.log('\n')


//  Maps..........

let m = new Map()
m.set("Name", "ansh")
m.set("age", 20)
m.set("male", true)             //  any key, value pair can be assigned...

console.log(m)
console.log(m.size)
console.log()

console.log(m.entries())
console.log(m.keys())
console.log(m.values())
console.log()

m.delete("age")
console.log(m)
console.log()

console.log(m.has("male"))
console.log()

console.log(m.get("Name"))          //  gets the value corresponding to a key......
console.log()

m.set("Name", "Rajat")              //  sets the value corresponding to a key......
console.log(m)
m.set("City", "Ayodhya")              //  if the key does not exists, it is made and the value is assigned to it.
console.log(m)
console.log()

m.clear()
console.log(m)
console.log('\n')


const user = {
    name : "Guru",
    age : 21,
    city : "Lucknow"
}

let m1 = new Map(Object.entries(user))          //  making map from an object.....
console.log(m1)
console.log()


const obj = Object.fromEntries(m1)              //  making an object from map.......
console.log(obj)
console.log('\n')







