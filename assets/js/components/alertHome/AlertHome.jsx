import React from 'react';
import "./alertHome.style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const alert = <FontAwesomeIcon icon={faAsterisk} />


const AlertHome = () => {
    return (
        <>
            <div className="row">
                <div className="col"></div>
                <div className="jumbotron col-md-8 _alertAcc">
                    <div className="text-center m-4">{alert}{alert}{alert}</div>

                    <p>Actuellement a la rechercher d'une mission, ou d'un poste de devéllopeur web, ouvert a toute proposition, n'hésitez pas a me contacter !</p>
                    <p>En attendant je monte en compétence sur React et Symfony, via des petits projets fullStack, redux et au programme. </p>
                    <div className="text-center m-4">{alert}{alert}{alert}</div>
                </div>
                <div className="col"></div>

            </div>
        </>

    );
}

export default AlertHome;