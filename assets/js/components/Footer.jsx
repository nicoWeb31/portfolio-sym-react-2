import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import authServ from '../service/authServise';
import AuthContext from './context/AuthContext';




const Footer = ({history}) => {

    const { isAhtenticated, setIsAutenticated } = useContext(AuthContext);

    const text = {
        color: "#424242",
        fontFamily: " Lato",
        fontSize: "60px",
        textAlign: "center",

    };

    const text2 = {
        color: "#424242",
        fontFamily: "Lato",
        fontSize: "20px",
        textAlign: "center",

    }

    const text3 = {
        color: "#424242",
        fontFamily: "Lato",
        fontSize: "20px",
        textAlign: "center",


    }

    const red = {
        borderTop: "solid #A44B4B",
        borderWidth: "15px",
        background: "#2E2E2E",
        bottom: "0",
        height: "100%",
        width: "100%"

    }

    const handlelogout = () => {
        console.log('toto')
        authServ.logout();
        history.push("/");
        setIsAutenticated(false);
        toast.success('deconnecté avec succées')
    }


    return (
        <footer style={red}>
            <h2 style={text}>
                <span>
                    Devkgire
            </span>
            </h2>
            <h3 style={text2}>&copy;	DEV PHP/SYMFONY - REACT</h3>
            <h4 style={text3}>© Copyright 2020 - Riot Nicolas</h4>
            <div className="text-center">

                {
                    isAhtenticated ?
                        (
                            <>
                                <Link to="/messages" >messages</Link>
                                <button className="btn btn-outline-secondary" onClick={handlelogout}>Déconnexion</button>
                            </>
                        ) :
                        (
                            <Link to="/login" >Admin</Link>

                        )
                }



            </div>
        </footer>
    );
}

export default Footer;