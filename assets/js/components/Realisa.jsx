import React, { useState } from 'react';
import CardReal from './cardRealisation/CardReal';



const Realisa = () => {


    return (
        <>
            <div className="container p-4" >
                <div className="jumbotron">

                    <h1 className="text-center p-3">“Réalisation”</h1>

                    <div className="row  d-flex justify-content-around">
                        <CardReal bg="Light Gray" img="https://aprc.it/api/200x125/http://vtt-trail-trek-en-coeur-de-garonne.fr/" link="http://vtt-trail-trek-en-coeur-de-garonne.fr/" Tech="Symfony - react" description="Site blog,front/back pour une association sportive " />
                        <CardReal bg="Light Gray" img="https://aprc.it/api/200x125/http://sym-react.rini9988.odns.fr/" link="http://sym-react.rini9988.odns.fr/#/" Tech="Symfony - react" description="Vous-êtes ici !" />
                        <CardReal bg="Light Gray" img="https://aprc.it/api/200x125/https://githubsearchnico31.netlify.app/" link="https://githubsearchnico31.netlify.app/" Tech="React" description="test API GitHub !" />


                    </div>
                </div>

            </div>

        </>
    );
}

export default Realisa;