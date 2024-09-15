



let first = document.getElementById("first")

first.className = "red bold"                         //  removes all the preset classes and sets the given.....


console.log(first.classList)                    //  gives the list of all the classes on the selected element........


first.classList.remove("red")                   //  removes the passed class only from the classlist...........
console.log(first.classList)


first.classList.add("green")                    //  adds the passed class to the classlist..........
console.log(first.classList)


console.log(first.classList.contains("green"))                  //  returns true if the selected element has the passed class........


first.classList.toggle("bold")                      //  toggles the passed class, i.e, if it is there, it is removed. and vice-versa.....
console.log(first.classList)



