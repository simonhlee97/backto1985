import React, { Component } from 'react';
import '../styles/App.css';

import Home from './HomeComponent';
import Login from './LoginComponent';
import About from './AboutComponent';
import News from './News';
import NoMatch from './NoMatch';
import TextButtons from './TextButtons';

// import route Components here
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div className="container">
                        
                        <TextButtons />
                        
                        <hr />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/news" component={News} />
                            <Route path="/login" component={Login} />
                            <Route component={NoMatch} />
                        </Switch>


                    </div>
                </div>
            </Router>
        );
    }
}


export default App;