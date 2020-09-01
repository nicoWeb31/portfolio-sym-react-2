import React from 'react';
import { Redirect,Route } from 'react-router-dom';

const PrivateRoute = ({path,component,isAuth}) => {
    return isAuth ? <Route path={path} component={component}/> : <Redirect to="/login"/>
    
}

export default PrivateRoute;