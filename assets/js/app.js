import React, { useState } from 'react';
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import { HashRouter, Switch, Route, withRouter, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ToastContainer } from 'react-toastify';
import LoginPage from "./pages/LoginPage"
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "./components/context/AuthContext"
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
import PrivateRoute from './components/privateRoute/PrivateRoute';



authApi.setUp();

const App = () => {

    const isAuth = authApi.isAuthenticated();
    const [isAuthenticated, setIsAuth] = useState(isAuth);
    const NavWithRouter = withRouter(NavBar);

    const contextValue = {
        isAhtenticated:isAuthenticated,
        setIsAutenticated:setIsAuth
    }

    return (
        <AuthContext.Provider value={contextValue}>

            <HashRouter>
                <NavWithRouter/>

                <main className="container">
                    <Switch>
                        <Route path="/contact" component={ContactPage} />

                        <Route path="/login" component={LoginPage} />

                        <PrivateRoute path="/messages" isAuth={isAuthenticated} component={MessagePage} />

                        <Route path="/" component={HomePage} />
                    </Switch>

                </main>

                <Footer />

                <ToastContainer />
            </HashRouter>

        </AuthContext.Provider>

    )
}

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement)
