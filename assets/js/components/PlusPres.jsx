import React from 'react';


const PlusPres = () => {

    const cardStyle = {
        maxWidth: '20rem'
    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-9 pt-5">
                        <h5>Qui-suis-je ?</h5>

                        <p>En reconversion depuis plus d'un ans et fort de plusieur année d'experience dans linux, je me suis lancer le defis de decouvrir
    le vaste monde du web, autodidacte et interessé pas plein de domaine j'ai jetter mon devollu sur un dommaine qui m'a toujours semblé inaccessible </p>

                    </div>
                    <div className="col-3">
                        <div className="card border-danger mb-3" style={cardStyle}>
                            <div className="card-header">Cominge - HauteGaronne </div>
                            <div className="card-body">
                                <h4 className="card-title">Riot - Nicolas</h4>
                                <p className="card-text">37 ans, centre d'interet : Sport de montagne,bricolage,veille techno, linux, etc...</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}

export default PlusPres;