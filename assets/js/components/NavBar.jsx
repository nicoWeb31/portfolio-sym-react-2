import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Authserv from '../service/authServise'
import React from 'react';
import {
    Link
} from "react-router-dom";
import { toast } from 'react-toastify';

const home = <FontAwesomeIcon icon={faHome} />
const env = <FontAwesomeIcon icon={faEnvelope} />


const NavBar = ({ isAuth, onLogout, history }) => {

    console.log(isAuth)

    const handlelogout = () => {
        Authserv.logout();
        history.push("/");
        onLogout(false);
        toast.success('deconnecté avec succées')
    }

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
                            <h2 className=" h2 text-bold text-dark text-center" style={text} >Développeur Web</h2>
                            <h3 className=" h2 text-bold text-dark text-center">Symfony - React</h3>
                        </li>

                        {
                            isAuth && (
                                <>
                                    <li className="nav-item ml-auto pr-5 d-flex align-items-center">
                                        <Link to="/messages" className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4">Messages</Link>
                                    </li>

                                    <li className="nav-item ml-auto pr-5 d-flex align-items-center">
                                        <button className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4" onClick={handlelogout}>Déconnexion</button>
                                    </li>
                                </>
                            )
                        }




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