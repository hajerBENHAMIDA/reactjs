import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'stream';
import PopupTuto2 from './PoppupTuto2';  



class Tuto2 extends Component {  

  constructor(props){  
    super(props);  
    this.state = { showPopup: true };  
    }  
    
      togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  
    
      render() {  
    return (  
    <div>  
   
    
    {this.state.showPopup ?  
    <PopupTuto2  
              
              closePopup={this.togglePopup.bind(this)}  
    />  
    : null  
    }  
    </div>  
    
    );  
    }  
    } 

export default Tuto2;