    
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import {UserContext} from './Nextcontext';
import {FicheData} from './QuizData';

class Options extends React.Component {
  constructor (props){
      super(props);
      this.state = {
        answer: props.answer,
        options:props.options,
        question:props.question,
        questionId:props.questionId,
        answers: props.answers,
        x: -1,
        i:1,
        infoglobal:props.infoglobal,
        disabled:true,
        first_click: true,
        suite:props.suite,
        type:props.type,
        incrementation:props.incrementation,
        questionsuite:this.props.questionsuite,
        question_score:'true',
        inc:0,
        reference:props.reference,
        incrimentaion_click:0,
        target_score:'',
        info:props.info,
        display:'block',
    }
  }

  componentWillReceiveProps(props) {
    this.setState({answer: props.answer});
    this.setState({options:props.options});
    this.setState({question:props.question});
    this.setState({questionId:props.questionId});
    this.setState({answers:props.answers});
    this.setState({infoglobal:props.infoglobal});
    this.setState({suite:props.suite});
    this.setState({type:props.type});
    this.setState({incrementation:props.incrementation});
    this.setState({questionsuite:props.questionsuite});
    this.setState({reference:props.reference});
    this.setState({info:props.info});

 

  }
  
  suite(f){this.props.gonext() ;}
  infobtn=(id)=>{
    this.props.infobtn(id);
  }
// change label when input checked
changed = (id,e,option,f,remplir_tab,remplir_array) => {
  e.persist();
  var el_target = e.target.nextElementSibling.firstElementChild ;
  /**********next questionid without bouton suivant ******/
  if((this.state.questionId==8&&id==4)||(this.state.questionId==13)){
   
    this.props.gonext() ;
  }
  /**************** interdit de cliquer si la reponse est correcte   **************/

  if((this.state.type=='qcm')&&(e.target.checked == true )&&(this.state.disabled == false) ){
    e.preventDefault();
    return ;
    }
  /********************************* une seule click check ***********************/
  
          if(e.target.checked==false){
        e.preventDefault();
        return ;
      }

  this.setState(prevState => ({
    x: id,
    }));
  this.setState(prevState => ({
    answer: option
  }),()=>{
    /*********add info in fiche popup***********/
    if((this.state.questionId===7)&&(this.state.x===0) ){remplir_array(FicheData[5].fiche);}    

/****************************chercher la bonne reponse***************************************** */
      if ((this.state.answers).indexOf(this.state.answer) > -1){
                if (this.state.type=='qcm'){
                  el_target.classList.remove("check_change");
                  el_target.classList.add("vert");
                }
                this.setState(prevState => ({
                  i: prevState.i+1,   
                }));
                if ((this.state.type!='click')&&(this.state.i === (this.state.answers).length)){

                  this.setState(prevState => ({
                          disabled: false
                    }),function(){

                          if ((this.state.questionId=== 18)||(this.state.questionId=== 25)){
                            f();                   
                          }
                          if(this.state.questionId===7){remplir_tab(FicheData[4].fiche);}

                        });
                }
        }else{

                  if (this.state.type==='qcm'){
                        el_target.classList.remove("check_change");
                        el_target.classList.add("rouge");
                      if(this.state.questionId === 19){
                        this.setState(prevState => ({   
                          disabled: false  
                        }));
                        e.preventDefault();
                        f();
                        return ;
                      }
                  }
        }
        this.infobtn(id);

             if (this.state.questionId===19){
              f();  
             }
          });


/****************************modifier les classes des cercles***************************************** */
  if(this.state.type=='click'){
    el_target.classList.add("clicked");
    el_target.classList.remove("clickme0");

    if(this.state.questionId===5){remplir_tab(FicheData[3].suitefiche[id]);}  
    if(this.state.questionId===12){remplir_array(FicheData[6].suitefiche[id]);}    
    this.setState(prevState => ({
      incrimentaion_click: prevState.incrimentaion_click+1,   
    }));
/*****************pointeur bouton suivant avec disabled *************************/
    if(((this.state.questionId==12)&&(this.state.incrimentaion_click===3))||((this.state.questionId==5)&&(this.state.incrimentaion_click===4))){
      this.setState(prevState => ({   
        disabled: false  
      }));
    }
  }
/*****************controler le nombre de clique pour calculer le score *************************/
  if(this.state.type=='score'){
   
   if(e.target.checked==true){
    this.setState(prevState => ({
      inc: prevState.inc+1
       
   }));
 
  }
 
 }
}

/******************************Calcule score****************************/
    /************************test sur le choix qui contient 1***************************** */
    checkAnswer(id,e){
      this.setState({display: 'block'});
      if(this.state.type=='score'&&id<3){
          e.target.classList.remove("case_1_noselected");
          e.target.classList.add("false");
          this.setState({question_score: false});
          setTimeout(() => {
            e.target.nextElementSibling.nextElementSibling.classList.remove("case_0_noselected");
            e.target.nextElementSibling.nextElementSibling.classList.add("true");
            this.setState({display: 'none'});
          
              },1500 )
        
      }
      if(this.state.type=='score'&&id==3){
        e.target.classList.remove("case_0_noselected");
        e.target.classList.add("true");
        this.setState({question_score: true});
  
      }
      e.persist();
      this.setState(prevState => ({compteurinfo: id,}));
      this.setState(prevState => ({x: id,})); 
      return(true)
    }
        /************************test sur le choix qui contient 0***************************** */
  
