



let first = document.getElementById("first")

console.log(first.innerHTML)                                //  gives the html code inside the selected tag as a string.......

//  first.innerHTML = "<i>hey this is ittalic.</i>"                     //  inner html can also be changed using js........

console.log(first.outerHTML)                                //  gives the html code inside the selected tag as well as the selected tag as a string.......

//  first.outerHTML = "<i>hey this is ittalic.</i>"                     //  outer html can also be changed using js........


console.log(document.body.firstChild.data)                  //  gives the data in any given node(including text, comment....)
console.log(document.body.firstChild.nodeValue)             //  same as previous.....


console.log(document.body.textContent)                      //  gives the text inside the element. Only text..... No inside tags......





