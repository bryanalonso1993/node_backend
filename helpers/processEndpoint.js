const axios = require('axios').default;

/**
 * Evaluar la peticion del enpoint
 */

const response = (endpoint, method) => {
    switch(method){
        case "get":
            return axios.get(endpoint)
            break;
        case "post":
            return axios.post(endpoint)
            break;
        default:
            return axios.get(endpoint)
    }
}

module.exports = response;

// const promiseAxios = response("https://jsonplaceholder.typicode.com/posts", "get");
// 
// Promise.resolve(promiseAxios).then(x => console.log(x.data)).catch(e => console.log(e));
