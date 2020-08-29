import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./contact.css"



const Reseau = () => {


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


    const styleLogo = {
        width: '180px',
        height: '180px',

    };


    return (
        <>

            <div className={(hover && "_hover ") + "container P-2 col-6 "} onMouseEnter={toggleHoverIn} onMouseLeave={toggleHoverOff} >
                <h2 className="text-center">Mes réseaux pro : </h2>

                <div className="d-flex row justify-content-around m-4 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/nicolas-riot"><img src="/img/link.png" alt="logo" style={styleLogo} /></a>
                <a target="_blank" href="https://github.com/nicoWeb31"><img src="/img/gitbb.png" alt="logo" style={styleLogo} /></a>

                </div>


            </div>




        </>
    );
}

export default Reseau;