    score(id,e){
      this.setState({display: 'block'});
      e.persist();
      if(this.state.type=='score'&&id<3){
        e.target.classList.remove("case_0_noselected");
        e.target.classList.add("true");
        this.setState({question_score: true});
      }
      if(this.state.type=='score'&&id==3){
        this.setState(prevState => ({ x: id}));
        e.target.classList.remove("case_1_noselected");
        e.target.classList.add("false");
        this.setState({question_score: false});
        setTimeout(() => {
          e.target.previousElementSibling.previousElementSibling.classList.remove("case_1_noselected");
          e.target.previousElementSibling.previousElementSibling.classList.add("true");
          this.setState({display: 'none'});
        },1500 )
  
      }
    };

  calculer(e,i) {
    var element=e.target.nextElementSibling
    var element2=e.target.previousElementSibling
       if( (e.target.classList[0]=='case_1')&&(e.target.checked==true))
       {
     
         if
           (element.nextElementSibling.disabled==false)
           {
             e.target.disabled=true
          
             this.setState(prevState => ({
             inc: prevState.inc+1
             }));
           }
       }
      
       else   if( (e.target.classList[0]=='case_0')&&(e.target.checked==true))
      {
      
        if
          (element2.previousElementSibling.disabled==false)
          {
            e.target.disabled=true
         
            this.setState(prevState => ({
            inc: prevState.inc+1
            }));
          }
      }
  
  
  }
  
  
  
/****************************the renderrrrrrrrrrrrrrrrr**************************************** */
render(){
  return ( 
    <UserContext.Consumer>
    { value => ( 
    <div>




{/************************************
************************************************ afficher la question ********************************
**************************************************/}
    {/* x le rang de l'option*/}
      { (this.state.x==-1) &&
        <div>
            <Bubble   question={this.state.question}
                      info={this.props.info} 
                      id={this.state.x}
                      disabled={this.state.disabled}
                      questionId ={this.state.questionId}
                      suite ={this.state.suite}
                      questionsuite={this.state.questionsuite} 
                      incrementation={this.state.incrementation}
                      fiche={this.state.fiche}
                      gonext={this.props.gonext}
            />

        </div> 
      }
{/********************** Question de type QCM and click  *********************/}

  {/********************** afficher l'info liée à l'option *********************/}
      { (this.state.x>-1) &&(this.state.type!='score') &&          
        <div>    
          <Bubble info={this.props.info} 
                  id={this.state.x}
                  disabled={this.state.disabled}
                  questionId ={this.state.questionId}
                  suite ={this.state.suite}
                  questionsuite={this.state.questionsuite} 
                  incrementation={this.state.incrementation}
                  fiche={this.state.fiche}
                  gonext={this.props.gonext}/>  

        </div>
      }


{/************* QUESTION CALCUL SCORE ********************************* */ }
  {/**************** afficher question  ************** */} 
      { (this.state.type=='score')&&
          <div><Bubble question={this.state.question}/></div> 
      }
  {/****************afficher l'info liée à l'option 0 ou 1  ************** */} 

      { (this.state.x>-1) &&(this.state.question_score==false)&&            
          <div class='info_score' style={{display:this.state.display}}>     
                          <Bubble info={this.props.info} 
                                  id={this.state.x}
                                  disabled={this.state.disabled}
                                  questionId ={this.state.questionId}
                                  suite ={this.state.suite}
                                  questionsuite={this.state.questionsuite} 
                                  incrementation={this.state.incrementation}
                                  fiche={this.state.fiche}          
                                  question_score={this.state.question_score}
                                  gonext={this.props.gonext}/>  
                      
          </div>
      }
    {/**************************afficher calculer button ******************************/}
      {(this.state.inc ===4)&&(this.state.type=='score')&&
        <div  className = "calculer"
              onClick={()=> {this.suite(value.toggleindex); } }></div>           
      }


{/****************************afficher suivant button apres la selection de tous les checks*******************/ }
      {(((this.state.questionId ===12)&&( this.state.disabled== false))||(this.state.questionId ===16))&&
        <div className = "next"
              onClick={()=> {this.suite(value.toggleindex); } }> </div>

      }   


{/********************************************************************
*****************************************************affichage les options et les checkbox***********************************************
*****************************************************************************/ }

    <div className= {(  this.state.questionId ===19 ? 'choix choix_with_2op_vertical ' :  this.state.questionId ==13 ? 'choix choix_qcm choix_with_2op_horizontal ':this.state.type=='qcm' ?  'choix choix_qcm': this.state.type=='score' ? 'choix choix_score':
    (this.state.questionId === 12 ? 'infoclick infoclick-4' : (this.state.questionId === 5 ?'infoclick infoclick-5':'infoclick infoclick-5 infoclick-8')) )}>
    {this.state.options.map((option,i) => (
      <p key={i} > 
        {this.state.type!='score'?
          <input  type="checkbox"
                  className=""
                  name="checkGroup"
                  id={i}
                  value={this.state.answer}
                  key={i}
                  onClick={(e) => this.changed(i,e,option,value.toggleindex,value.remplir_tab,value.remplir_array)}/>:
          <div className="numbres">
              <input id={i+'input1'} type="radio" name={i} className='case_1' onClick={(e) => this.calculer(e,i)}/>
              <label className= 'case_1 case_1_noselected' htmlFor={i+'input1'}  onClick={(e)=>this.checkAnswer(i,e)}>1</label>

              <input id={i+'input2'} type="radio"  name={i} className='case_0' onClick={(e) => this.calculer(e,i)} />
              <label className= 'case_0 case_0_noselected' htmlFor={i+'input2'} onClick={(e)=>this.score(i,e)}>0</label>
            
          </div>
        }
{/*************affichage option type QCM ***************** */}
        {this.state.type=='qcm'?
          <label class='option_qcm' htmlFor={i}>
            <div className= 'check_cercle check_change'></div>
            {/************* deux option QCM ***************** */}
            {this.state.questionId==19 ?  
            <div className='option options choisir ' dangerouslySetInnerHTML={{ __html: option}} ></div>:<div className='option' dangerouslySetInnerHTML={{ __html: option}} ></div>}
          </label>:null
        }

{/*************affichage option type click ***************** */}

          {this.state.type=='click'?
            <div className={(this.state.questionId === 12 ? 'label-container-4':"label-container")}>
                <label  onClick={(e)=>this.checkAnswer(i,e)}
                        className= {'clickme0'+" grida"} 
                        htmlFor={i}>
                    <div className="option-container">
                    <div className='option1'dangerouslySetInnerHTML={{ __html: option}}></div>
                    {this.state.questionId==5?
                        <div className={"icon icon"+i}></div>:
                        this.state.questionId==8?
                        <div className={"icon icon_2_"+i}></div>:
                        <div className={"icon icon_3_"+i}></div>
                    }
                    </div>
                </label>
              </div> :  this.state.questionId==15 ? 
                        <div className='option' dangerouslySetInnerHTML={{ __html: option}}></div>:null
                
          }
    </p>
    ))}
         


</div>

    </div>)}
      </UserContext.Consumer>
  );
}
}
Options.propTypes = {
  options: PropTypes.array.isRequired, 
  
};

export default Options;

