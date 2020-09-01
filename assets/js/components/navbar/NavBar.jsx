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
                    <ul className="navbar-nav w-100">

                        <li className="nav-item  mr-auto pl-5 ">

                            <Link to="/" className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4">{home} <span className="mx-3">Accueil</span></Link>
                        </li>

                        <li className="nav-item  mx-auto pl-5 ">
                            <h2 className=" h2 text-bold text-dark text-center hT _heading-primary-main _heading-primary" style={text} >Développeur Web</h2>
                            <h3 className=" h2 text-bold text-dark text-center _heading-primary-sub _heading-primary">Symfony - React</h3>
                        </li>


                        <li className="nav-item ml-auto pr-5 d-flex align-items-center">

                            <Link to="/contact" className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4">{env} <span className="mx-3">Contact</span></Link>
                        </li>

                    </ul>




                </div>
            </nav>

        </>
    );
}

export default NavBar;