import React from 'react';
import "./plusPres.style.css";


const PlusPres = () => {

    const cardStyle = {
        maxWidth: '20rem'
    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-12 col-md-9 pt-5">
                        <h3>Qui suis-je ?</h3>

                        <p className="_font-pres-plus">En reconversion depuis plus d'un an et fort de plusieurs années d'expérience sur Linux, je me suis lancé le défi de découvrir
    le vaste monde du web, autodidacte et interessé par de multiple domaines, j'ai jeté mon dévolu sur un domaine qui m'a toujours semblé inaccessible </p>

                    </div>
                    <div className="col-12 col-md-3 mt-4">
                        <div className="card border-danger mb-3" style={cardStyle}>
                            <div className="card-header text-center _font-pres-plus">Comminges - Haute-Garonne </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">Riot - Nicolas</h4>
                                <p className="card-text _font-pres-plus">37 ans, centre d'intêret : Sport de montagne,bricolage,veille techno, linux, etc...</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}

export default PlusPres;