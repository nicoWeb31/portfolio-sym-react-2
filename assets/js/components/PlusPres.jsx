import React from 'react';


const PlusPres = () => {

    const cardStyle = {
        maxWidth: '20rem'
    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-12 col-md-9 pt-5">
                        <h5>Qui-suis-je ?</h5>

                        <p>En reconversion depuis plus d'un an et fort de plusieurs années d'expérience sur Linux, je me suis lancé le défi de découvrir
    le vaste monde du web, autodidacte et interessé par plein de domaine, j'ai jeté mon devolu sur un domaine qui m'a toujours semblé inaccessible </p>

                    </div>
                    <div className="col-12 col-md-3 m-4">
                        <div className="card border-danger mb-3" style={cardStyle}>
                            <div className="card-header">Comminge - Haute-Garonne </div>
                            <div className="card-body">
                                <h4 className="card-title">Riot - Nicolas</h4>
                                <p className="card-text">37 ans, centre d'intêret : Sport de montagne,bricolage,veille techno, linux, etc...</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}

export default PlusPres;