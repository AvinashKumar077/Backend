
//cretae a promise
const promise = new Promise((resolve, reject) => {
    //Do an async task async task
    // example : fetching data from server,DB calls etc
    setTimeout(() => {
        console.log('Async task');
        resolve();
    }, 1000)
})

// consume the promise
promise.then(() => {
    console.log('Promise resolved');
})

// another method:- 

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
})
    .then(() => {
        console.log('Promise resolved');
    })
    .catch(() => {
        console.log('Promise rejected');
    })
    .finally(() => {
        console.log('Finally done');
    });


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 3');
        resolve({ username: 'avinash' });
    }, 1000);
})

promise3.then((data) => {
    console.log('Promise resolved', data.username);
})


const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            console.log('Async task 4');
            resolve({ username: 'avinash', Password: '1234' });
        } else {
            reject('Something went wrong');
        }

    }, 1000);
})

//chaining promises
promise4
    .then((data) => {
        console.log('Promise resolved', data);
        return data.username
    }).then((username) => { //this then will get the return value from the previous then
        console.log('Hello', username);
    })
    .catch((error) => {
        console.log('Promise rejected', error);
    })


//async await

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: 'javaScript', Password: '123' });
        } else {
            reject('Something went wrong');
        }

    }, 1000);
})

async function fetchData() {
    try {
        const data = await promise5;
        console.log('Data', data);
    } catch (error) {
        console.log('Errorrrrrrrr', error);
    }
}

fetchData();

//async await with fetch

// async function fetchUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json(); // need to Await this as well as it takes time to convert the response to json
//         console.log(data);
//     } catch (error) {
//         console.log('Error', error);
//     }

// }

// fetchUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error', error))


