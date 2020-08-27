import React from 'react';

const CardReal = ({bg,Tech,link,img,description}) => {


    const cardStyle ={
        maxWidth: '20rem'
        
    }


    return (
        <div className="card border-warning mb-3" style={cardStyle} >
            <div className="card-header text-center text-white" style={{ backgroundColor: bg }}>{Tech}</div>
            <div className="card-body bg-secondary">

                <a href={link}>
                    <img src={img} alt="" className='d-block mx-auto ' width="auto" />
                </a>

                {/* <h4 className="card-title text-center">{this.props.name}</h4> */}
                <p className="card-text text-center pt-4" >{description}</p>
            </div>
        </div>
    );
}

export default CardReal;