import React from 'react';

const Footer = () => {

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


    return (
        <footer style={red}>
            <h2 style={text}>Devkgire</h2>
            <h3 style={text2}>&copy;	DEV PHP/SYMFONY - REACT</h3>
            <h4 style={text3}>© Copyright 2020 - Riot Nicolas</h4>
        </footer>
    );
}

export default Footer;