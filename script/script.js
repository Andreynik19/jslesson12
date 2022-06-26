//1

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }

//         })
// }


// loadJson('no-such-user.json')
//     .catch(alert);



// async function loadJson() {
//     const response = awaitfetch(url);
//     if (response.status == 200) {
//         return await response.json();
//     } else {
//         hrow new Error(response.status);
//     };
// };

// loadJson('no-such-user.json')
//     .catch(alert);

//2

async function getData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

getData("https://jsonplaceholder.typicode.com/todos/1");