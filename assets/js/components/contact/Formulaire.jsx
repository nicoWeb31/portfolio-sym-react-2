import React, { useState } from 'react';
import Field from '../form/Field';
import messageService from "../../service/messageService";
import {toast} from "react-toastify";


import "./contact.css"


const Formulaire = () => {

    const [hover, setHover] = useState(false);

    const toggleHoverIn = () => {
        setHover(true)
        console.log(hover)
    }

    const toggleHoverOff = () => {
        setHover(false)
        console.log(hover)
    }


    const [message, setMessage] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        lastName: "",
        firstName: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setMessage({ ...message, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setErrors({})


            const response = await messageService.create(message);
            toast.success("Votre message a bien été envoyer ! ")
            //history.replace("/customers");*
            console.log(response);
            setMessage({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            })


        } catch (err) {

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

            <div className={(hover && "_hover") + " container p-4"} onMouseEnter={toggleHoverIn} onMouseLeave={toggleHoverOff} >
                <h2 className="text-center">Laissez moi un message !</h2>


                <form onSubmit={handleSubmit}>

                    <Field
                        name="lastName"
                        label="Nom de famille"
                        placeholder="Votre nom de famille"
                        value={message.lastName}
                        onChanges={handleChange}
                        error={errors.lastName}
                    />

                    <Field
                        name="firstName"
                        label="Prénom"
                        placeholder="Votre prénom"
                        value={message.firstName}
                        onChanges={handleChange}
                        error={errors.lastName}
                    />

                    <Field
                        name="email"
                        label="Email"
                        placeholder="Votre adresse mail"
                        value={message.email}
                        onChanges={handleChange}
                        error={errors.email}
                        type="email"
                    />



                    <div className="form-group">
                    <label htmlFor={message.message}>Votre message :</label>
                        <textarea id="w3review" name="w3review" rows="4" cols="auto"
                            name="message"
                            value={message.message}
                            onChange={handleChange}
                            placeholder="Votre message"
                            className={"form-control" + (errors && " is-invalid")}
                        >
                        </textarea>

                        {errors.message &&
                            <p className="invalid-feedback">{errors.message}</p>
                        }
                    </div>








                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg m-4">Envoyer</button>
                        {/* <Link to="/customers" className="btn btn-link">retour a la liste</Link> */}
                    </div>
                </form>

            </div>
        </>
    );
}

export default Formulaire;