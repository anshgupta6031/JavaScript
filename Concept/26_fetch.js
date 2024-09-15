



fetch('https://jsonplaceholder.typicode.com/todos/1')           //  used to fetch data from the passed API(Application Programming Interface) URL.      //  The API is brought from "https://jsonplaceholder.typicode.com/" this website.
    .then((response)=>{
        console.log(response.status)                //  returns a http status code.....
        console.log(response.ok)                    //  true if status code is between 200-299
        console.log(response.headers)               //  gives the response headers.
        return response.json()                      //  returns a promise which has JSON object, which is converted to js object using .json(), which is furthur returned.
    }).then(json => console.log(json))                      //  now, we have the data from the API in js object format, hence it can be accessed.


//  fetch also takes a second parameter(not necessary to pass) which is an object,
//  fetch("API", {method : '', headers : '', body : {}})          //  this syntax can be used to send the request with the second argument which has a request object.
//  it has 'method' which tells what we want to do with the API data.        //  default method is 'get'.
//  'headers' are the meta data of the API data.
//  'body' is the data in form of an object which is sent to the API server after the API request.
    



//   same above thing done using async function...

async function getData(){
    try{                                                //  works in case of successfull API call.
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')         //  fetched API...
        const data = await res.json()                                                   //  converted json objects to js objects....

        console.log(data)
    }

    catch(error){                                      //  works in case of unsuccessfull API call.
        console.log(error)
    }

    finally{                                      //  works after API execution.
        console.log("finally")
    }
}                                         //  the try, catch and finally work same as .then, .catch and .finally methods of the promises.


getData()





