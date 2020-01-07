import React, {Component} from 'react';

import PropTypes from 'prop-types';
 import Question from './Question';
 import Options from './Options';
 import Sound from './Sound';
 import Fiche from './Fiche';
 import Menu from './Menu';
 import Tuto2 from './Tuto2';
 function Questions(props) {

    return (

        <div  key={props.questionId}>

            <Options
                options={props.options}
                questionId={props.questionId}
                answer ={props.answer}
                info ={props.info}
                question={props.question}
                answers={props.answers}
                infoglobal={props.infoglobal}
                infoId={props.infoId}
                suite={props.suite}
                type={props.type}
                incrementation={props.incrementation}
                gonext={props.gonext}
                reference={props.reference}
                infobtn={props.infobtn}/>

                { (props.questionId==4)&&
                    <Tuto2/>
                                    
                } 

        </div>
    );
  }
  
  Questions.propTypes = {
    answer: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    answers: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    info:PropTypes.array.isRequired,
    infoglobal:PropTypes.array.isRequired,

  };
  
  export default Questions;
  
