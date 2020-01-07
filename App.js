import React , {Component} from 'react';
import './App.css';
import Check from './components/Check';
import Commencer from './components/Commencer';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";

class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = { 
    };  
  } 


  render() {  
    return ( 
     

      <Router>
        <Switch>
          <Route exact path="/" component={Commencer} />
          <Route path="/check" component={Check} />
        </Switch>
    </Router>   

  );
}
}

export default App;



