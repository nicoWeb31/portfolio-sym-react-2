import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import {
    Link
} from "react-router-dom";
import "./navbar.style.css"



const home = <FontAwesomeIcon icon={faHome} />
const env = <FontAwesomeIcon icon={faEnvelope} />


const NavBar = (props) => {





    const text = {

        color: "#424242",
        fontFamily: " Lato",
        fontSize: "60px",
        textAlign: "center",
    };


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-ligth">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse _navBar" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item mr-auto pl-5 active ">

                            <Link to="/" className="nav-link h2 text-bold text-dark m-2 p-4">{home}</Link>
                        </li>

                        <li className="nav-item pr-5 d-flex align-items-center">



                            <Link to="/competence" className="nav-link h5 text-dark  m-2 p-4 _police _font-size">Compétences</Link>
                        </li>


                        <li className="nav-item pr-5 d-flex align-items-center">

                            <Link to="/rea" className="nav-link h5 text-dark m-2 p-4 _police _font-size">Réalisations</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto pr-5 d-flex align-items-center">

                            <Link to="/contact" className="nav-link h2 text-bold text-dark m-2 p-4">{env} </Link>
                        </li>

                    </ul>





                </div>
            </nav>
            <h2 className=" h2 text-bold text-dark text-center hT _heading-primary-main _heading-primary" style={text} >Développeur Web</h2>
            <h3 className=" h2 text-bold text-dark text-center _heading-primary-sub _heading-primary">Symfony - React</h3>
            <hr className="mt-1 mb-5 bg-dark shadow w-75" />
        </>
    );
}

export default NavBar;