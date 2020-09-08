import React, { Component, Fragment, useState } from "react";
import Spinner from "../../utils/Spinner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import PlusPres from "../plusPres/PlusPres";
import "./presentation.style.css"

const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />


const Presentation = () => {

    //state
    const [hover, setHover] = useState(false);
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
                                src="/img/face.png"
                                className="w-100 img-fluid _photoStyle"
                                alt=""

                            />
                        </div>

                        <div className="col-12 col-md-9">
                            <h1 className="display-4 text-center" >
                                "Développeur full stack"
                            </h1>
                            <p className="_font-pres">
                                Concepteur développeur d'application web et web mobile. Formation passée à lAdrar de
                                Ramonville. Formation diplômante de niveau II (bac +3), plus une dizaine de certifications chez
                                Openclassroom et Udemy.
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



            </div>

        </>
    );
}

export default Presentation;