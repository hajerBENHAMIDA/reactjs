import React from 'react';
import {UserContext} from './Nextcontext';

class Next extends React.Component {  

  constructor(props){  
    super(props);  
    this.state = {
        gonext:props.gonext,
        questionId:props.questionId, 
    };  
  }  
  componentWillReceiveProps(props) {
    this.setState({gonext: props.gonext});
    this.setState({questionId: props.questionId});
  }

  render() {
   
    return (  
      <UserContext.Consumer>

      { value => (   
        value.index  && 
      <div >

        <div className ={`btn ${(this.state.questionId != 25 ?'next':'terminer' )}`}
                onClick={()=> {this.state.gonext(); value.toggleindex() ;} }>
        </div>

      </div >)
      }
      </UserContext.Consumer>

              );  
            }  
          }  

export default Next; 


