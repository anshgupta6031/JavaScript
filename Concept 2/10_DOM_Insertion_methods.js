



let a = document.getElementsByClassName("container")[0]
console.log(a)


//  a.innerHTML = a.innerHTML + `<h1>Hello World!!!</h1>`               //  one way to insert something in html(using inner html)......


let div = document.createElement("div")                     //  created an html element 'div'........
div.innerHTML = `<h1>Hello World!!!</h1>`                   //  set the inner html for the created div.....

 a.append(div)                              //  these are some methods to insert an html element into the DOM..........
//  a.prepend(div)
//  a.before(div)
//  a.after(div)
//  a.replaceWith(div)



//  Uncomment to see their individual effects.........





