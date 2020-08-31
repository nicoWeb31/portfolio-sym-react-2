import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Field from '../components/form/Field';
import authService from "../service/authServise";
import axios from "axios"



const LoginPage = () => {


    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setLogin({ ...login, [name]: value });
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await authService.authlogin(login);
            toast.success("connection ok  ! ")            

        } catch (err) {

            console.log(err.response)
            toast.error("Vous avez des erreurs dans le formulaire ! ")


            if (err.response.data.violations) {
                const apiErr = {}
                err.response.data.violations.map(({ propertyPath, message }) => {
                    apiErr[propertyPath] = message;
                })
                console.log(apiErr);

                toast.error("Vous avez des erreurs dans le formulaire ! ")
                setErrors(apiErr);
            
        }
    }

    }


    return (
        <>

            <h2>Connection Adminisrtateur</h2>

            <form onSubmit={handleSubmit}>

                <Field

                    name="username"
                    label="adresse email"
                    placeholder="Votre adresse mail de connection"
                    value={login.username}
                    onChanges={handleChange}
                    error={errors.username}

                />

                <Field

                    name="password"
                    label="mot de passe"
                    placeholder="Votre Mdp de connection"
                    value={login.password}
                    onChanges={handleChange}
                    error={errors.password}
                    type="password"

                />

                <button type="submit" className="btn btn-success btn-lg m-4">Envoyer</button>

            </form>

        </>
    );
}

export default LoginPage;