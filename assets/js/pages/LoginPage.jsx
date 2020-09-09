import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Field from '../components/form/Field';
import authService from "../service/authServise";
import AuthContext from "../components/context/AuthContext"




const LoginPage = ({ history }) => {

    const { setIsAutenticated } = useContext(AuthContext)


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
            toast.success("connection ok  ! ");
            setIsAutenticated(true);
            history.replace("/");

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
        <div className="container">


            <h2 className="m-5 text-center">Connexion Admin</h2>

            <hr className="mt-1 mb-5 bg-dark shadow w-75" />


            <div className="jumbotron">

                <form onSubmit={handleSubmit}>

                    <Field

                        name="username"
                        label="Adresse email"
                        placeholder="Votre adresse email de connexion"
                        value={login.username}
                        onChanges={handleChange}
                        error={errors.username}

                    />

                    <Field

                        name="password"
                        label="mot de passe"
                        placeholder="Votre mot de passe de connexion"
                        value={login.password}
                        onChanges={handleChange}
                        error={errors.password}
                        type="password"

                    />

                    <button type="submit" className="btn btn-success btn-lg m-4">Envoyer</button>

                </form>

            </div>

        </div>
    );
}

export default LoginPage;