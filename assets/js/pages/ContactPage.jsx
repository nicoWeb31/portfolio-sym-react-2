import React, { useState } from 'react';
import Formulaire from "../components/contact/Formulaire"
import Reseau from '../components/contact/Reseau';


const ContactPage = () => {




    return (
        <>


            <hr className="mt-1 mb-5 bg-dark shadow w-75" />

            <Formulaire />

            <hr className="mt-1 mb-5 bg-dark shadow w-75" />

            <Reseau  />






        </>
    );
}

export default ContactPage;