import React, { useState } from 'react';
import CardReal from './cardRealisation/CardReal';


const Realisation = () => {

    const [hover, setHover] = useState(false);


    let linkBorder;
    if (hover) {
    linkBorder = {
        border: '#9933cc 1px solid',
        transition:'1s'
    }
    } else {
    linkBorder = {}
    }





    const toggleHover = () => {
        setHover(!hover)
    }

    return (
        <>


            <div className="container p-4" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={linkBorder}>
            <h1 className="text-center p-3">“Réalisation”</h1>

            <div className="row  d-flex justify-content-around">
                        <CardReal bg="Light Gray" img="https://aprc.it/api/200x125/http://vtt-trail-trek-en-coeur-de-garonne.fr/" link="http://vtt-trail-trek-en-coeur-de-garonne.fr/" Tech="Symfony - react" description="Site blog,front/back pour une association sportive "/>

            </div>
        </div>
        </>
    );
}

export default Realisation;