



let obj = {
    name : "Ansh",
    company : "xyz",
    city : "Ayodhya",
}



console.log({...obj, name : "John", city : "New york"})         //  if ...obj is written before then it's fields are overrided by the later entries......

console.log({name : "John", city : "New york", ...obj})         //  here the entries are overriden again by the object's fields......


