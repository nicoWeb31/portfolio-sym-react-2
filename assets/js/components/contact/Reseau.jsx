import React, { useState } from 'react';
import { Link } from 'react-router-dom';



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

    let linkBorder;
    if (hover) {

        linkBorder = {
            border: '#9933cc 1px solid',
            transition: '1s'
        }

    } else {
        linkBorder = {}
    }

    const styleLogo = {
        width: '180px',
        height: '180px',

    };


    return (
        <>

            <div className="container p-4" onMouseEnter={toggleHoverIn} onMouseLeave={toggleHoverOff} style={linkBorder}>
                <h2 className="text-center">Retrouvez sur les reseaux !</h2>


                <a target="_blank" href="https://www.linkedin.com/in/nicolas-riot-Privacy-Policies"><img src="/img/link.png" alt="logo" style={styleLogo} /></a>

            </div>




        </>
    );
}

export default Reseau;