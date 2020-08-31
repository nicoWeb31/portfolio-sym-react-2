import React, { useState } from 'react';
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ToastContainer} from 'react-toastify';
import LoginPage from "./pages/LoginPage"
import 'react-toastify/dist/ReactToastify.css';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import authApi from './service/authServise';
import MessagePage from './pages/MessagePage';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


//authApi.setUp();

const App = () => {

    const isAuth = authApi.isAuthenticated();
    const[isAuthenticatd, setIsAuth] = useState(isAuth)

    return (

        <HashRouter>
            <NavBar isAuth ={isAuthenticatd} onLogout={setIsAuth}/>


            <main className="container">
                <Switch>
                    <Route path="/contact" component={ContactPage} />
                    
                    <Route path="/login" component={LoginPage} />

                    <Route path="/messages" component={MessagePage} />

                    <Route path="/" component={HomePage} />


                </Switch>

            </main>


            <Footer/>

        <ToastContainer/>
        </HashRouter>
        




    )


}

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement)
