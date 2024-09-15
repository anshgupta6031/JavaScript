



let box_a = document.getElementsByClassName("A")          //  selected all elements in the html document with the passed class name....

console.log(box_a)                                          //  gives a html collection of tags...

box_a[0].style.color = "blue"                       //  changed the color of the selected element.....


//********************************************************************************************************************************************************************* */


document.getElementById("second").style.color = "red"          //   selected the element with given id.....


console.log(document.querySelectorAll(".B"))            //  selects the elements by the given css selector.....
console.log(document.querySelector(".B"))               //  selects the first element for the given css selector.....


console.log(document.getElementsByTagName("div"))       //  selects element with the given tag name....


console.log(document.getElementsByName("search_query"))       //  selects all the elements with the given name attribute....
console.log('\n')


//*************************************************************************************************************************************************************************** */


let id4 = document.getElementById("fourth")
console.log(id4)

console.log(id4.matches(".B"))                    //  tells if the given element matches the given css selector.....
console.log(id4.matches("#fourth"))
console.log('\n')



let sp1 = document.getElementById("sp1")
console.log(sp1)

console.log(sp1.closest(".B"))              //  gives the nearest ancestor that matches the given css selector.....
console.log(sp1.closest("#sp1"))              //  the element itself is also checked......
console.log()

console.log(id4.contains(sp1))              //  returns true if element having id4 contains sp1.......


//*************************************************************************************************************************************************************** */


Array.from(document.getElementsByClassName("B")).forEach((element)=>{               //  color of each element having class 'B' is set to lime.....      //  had to use Array.from() to convert the html collection into a js array.....
    element.style.color = "lime"
})

console.log('\n')


//*************************************************************************************************************************************************************** */


console.log(document.body.firstElementChild.tagName)        //  tagName only exists for element nodes......
console.log(document.body.firstChild.tagName)

console.log(document.body.firstElementChild.nodeName)       //  nodeName is defined for any node(including text, comment...)
console.log(document.body.firstChild.nodeName)
console.log('\n')


//*************************************************************************************************************************************************************** */













