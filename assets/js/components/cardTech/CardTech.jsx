import React from 'react';


const CardTech = ({autre,name,bg,level}) => {


    const cardStyle ={
        maxWidth: '20rem'
        
    }

    return (
        <>


            <div className="card border-warning mb-3" style={cardStyle} >
                <div className="card-header text-center text-white" style={{ backgroundColor: bg }}>{level}</div>
                <div className="card-body bg-secondary">
                <h2>REACT</h2>
                    <img src={name} alt="" className='d-block mx-auto ' width="auto" />
                    <p className="card-text text-center pt-4" >{autre}</p>
                </div>
            </div>



        </>
    );
}

export default CardTech;