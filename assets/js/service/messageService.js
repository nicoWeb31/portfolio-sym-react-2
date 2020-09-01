import axios from "axios";




function create(message) {

    return axios.post("http://127.0.0.1:8000/api/messages", message)
    
}

function findAll(){
    return axios.get("http://127.0.0.1:8000/api/messages")
    .then(response => {
        return response.data['hydra:member']
    })
}


function deleteMessage(id){
    return axios.delete(`http://127.0.0.1:8000/api/messages/${id}`)
}

export default {
    create,
    findAll,
    deleteMessage
}