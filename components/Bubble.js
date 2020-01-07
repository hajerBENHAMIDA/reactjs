import React from 'react';
import Question from './Question'; 
import PropTypes from 'prop-types';
import { tsConstructorType } from '@babel/types';
import {UserContext} from './Nextcontext';
import Next from './Next';
import {FicheData} from './QuizData';

class Bubble extends React.Component  {

    constructor(props){  
        super(props);  
        this.state = {
            question : props.question,
            incrementation:14,
            enter:props.enter,
            suiv:0,
            gosuite:0,
            suite:props.suite,
            questionsuite:this.props.questionsuite,
            info:props.info,
            id:props.id,
            disabled:props.disabled, 
            questionId:props.questionId,
            suite:props.suite,
            questionsuite:props.questionsuite,
            fiche:props.fiche,
            incrementation:0,
            suivop:-1,
            suivfin:-1,
            suivant:false,
            nextinfo:false,
            text:'',
            animation:true,
            question_score:props.question_score

        };    
    }

    componentWillReceiveProps(props) {
        this.setState({fin: props.fin});
        this.setState({suite: props.suite});
        if ( (this.state.incrementation===0) ) {
            this.setState({question: props.question});    
        }
        this.setState({disabled: props.disabled});
        this.setState({question_score: props.question_score});
        this.setState({questionId: props.questionId});
        this.setState({questionsuite: props.questionsuite});
        this.setState({fiche: props.fiche});
        if (this.state.disabled===true){
            this.setState({id: props.id});

        }
        
    }

    componentDidUpdate(prevProp,prevState){
        if((this.state.suiv >= 1) && (this.state.question !== prevState.question)){
               this.setState(()=> {return{incrementation:this.state.incrementation+1};}) 
        }
        if (this.state.id !== prevState.id){
            this.setState(()=> {return{nextinfo:false};})
        }       
    } 
       
    /*****************************suite option questionId 21*************************************/
        nextinfo(){
            this.setState(prevState => ({nextinfo:true,}))
        }

    /*********************goto next question********************** */
    suite(f,c){
      
        if (this.state.gosuite === 2){
            if(this.state.suiv >= 0){                
                this.setState(prevState => ({
                suiv:this.state.suiv+1,           
                
                        })
                            ,()=>{
                                
                                this.setState(prevState => ({
                                question:this.state.suite[this.state.incrementation],
                            }),()=>{
                                if(this.state.incrementation==(this.state.suite).length-1){
                                  
                                
                                    this.setState({suivant:true});
                                    
                                }
                            })
                                  
                                
                               

                                }
                        
                             )
    c();                 
            }
       
           

        }
        else{
            this.props.gonext() ;
            this.setState(prevState => ({
                gosuite: this.state.gosuite+1
            }))
            
        }
        
    }

    suiteee(f){this.props.gonext() ;}
    nextSuite(f){
        this.setState(prevState => ({
            suivop:this.state.suivop+1,
            incrementation:this.state.incrementation+1,
            id:this.state.incrementation,
            info:this.state.suite,
        }),()=>{
            if(this.state.incrementation === this.state.suite.length){
             f() }
        } );
      }
    ensuite(f){
         this.props.gonext();   
         f()
      }



    render (){
        const{suivop,info,disabled,id,questionId,suite} = this.state ;
        return(
            <UserContext.Consumer>
            { value => ( 
                <div className="bubble" id="bubble">
                    {(questionId != 1) && (questionId != 2) &&
                        (questionId != 20) && (questionId != 23) 
                        && (questionId != 26) ?
                        <Arrow />:null}

                    <Question question={this.state.question}/>

                    {this.state.enter > 0 &&
                        <div    className={`btn ${(this.state.suiv <= 3 ?'suite':'hidden' )}`}
                                onClick={()=>this.suite(value.toggleindex,value.incrimente)}></div>
                    }
                    {this.state.suivant== true &&
                        <div    className='next2'
                                onClick={()=>this.props.gonext()}></div>
                    }

                    {((this.state.questionId ===9) ||(this.state.questionId ===10)||(this.state.questionId ===11)||(this.state.questionId === 14)||(this.state.questionId === 20)||(this.state.questionId === 23)||(this.state.questionId === 24)) &&
                        <div    className="suite"
                                onClick={()=>this.suite(value.toggleindex)}></div>
                    }

                    { disabled=== true && this.state.nextinfo=== false &&
                            <div>
                                <Question question= {info[id]}/>

                            </div>
                    }
                    { 
                            this.state.nextinfo ===true && 
                            <div>
                            <Question question= {info[5]}/>

                        </div>    
                    }
                    { this.state.questionId ===21 && id==3 &&
                        
                        <div    className={`btn ${(this.state.nextinfo==false? 'sss suite':'hidden' )}`} 
                                onClick={()=>this.nextinfo()}>
                        </div>
                            
                    }
                    {disabled === false  &&  this.state.nextinfo=== false &&
                        <div>
                            {
                                <div>
                                    {suivop <= suite.length && 
                                        <div>
                                        <Question question= {info[id]}/>
                                        </div>
                                    }
                                    <div    className={`btn ${(suivop < suite.length-1?'sss suite':'hidden' )}`}
                                            onClick={()=>this.nextSuite(value.toggleindex)}></div>
                                </div>
                            }
                            {((questionId === 5) || (questionId === 21))&&
                                <div>
                                    <div    className="sss suite"
                                            onClick={()=>this.ensuite(value.toggleindex)}></div>
                                </div>

                            }


                            </div>
                    }
                                    
                </div>


            )}
            </UserContext.Consumer>
        
        ) 
    }
}

/*****************arrow design *************** */
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

export default Bubble; 
