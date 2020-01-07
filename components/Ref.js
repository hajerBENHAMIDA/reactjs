import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'stream';
import Popup from './Popup';  



class Ref extends Component {  

  constructor(props){  
    super(props);  
    this.state = { 
      showPopup: false,
      reference: props.reference,
      comptinfo: props.comptinfo,
      toutref:props.toutref,
      questionId:props.questionId,

    };  
  }  

  togglePopup() {  
    this.setState({  
      showPopup: !this.state.showPopup  
    });  
}    
  componentWillReceiveProps(props) {
        this.setState({reference: props.reference});
        this.setState({comptinfo: props.comptinfo}); 
        this.setState({toutref: props.toutref}); 
        this.setState({questionId: props.questionId}); 
  }

  render() {  
    if (this.state.comptinfo<=-1)
    return ( <div></div>)
      return (  

          <div>  
            <div className = "ref"
                onClick={this.togglePopup.bind(this)}> 
            </div>  
            
         
            {(this.state.questionId==9)?
              <div> 
         
                  {this.state.showPopup &&
                    <div>
                  
                   </div>&&
                    <Popup  
                        infoglobal={this.state.toutref}
                        closePopup={this.togglePopup.bind(this)}/>
                  }
              </div>
            :
                  <div>
                  {this.state.showPopup &&  
                    <Popup  
                    infoglobal={this.state.reference[this.state.comptinfo]}
                    closePopup={this.togglePopup.bind(this)}  
                    />
                  }
                </div>
          }
  
          
        </div>  
  
    );  
  }  
  }  

export default Ref;
