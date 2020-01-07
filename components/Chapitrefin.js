import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Fiche from './Fiche';
 import Menu from './Menu';
import Question from './Question';
import Questions from './Question';
import Sound from './Sound';
import Next from './Next';
import Tuto from './Tuto';
import Popup from './Popup';
import Bubble from './Bubble';
import Info from './Info';
import {UserContext} from './Nextcontext';

 class Chapitrefin extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            questionId:this.props.questionId,
            question:this.props.question,
            fiche:"",
            suite:this.props.suite,
            questionsuite:this.props.questionsuite,
            fintuto:false,
            suiv:-1,
            suiteaffiche:this.props.question

        };
  
        };

        componentWillReceiveProps(props) {
            this.setState({questionId: props.questionId});
            this.setState({question: props.question});
            this.setState({fiche: props.fiche});
            this.setState({suite: props.suite});
            this.setState({questionsuite: props.questionsuite});

        }

/************next info*******************/
        nextSuite(f){        
            this.setState(prevState => ({suiv:prevState.suiv+1}))
        } 
        hidden_sound(){
            document.getElementsByClassName("display")[0].style.display= "none";
        }

render() { 
    const {questionId,fiche}= this.state;
    return (
        <UserContext.Consumer>
        { value => ( 
            <div className='intro'>               
                {this.state.suiv ===-1 &&
                    <div>
                        <Bubble question={this.state.question}
                        questionId={questionId}/>
                        <Fiche  fiche={fiche}
                                questionId={questionId}/>
                        
                            
                        <div    className = {`suitefin1 ${(this.state.suiv < this.state.suite.length-1 ?'suitefin':'hidden' )}`}
                                onClick={()=> (this.nextSuite(value.toggleindex)) }></div>
                    </div>

                }
                {this.state.suiv === 0 &&
                    <div>
                        <Bubble question={this.state.suite[this.state.suiv]}
                                questionId={questionId}/>
                        <Fiche  fiche={fiche}
                                questionId={questionId}/>
                        
                            
                        <div    className = {`suitefin2 ${(this.state.suiv < this.state.suite.length-1 ?'suitefin':'hidden' )}`}
                                onClick={()=> (this.nextSuite(value.toggleindex)) }></div>
                    </div>

                }
                {this.state.suiv === 1  &&
                    <div>
                        <Bubble question={this.state.suite[this.state.suiv]}/>
                        <div    className = "rejouer"
                                onClick={()=>window.location.reload(false) }></div>

                        {this.hidden_sound()}
                    </div>

                }



            </div> 
        )}
      </UserContext.Consumer>

    );
}
}
  
  
export default Chapitrefin;
  