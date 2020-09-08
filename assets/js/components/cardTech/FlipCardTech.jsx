import { version } from 'core-js';
import React from 'react';
import "./FlipCardTech.style.css";



const FlipCardTech = ({ autre, name, bg, level,version }) => {



    return (

        <div className="flip-card _cardmargin">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="card-header text-center text-white">

                        <h2>{level}</h2>
                    </div>
                    <div className="card-body bg-secondary">
                        <img src={name} alt="Avatar" className="_imgStyle" />
                    </div>

                </div>
                <div className="flip-card-back">
                    <h3> version :{version}</h3>
                    <hr className="mt-1 mb-5 bg-dark shadow w-75" />
                    <p className="_styleFont">{autre}</p>
                    
                </div>
            </div>
        </div>

    );
}

export default FlipCardTech;