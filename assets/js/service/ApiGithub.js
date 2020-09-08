import axios from "axios";
import {
    GIT_ID,
    GIT_SECRET
} from "../config";


function find(name){
    
    return axios.get(`https://api.github.com/users/${name}?client_id=${GIT_ID}
    &client_secret=${GIT_SECRET}`)

}


export default {find}