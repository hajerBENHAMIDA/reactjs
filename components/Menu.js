import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Options from './Options';

class Menu extends React.Component {  

    constructor(props){  
      super(props);  
      this.state = { 
        questionId: props.questionId,
        gonext: props.gonext,
        index:props.index,
        chapitre:props.chapitre,
        height_menu_visited:10
  
      };  
    }  
    componentWillReceiveProps(props) {

      this.setState({index: props.index}); 
      this.setState({chapitre: props.chapitre}); 

}
  componentDidMount() {
    const {chapitre} = this.state;
    var text = document.createElement("P"); 
    
    var com=['Présentation du cas','Diagnostic','Examens cliniques','Diagnostic','Examens complémentaires','Prise en charge','Bactéries responsables','Mécanisme de résistance','Risque de résistance','Traitement de première intention','Traitement de contrôle']          
  
    text.innerText = com[chapitre];      

      
    var elm =  document.querySelectorAll("div.chapitre")[chapitre];
      
    elm.append(text);     


  }
  componentDidUpdate(prevProp,prevState){
      var elm2 =  document.querySelectorAll("div.chapitre")[this.state.chapitre];
      if(!elm2.firstChild){
        var text = document.createElement("P"); 
    
          var com=['Présentation du cas','Diagnostic','Examens cliniques','Diagnostic','Examens complémentaires','Prise en charge','Bactéries responsables','Mécanisme de résistance','Risque de résistance','Traitement de première intention','Traitement de contrôle']          
          text.innerText = com[this.state.chapitre];      
          var elm =  document.querySelectorAll("div.chapitre")[prevState.chapitre];
    
      
              elm.append(text);     
      }
      if(this.state.chapitre !== prevState.chapitre){
        while (elm.firstChild) {
           elm.removeChild(elm.firstChild);
        }
          this.setState(prevState => ({
             height_menu_visited: prevState.height_menu_visited+9,
                 
             }));
            document.getElementsByClassName('menu_visited')[0].classList.add("menu_tran") ;
      }
  } 

render() {  
        const {questionId} = this.state;
        return (      
          <div className="Menu">

          <div className="menu">    
           <div className="chapitre chapitre0"></div>
           <div className="chapitre chapitre1 " ></div>
           <div className="chapitre chapitre2 " ></div>
           <div className="chapitre chapitre3 " ></div>
           <div className="chapitre chapitre4" ></div>
           <div className="chapitre chapitre5" ></div>
           <div className="chapitre chapitre6" ></div>
           <div className="chapitre chapitre7 " ></div>
           <div className="chapitre chapitre8 " ></div>
           <div className="chapitre chapitre9 " ></div>
           <div className="chapitre chapitre10 " ></div>
         </div>

         <div className="menu_visited"  style={{
          height: this.state.height_menu_visited+"%" }}>

        </div>
      
      </div>

         );  
    }  
  }  



export default Menu; 