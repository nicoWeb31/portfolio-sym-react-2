import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Spinner from "../../utils/Spinner";
import FlipCardTech from "../cardTech/FlipCardTech";
import PlusCompTech from '../PlusCompTech';

//css
import "./tech.style.css" 


const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />

const Tech = () => {


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
            <div className=" p-4" >
                <h1 className="text-center">“Compétence / Techno”</h1>

                <div className="jumbotron _jumbotron">
                    

                    <div className="row p-5">

                        <div className="col-2"></div>
                        <div className="col-8">

                            <h1 className="display-6 text-center"></h1>
                            <h2 className="text-center p-3">Framework : </h2>

                            <div className="row  d-flex justify-content-around">


                                <FlipCardTech version="16+" bg="Light Gray" name="/img/react2.png" level="React" autre="Notion correct du fonctionnement global du framework, Hook, Context, -- Plusieurs projets" />
                                <FlipCardTech version="4/5" bg="Light Gray" name="/img/symfony.png" level="Symfony 4/5" autre="Notion correct du fonctionnement global du framework -- Plusieurs projets -- api/apiplatform" />

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