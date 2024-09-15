



let first = document.getElementById("first")

console.log(first.getAttribute("class"))            //  gives the value of the passed attribute of the selected element.....
console.log('\n')


console.log(first.hasAttribute("class"))            //  gives true if the selected element has some value assigned to the passed attribute.....
console.log(first.hasAttribute("name"))
console.log('\n')


first.setAttribute("class", "new")              //  sets the 'class' attribute as 'new'.....
console.log(first.getAttribute("class"))
console.log('\n')


first.removeAttribute("class")                  //  removes the passed attribute from the selected element.....
console.log(first.getAttribute("class"))
console.log('\n')


console.log(first.attributes)                   //  gives collection of all the attributes in the selected element.....
console.log('\n')


first.setAttribute("data-game", "mario")              //   custom attributes can be made with key as data-<attribute name>......
first.setAttribute("data-player", "ansh")
console.log(first.dataset)                              //  the custom attributes are accessed using dataset method.......
console.log(first.dataset.game)
console.log(first.dataset.player)

console.log(first.attributes)
console.log('\n')








