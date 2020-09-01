import React, { useState } from 'react';
import "./contact.css"


const Contact = () => {

    //state
    const [hover, setHover] = useState(false);



    const toggleHoverIn = () => {
        setHover(true)
        console.log(hover)
    }

    const toggleHoverOff = () => {
        setHover(false)
        console.log(hover)
    }



    return (
        <div className={(hover && " _hover") + " col-12 col-md-6 d-flex align-items-center"} onMouseEnter={toggleHoverIn} onMouseLeave={toggleHoverOff} >

            <div className="d-flex row justify-content-center ">
                <h3>Email : nico.riot@free.fr</h3>
                <h3>Tél : 06-63-32-38-36</h3>
                <h4>Adresse : Impasse larribeau -Montespan</h4>


            </div>


        </div>
    );
}

export default Contact;