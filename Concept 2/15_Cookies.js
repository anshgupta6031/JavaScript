


//  cookies are used to store some data in the browser.....
//  cookies are in the form of key = value pairs, separated by ';'.

//  NOTE :- Do clear the browser cookies in order to run this code for better clearity......



console.log(document.cookie)                //  gives all the cookies on the browser in the given webpage........

document.cookie = "name = ansh gupta"
console.log(document.cookie)                //  cookie is set on the browser.......

document.cookie = "hello = hi"
console.log(document.cookie)                //  the cookie gets added to the pre-existing cookies......

document.cookie = "name = guru"
console.log(document.cookie)                //  the cookie with the pre set key gets updated.........




let key = "a==;"
let value = "b;="

document.cookie = `${key} = ${value}`       //  here the key as well as value contain '=' and ';', which causes the cookie to not save properly......
console.log(document.cookie)

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`       //  this encodes the characters in the cookie which were not being accepted........
console.log(document.cookie)

console.log(decodeURIComponent(encodeURIComponent(key)))                //  this is how we can decode the encoded cookie.......




document.cookie = "xyz = pqr; path = ''"                   //   NOTE :- this does not set multiple cookies.......      //  only the first one is set as the cookie.......
                                                            //  the second one is the option for the cookie, the cookie is also available at the given path.......
console.log(document.cookie)




//  NOTE :- the name = value pair after the encodeURIComponent should not exceed 4Kb space.....
//          the total no of cookies per domain is limited to arround 20(depends on the browser).....




