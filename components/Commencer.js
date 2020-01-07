import React , {Component} from 'react';
import Check from './Check';
import {QuizData} from './QuizData';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";



class Commencer extends Component {  
  constructor(props){  
    super(props);  
    this.new_window=null;
    this.state = { 
    questionId:0,
    question: '',
    text:'',
    width:  1000,
    height: 630,
    href:""



    };  
  } 


/****************************** */
  LoadQuiz = () => {
    const {questionId}= this.state;
    this.setState(()=> {
        return{
            question:QuizData[questionId].question,
           
        };

    })
  }

componentWillMount(){
    this.LoadQuiz();
    this.setState({
      href:window.document.location.href
    })
  };
/**************New window************ */   
  opned(new_window){
    window.document.body.remove();
    window.document.location.replace(this.state.href);

       new_window=window.open("/check", "_blank",'width=1000,height=630');
    
      var interval =  setInterval(() => {    
        var el1=new_window.document.getElementsByClassName('case');
        if(el1.length !== 0 ) {
            el1[0].style.display = "none" ;
            clearInterval(interval) ;
        }

       }, 50);
    }

  render() {  
    return ( 
     
      
    <div className='medecinzoome'>

      <Router>
      
       <div className="case" >
       <div>
       <div className="bubble" id="bubble">
             <div class="question">{this.state.question}</div>
             <Arrow />

        </div>

       
       <Link to="/check" query={{test: this.props.question}} onClick={(e)=>this.opned(this.new_window)}>  <div id="suite"  className={`start`} >  </div></Link>
       
     
   </div>

    
       </div>
       
              <Route path='/check' exact component={Check} width={this.state.width} height={this.state.height}/>
       
             
      </Router>
 
    

      </div>
      
  


  );
}
}
function Arrow(props) {
    return (
        <div className="arrow">
                <svg id="Layer_1" data-name="Layer 1"   viewBox="0 0 75.17 76.77">
        <defs>
         
          <linearGradient id="Degradado_sin_nombre_91" x1="23.17" y1="41.27" x2="75.17" y2="41.27" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7b7c9a"></stop><stop offset="1" stopColor="#9f9fc9"></stop></linearGradient>
          </defs>
          <polygon className="cls-1" points="0 0 74.17 75.77 32.28 0 0 0"></polygon>
          <polyline className="cls-2" points="24.17 24.77 74.17 75.77 36.17 6.77"></polyline>
        </svg>
        </div>
    )
  }
export default Commencer;