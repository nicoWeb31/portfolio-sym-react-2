import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import PlusCompTech from './PlusCompTech';
import Spinner from "../utils/Spinner";
import CardTech from "../components/cardTech/CardTech";


const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />

const Tech = () => {

        //state
        const [hover, setHover] = useState(false);
        const [loading, setLoading] = useState(false);
        const [showPluss, setShowPlus] = useState(false);
    



    const stylePhoto = {
        width: '180px',
        height: '180px',

    };


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



    const toggleHover = () => {
        setHover(!hover)
    }


    return (
        <>
            <div className="container p-4" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={linkBorder}>
                <h1 className="text-center">“Compétence / Tecno”</h1>

                <div className="row mt-5">
                    <div className="col-4"></div>
                    <div className="col-8">
                        <p></p>
                    </div>
                </div>

                <div className="jumbotron">
                    <div className="row">
                        <div className='col'></div>
                        <div className="col-10 d-flex justify-content-between">

                            <CardTech bg="green" name="/img/html60.png" level="Html" autre=" utilisation quotidienne" />
                            <CardTech bg="green" name="/img/css360.png" level="Css" autre=" utilisation quotidienne" />
                            <CardTech bg="green" name="/img/js60.png" level="js - jsx -typescript" autre=" utilisation quotidienne" />
                            <CardTech bg="green" name="/img/php60h.png" level="PHP - mysql" autre=" utilisation reguliere" />

                        </div>
                        <div className='col'></div>
                    </div>
                    <hr className="m-4 bg-info" />

                    <div className="row p-5">

                        <div className="col-2"></div>
                        <div className="col-8">

                            <h1 className="display-6 text-center"></h1>
                            <h3 className="lead text-center p-3">Meilleurs amis : </h3>

                            <div className="row  d-flex justify-content-around">

                                <CardTech bg="Light Gray" name="/img/react2.png" level="React" autre="notion correct du fonctionnement global du framwork -- Plusieur petits projets" />
                                <CardTech bg="Light Gray" name="/img/symfony.png" level="Symfony 4/5" autre="notion correct du fonctionnement global du framwork -- Plusieur petits projets -- api/apiplatform" />
                                <CardTech bg="Light Gray" name="/img/angu.png" level="Angular 8/9" autre="notion correct du fonctionnement global du framwork -- creation d'une interface -- rxjs --observable " />

                            </div>


                            <hr className="mx-auto bg-info" />

                            <p className="lead">
                                {showPluss ? (
                                    <button className="btn btn-dark btn-lg" onClick={showPlus}>Moins {less}</button>

                                ) :
                                    (
                                        <button className="btn btn-dark btn-lg" onClick={showPlus}>Plus {plus}</button>
                                    )
                                }
                            </p>
                            <Spinner laodind={loading} />




                            <div className="col-2"></div>


                        </div>

                    </div>

                    {/* show plus true */}
                    {showPluss &&
                        <PlusCompTech />
                    }



                </div>
            </div>
        </>
    );
}

export default Tech;