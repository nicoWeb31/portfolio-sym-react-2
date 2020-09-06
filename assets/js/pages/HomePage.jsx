import React from 'react';
import Presentation from '../components/presentation/Presentation';
import Realisation from '../components/Realisation';
import Tech from '../components/Tech';



const HomePage = () => {

    
    return (
        <>
        <hr className="mt-1 mb-5 bg-dark shadow w-75" />

        <Presentation />
        {/* <hr className="mt-1 mb-5 bg-dark shadow w-75" /> */}
        {/* <Tech />
        <hr className="mt-1 mb-5 bg-dark shadow w-75" />
        <Realisation/>
        <hr className="mt-1 mb-5 bg-dark shadow w-75" /> */}
        </>
    );
}

export default HomePage;