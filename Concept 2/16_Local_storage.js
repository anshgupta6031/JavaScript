



//  local storage is a web storage object which are not sent to the server with each request unlike cookies.......
//  this data survives a full page refresh and even a full browser restart......


//  you can see the local storage in the browser's dev tools->application->Storage(on left side)->local storage




localStorage.setItem('name', 'ansh')                //  takes input as (key, value) pair and sets them in the loval storage.....
console.log(localStorage.getItem('name'))           //  gives the value of the passed key.........



localStorage.setItem('name', 'guru')
console.log(localStorage.getItem('name'))           //  the value with pre set key gets updated...........

localStorage.setItem('city', 'ayodhya')
console.log(localStorage.getItem('city'))

localStorage.removeItem('city')                     //  removes the passed key with its value........
console.log(localStorage.getItem('city'))


// localStorage.clear()                            //  clears the local storage........


localStorage.setItem('x', '5')
localStorage.setItem('y', '3')
console.log(localStorage.length)

console.log(localStorage.key(1))                //  gives the key at given index.......



localStorage.p = 69                       //   another way to set into the local storage........




//  NOTE :- Both key and value must be strings.........

//  there is also another kind of storage named session storage, the data in it only exist within the current browser tab and survives the page reload.
//  the methods are all same as the local storage just use (sessionStorage.<method>) instead of (localStorage<method>).
