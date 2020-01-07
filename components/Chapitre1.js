import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Fiche from './Fiche';
import Menu from './Menu';
import Sound from './Sound';
import Tuto from './Tuto';
import Bubble from './Bubble';
import {UserContext} from './Nextcontext';

var sound = require("../assets/sound_button.mp3");

 class Chapitre1 extends Component  {

    constructor(props) {
        super(props);
        this.reset = null;
        this.state = {
            questionId:this.props.questionId,
            question:this.props.question,
            fiche:"",
            suite:this.props.suite,
            questionsuite:this.props.questionsuite,
            incrementation:-1,
            enter:1,
            suiv:0,
            chapitre:this.props.chapitre,
            play: false, 
        };
        this.url = sound ;
        this.audio = new Audio(this.url);
    
        };


        componentWillReceiveProps(props) {
            this.setState({questionId: props.questionId});
            this.setState({fiche: props.fiche});
            this.setState({suite: props.suite});
            this.setState({questionsuite: props.questionsuite});
            this.setState({incrementation:props.incrementation});
            this.setState({chapitre:props.chapitre});
            this.setState({question: props.question});    

        }


    render() { 
        const {enter,questionId}= this.state;
        return (
            <UserContext.Consumer>
                    { value => ( 
                    <div >         
             
                        { enter > 0 &&
                            <div>
                                <Bubble question={this.state.question}
                                        gonext={this.props.gonext}
                                        suite={this.state.suite}
                                        enter={this.state.enter}
                                        questionId={questionId}
                                        />
                                {this.state.questionId===1&&       
                                    <Tuto/>
                                }  
                                <Menu questionId={questionId} chapitre={this.state.chapitre}/> 
                                <Fiche  suite={this.state.suite}
                                        questionId={questionId}
                                        question={this.state.question}/>  
            
            
                            </div>
                        } 
                     
                    </div> 
                    )}
            </UserContext.Consumer>
        );
    }
}
              
              
export default Chapitre1;
              
  