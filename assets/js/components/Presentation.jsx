import React, { Component, Fragment, useState } from "react";
import Spinner from "../utils/Spinner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import PlusPres from "./PlusPres";

const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />


const Presentation = () => {

    //state
    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPluss, setShowPlus] = useState(false);




    const photoStyle = {
        width: '200px',
        heigt: '300px'
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


    //show plus
    const showPlus = () => {
        //console.log('showplus ok')
        setLoading(true)

        setTimeout(() => {
            setLoading(false);
            setShowPlus(!showPluss);


        }, 300);

    }



    const toggleHoverIn = () => {
        setHover(true)
        console.log(hover)
    }

    const toggleHoverOff = () => {
        setHover(false)
        console.log(hover)
    }


    return (

        <>
            <div className="container p-4" onMouseEnter={toggleHoverIn} onMouseLeave={toggleHoverOff} style={linkBorder}>
                <h1 className="text-center">“A propos de moi”</h1>

                <div className="row mt-5">
                    <div className="col-4"></div>
                    <div className="col-8">
                        <p></p>
                    </div>
                </div>

                <div className="jumbotron">
                    <div className="row">
                        <div className="col-3">
                            <img
                                src="/img/face.png"
                                className="w-100 img-fluid"
                                alt=""
                                style={photoStyle}
                            />
                        </div>

                        <div className="col-9">
                            <h1 className="display-4 text-center" >
                                Développeur full stack --- junior{" "}
                            </h1>
                            <p className="lead">
                                Actuellement en formation développeur web/php à l'Adrar de
                                Ramonville. Formation diplômante de niveau III (bac +2), plus
                                Openclassroom et autres.
                </p>
                            <hr className="my-4 bg-info" />

                            <p className="lead">
                                {showPluss ? (

                                    <button className="btn btn-dark btn-lg" onClick={showPlus}>Moins {less}</button>

                                ) :
                                    (
                                        <button className="btn btn-dark btn-lg d-block" onClick={showPlus}>Plus {plus}</button>
                                    )
                                }
                            </p>
                            <Spinner laodind={loading} />



                        </div>
                    </div>
                    {/* show plus true */}
                    {showPluss &&

                        <PlusPres />

                    }

                </div>



            </div>

        </>
    );
}

export default Presentation;