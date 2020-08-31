import axios from "axios";



function authlogin(login) {

    return axios.post("http://127.0.0.1:8000/api/login_check",login);
    
}

export default {
    authlogin
}