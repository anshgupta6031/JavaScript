


//  NOTE :- see the output on chrome dev tools console......

//  console.log(document)                                            //  gives the html whole html page as a js object......
console.log(document.body)                                       //  gives the html document's body tag
console.log(document.documentElement)                            //  gives the html document's html tag
console.log(document.head)                                       //  gives the html document's head tag
console.log(document.title)                                      //  gives the html document's title as string
console.log('\n\n')


console.log(document.body.firstChild)                   //  gives the first child of the body tag....
console.log(document.body.firstElementChild)            //  gives the first child 'tag' of the body tag....     //  comments and spaces are ignored when we select using element methods.....
console.log(document.body.lastChild)                   //  gives the last child of the body tag....
console.log(document.body.lastElementChild)            //  gives the last child 'tag' of the body tag....
console.log('\n\n')


console.log(document.body.childNodes)                   //  gives all childrens of the body tag....
console.log(document.body.children)                   //  gives all children 'tags' of the body tag....
console.log(document.body.childNodes[0])                //  same as .firstChild, as .childNodes returns the nodelist/collection(not an array...although we can typecast it to one...) of child nodes....
console.log(document.body.childNodes.length)            //  gives the length of the array of child nodes....

console.log(document.body.childNodes[document.body.childNodes.length - 1])            //  same as .lastChild
console.log('\n\n')


console.log(document.body.hasChildNodes())            //  returns true if the body tag has any child node....
console.log('\n\n')


console.log(document.head.nextSibling)
console.log(document.head.nextElementSibling)           //  same as previous...    //  returns the valid html tag if it is a parent....
console.log(document.body.previousSibling)
console.log(document.body.previousElementSibling)
console.log('\n\n')


console.log(document.body.parentNode)                   //  returns the parent node(not necessarly an html tag)...
console.log(document.body.parentElement)                //  returns the valid html tag if it is a parent....
console.log('\n\n')


console.dir(document.body.firstElementChild)             //   console.dir logs the element as a js object......




