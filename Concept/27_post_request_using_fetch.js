



const Create_todo = async(todo) => {
    options = {
        method: 'POST',

        body: JSON.stringify(todo),                      //  converts the js object to string.......

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }


    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}



const main_func = async()=>{
    let todo = {
        title: 'Ansh',
        body: 'SDE',
        userId: 69,
    }

    let x = await Create_todo(todo)
    console.log(x)
}


main_func()


