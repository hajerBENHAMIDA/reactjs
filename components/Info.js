import React, {Component} from 'react';
import Popup from './Popup';  

class Info extends Component {  

  constructor(props){  
    super(props);  
    this.state = { 
      showPopup: false,
      infoglobal: props.infoglobal,
      comptinfo: props.comptinfo,
      index:props.index,
      toutref:props.toutref,
      questionId:props.questionId 

    };  
  }  

  togglePopup() {  
     if(
         (
            ( (this.state.infoglobal.length!=0)||(this.state.toutref.length!=0)) &&
               (this.state.comptinfo>-1) && (this.state.infoglobal[this.state.comptinfo]!='')
         )
       ||(this.state.questionId==13) ||(this.state.questionId==16) ||(this.state.questionId==14)|| (this.state.questionId==22)) 
       {
        this.setState({  
          showPopup: !this.state.showPopup  
        });  
       }
      
  }  
  verif() { 
      if(
          (
            ( (this.state.infoglobal.length!=0)||(this.state.toutref.length!=0)) &&
                (this.state.comptinfo>-1) && (this.state.infoglobal[this.state.comptinfo]!='')
        )||(this.state.questionId==13) ||(this.state.questionId==16) ||(this.state.questionId==14)|| (this.state.questionId==22))
          {
            var el1 =document.getElementsByClassName('info');
            el1[0].classList.add('info_full');
            el1[0].style.display = "block";
          }
      else{
        var el1 =document.getElementsByClassName('info');
        el1[0].style.opacity = "0.5";
        el1[0].classList.remove('info_full');
      }
    
  }   
  componentDidUpdate(){
     this.verif()
    if ((this.state.questionId==4)&&(this.state.comptinfo>-1))
      {
      var el =document.getElementsByClassName('info');
    
       el[0].classList.add('info_full');

      } 
  }
  componentWillReceiveProps(props) {
        this.setState({infoglobal: props.infoglobal});
        this.setState({comptinfo: props.comptinfo});
        this.setState({index: props.index}); 
        this.setState({toutref: props.toutref}); 
        this.setState({questionId: props.questionId}); 
  }

render() {  
  return (  
    
        <div> 
  
          <div className = "info"
              onClick={this.togglePopup.bind(this)}> 
          </div>  
      {console.log(this.state.comptinfo,"comptinfo")}
          {(this.state.index===true || this.state.questionId==13|| this.state.questionId===15 || this.state.questionId===16 || this.state.questionId===14|| this.state.questionId===22)?
            <div> 
                {this.state.showPopup &&
                  <Popup  
                      infoglobal={this.state.toutref}
                      closePopup={this.togglePopup.bind(this)}/>
                }
            </div>
          :
            <div>
                {this.state.showPopup &&  
                  <Popup  
                        infoglobal={this.state.infoglobal[this.state.comptinfo]}
                        closePopup={this.togglePopup.bind(this)}/>
                }
            </div>
          }  
      </div>  

  );  
}  
}  
export default Info;