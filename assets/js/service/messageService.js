import axios from "axios";
import {MESSAGES_API}from "../config"




function create(message) {

    return axios.post(MESSAGES_API, message)
    
}

function findAll(){
    return axios.get(MESSAGES_API)
    .then(response => response.data['hydra:member'])
}


function deleteMessage(id){
    return axios.delete(`${MESSAGES_API}/${id}`)
}

export default {
    create,
    findAll,
    deleteMessage
}