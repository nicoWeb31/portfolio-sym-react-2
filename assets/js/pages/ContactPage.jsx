import React, { useState } from 'react';
import Contact from '../components/contact/Contact';
import Formulaire from "../components/contact/Formulaire"
import Reseau from '../components/contact/Reseau';


const ContactPage = () => {




    return (
        <>


            <hr className="mt-1 mb-5 bg-dark shadow w-75" />

            <Formulaire />

            <hr className="mt-1 mb-5 bg-dark shadow w-75" />

            <div className="row">
            <Reseau  />
            <Contact/>
            </div>

            <hr className="mt-1 mb-5 bg-dark shadow w-75" />








        </>
    );
}

export default ContactPage;