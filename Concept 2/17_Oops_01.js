//  prototypes and .__proto__



let a = {
    name : "Ansh",
    language : "javascript",
}

console.log(a)


let p = {
    run : ()=>{console.log("run")}
}

a.__proto__ = p                         //  now a inherits p.........


p.__proto__ = {                         //  now p inherits the given object........
    city : "Ayodhya",
}


a.run()

console.log(a.city)



