
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'stream';



class Question extends Component {  

  constructor(props){  
    super(props);  
    this.state = { 
      question: props.question,

    };  
  }  
  componentWillReceiveProps(props) {
    this.setState({question: props.question}); 
}

  render() {  
    
    return (  
      <div className="question " dangerouslySetInnerHTML={{ __html:this.state.question}}></div>
    )}


} 
export default Question;

