import {serverAddress} from "./Constants";


export const sendPostRequest = (path, args) => {

    console.log(serverAddress + path)
    return fetch(serverAddress + path, {
        method : "POST",
        timeout: 4000,
        headers : {
            'Accept' : 'Application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(args)
    }).then((response) => {
        return response.json()
    })


};