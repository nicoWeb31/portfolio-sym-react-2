import React from 'react';
import "./plusCompTech.style.css"


const PlusCompTech = () => {

    

    return (
        <div className="row">

<div className="col"></div>
        <div className="jumbotron col-12 col-md-8">

            <h2 className=" text-center p-5 h1">Outils ! </h2>
            <div className="d-flex justify-content-around _respCont">
                <img src="/img/github.svg" alt="git" width="90px" className="img-fluid _imgComp"/>
                <img src="/img/boot.svg" alt="bootstrap" width="90px" className="img-fluid _imgComp"/>
                <img src="/img/mint.png" alt="linux" width="90px" className="img-fluid _imgComp"/>
                <img src="/img/post.svg" alt="postman" width="90px" className="img-fluid _imgComp"/>

            </div>



        </div>
<div className="col"></div>

        </div>
    );
}

export default PlusCompTech;