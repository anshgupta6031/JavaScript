




alert("Enter a number")                     //  shows a pop up message....


let a = prompt("Enter it here.", 0)           //   takes input as a string in a popped up box....
                                            //  second argument is the default value as input...



let write = confirm("Do you want to write the number in the page ?")        //  takes input in ok/cancel form....

let color = prompt("Write the background color of the page you want.")


document.body.style.backgroundColor = color        //  here we accessed the body of the html file and changed its style in the runtime using js.....


if(write){
    document.write(a)                       //  writes in the html document.....
                                            //  document is a js object which is made by the attached html document in the form of js object.....
}

else{
    document.write("The number was not allowed to be written here....<br>try again....")            //  document.write() takes a valid html text in order to be able to write on the page.....
}

// if(a > 90) location.href = "https://google.com"             //  redirects to the given url.....
if(a > 90) window.location = "https://google.com"              //  redirects to the given url.....  //  same thing as above.....


//  NOTE :- a con of using these methods is that they pause the execution of the script untill they are fully executed. i.e. these are synchronous......


//  alert, prompt, confirm and location are the part of BOM(browser object model). Hence they work on the browser....

//  document is a part of DOM(document object model). Hence it is associated with the attached html document...





