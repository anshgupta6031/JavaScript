



let btn = document.getElementsByTagName("button")[0]


let handler1 = function(event){                     //  this event parameter is an event object.....        //   when an event happens,the browser creates an event object, puts detailes into it and passes it as an argumentto the handler.....
    btn.style.background = "red"
}


let handler2 = function(event){
    btn.style.color = "blue"

    console.log(event)
    console.log(event.type)
    console.log(event.target)                   //  gives the element on which the event handling is done.......
    console.log(event.clientX , event.clientY)          //  gives x and y coordinates of the cursor at the time of event.....
}


btn.addEventListener('click', handler1)                     //  this is used to assign multiple handlers to an event.....
btn.addEventListener('click', handler2)


let x = confirm("do you want the background color of the button?")

if(!x){
    btn.removeEventListener('click', handler1)              //  removes the passed handler on the passed event from the selected element.....
}                                                           //  the handler must be refrenced to the same function object for this to work.....




