import React from 'react';

import './App.css';
import '../../Assets/Css/Responsive.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage'



const App = () => { 

  return (
    <div className="App br-app" id='scrool'>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/home' component={Homepage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
