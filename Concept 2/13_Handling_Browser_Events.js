



let a = document.getElementsByTagName("button")[2].onmouseleave = ()=>{                     //   another way to handle browser events....
    document.getElementsByTagName("button")[2].style.background = "pink"                    //   this function will be executed when the mouse leave event occures on the selected element.........
    console.log("Done.")
}


//  NOTE :- event handler by js like above overrides the events handler through html.......






