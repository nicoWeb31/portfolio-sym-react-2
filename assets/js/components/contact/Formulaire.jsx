import React, { useState } from 'react';
import Field from '../form/Field';
import messageService from "../../service/messageService"
import { Link } from 'react-router-dom';


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



    let linkBorder;
    if (hover) {

        linkBorder = {
            border: '#9933cc 1px solid',
            transition: '1s'
        }

    } else {
        linkBorder = {}
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
        company: ""
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
            //toast.success("le client a bien été crée ! ")
            //history.replace("/customers");*
            console.log(response)


        } catch (err) {

            if (err.response.data.violations) {
                const apiErr = {}
                err.response.data.violations.map(({ propertyPath, message }) => {
                    apiErr[propertyPath] = message;
                })
                console.log(apiErr);

                //toast.error("des erreurs dans le formulaire ! ")
                setErrors(apiErr);
            }
        }
    }

    return (
        <>

            <div className="container p-4" onMouseEnter={toggleHoverIn} onMouseLeave={toggleHoverOff} style={linkBorder}>
                <h2 className="text-center">Laisser moi un message !</h2>


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

                    {/* <Field
                    name="message"
                    label="Mesage"
                    placeholder="Votre message"
                    value={message.message}
                    onChanges={handleChange}
                    error={errors.message}
                    
                /> */}
                    <textarea id="w3review" name="w3review" rows="4" cols="auto"
                        name="message"
                        label="Votre message"
                        value={message.value}
                        onChange={handleChange}
                        placeholder="Votre message"
                        className="form-control"


                    >

                    </textarea>



                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Envoyer</button>
                        <Link to="/customers" className="btn btn-link">retour a la liste</Link>
                    </div>
                </form>

            </div>
        </>
    );
}

export default Formulaire;