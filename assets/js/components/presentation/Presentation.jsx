import React, { Component, Fragment, useState } from "react";
import Spinner from "../../utils/Spinner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import PlusPres from "../plusPres/PlusPres";
import "./presentation.style.css"

const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />


const Presentation = () => {


    const [loading, setLoading] = useState(false);
    const [showPluss, setShowPlus] = useState(false);



    //show plus
    const showPlus = () => {
        //console.log('showplus ok')
        setLoading(true)

        setTimeout(() => {
            setLoading(false);
            setShowPlus(!showPluss);


        }, 300);

    }


    return (

        <>
            <div className="p-4 ">


                <div className="jumbotron _jumbo">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img
                                src="/img/me.jpg"
                                className="w-100 img-fluid _photoStyle"
                                alt="img"

                            />
                        </div>

                        <div className="col-12 col-md-9">
                            <h1 className="display-4 text-center mb-4" >
                                "Développeur full stack"
                            </h1>
                            <p className="_font-pres">
                                Concepteur développeur d'application web et web mobile. Formation passée à l'Adrar de
                                Ramonville. Formation diplômante de niveau II (bac +3).
                            </p>
                            <p className="_font-pres">
                                Ainsi qu'une dizaine de certifications chez Openclassroom et Udemy.
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

                            {/* show plus true */}
                            {showPluss &&

                                <PlusPres />

                            }


                        </div>
                    </div>

                </div>

                <hr className="mt-1 mb-5 bg-dark shadow w-75" />
                
                <a href="img/cv.pdf" download  ><img src="img/icon-cv.jpg" alt="icon cv" className="_iconCv" /></a>
                <h3 className="text-center">Cv pdf</h3>
                <hr className="mt-1 mb-5 bg-dark shadow w-75" />
                        
                        

            </div>

        </>
    );
}

export default Presentation;