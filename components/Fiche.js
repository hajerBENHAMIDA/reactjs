import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'stream';
import PopupFiche from './PopupFiche';  
import {QuizData} from './QuizData';

class Fiche extends Component {  

    constructor(props){  
      super(props);  
      this.state = { 
        showPopup: false, 
        questionId:props.questionId,
        suite:props.suite,
        question:props.question,
      };  
    }  
  
    togglePopup() {  
          this.setState({  
            showPopup: !this.state.showPopup  
          });  
    }  
    componentWillReceiveProps(props) {
      this.setState({questionId: props.questionId});
      this.setState({suite: props.suite});
    }
  render() {  
    return (  
      <div>  
        <div  className = "fiche"
              onClick={this.togglePopup.bind(this)}>
              </div>  

              {this.state.showPopup ?
                  <div>

                    <PopupFiche  
                    question={this.state.question}
                        suite={this.state.suite}
                          questionId={this.state.questionId}
                          closePopup={this.togglePopup.bind(this)}  

                    />
                 
        </div>: null}  
      </div>  
  
        );  
    }  
  }  

export default Fiche;

