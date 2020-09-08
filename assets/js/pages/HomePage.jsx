import React from 'react';
import AlertHome from '../components/alertHome/AlertHome';
import Presentation from '../components/presentation/Presentation';



const HomePage = () => {

    
    return (
        <>
        <h1 className="text-center">“A propos de moi”</h1>
        <AlertHome/>
        <Presentation />
        </>
    );
}

export default HomePage;