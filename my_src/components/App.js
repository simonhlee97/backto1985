import React, { Component } from 'react';
import '../styles/App.css';
import Home from './HomeComponent';
import Login from './LoginComponent';
import About from './AboutComponent';
import News from './News';
import Footer from './Footer';
import NoMatch from './NoMatch';
import ContainedButtons from './ContainedButtons';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TeacherPortal from '../TeacherPort/TeacherPortal';
// import GradeBook from '../TeacherPort/GradeBook';
// import Students from '../TeacherPort/Students';
import firebase, { auth } from '../firebase/firebase';
import SignUpPage from './signup/SignUp';

import {CSSTransition, TransitionGroup} from 'react-transition-group';

import * as routes from '../constants/routes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

        this.login = this.login.bind(this); // <-- add this line
        this.logout = this.logout.bind(this); // <-- add this line
    }

    handleChange(e) {
        /* ... */
    }
    logout() {
        // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
    }
    login() {
        auth.signInWithEmailAndPassword()
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }
    
    

    render() {

        
        return (
            <Router>

                <Route render={({ location }) => console.log(location) || (

                <div className="App">

                    <ContainedButtons />

                    <hr />
                    
                        <div className="container">

                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={300}
                                    classNames='fade'>
                                    <Switch location={location}>
                                        <Route exact path={routes.HOME} component={() => <Home />} />
                                        <Route exact path={routes.ABOUT} component={() => <About />} />
                                        <Route exact path={routes.NEWS} component={() => <News />} />
                                        <Route exact path={routes.LOGIN} component={() => <Login />} />
                                        <Route exact path={routes.TEACHER} component={TeacherPortal} authenticated={this.state.authenticated} />
                                        

                                        <Route component={NoMatch} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>

                        </div>
                
                    <Footer />

                </div>
                )} />
            </Router>
        );
    }
}


export default App;