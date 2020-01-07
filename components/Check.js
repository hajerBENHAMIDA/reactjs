import React, {Component} from 'react';
import {QuizData} from './QuizData';
import Questions from './Questions';
import Next from './Next';
import Fiche from './Fiche';
import Sound from './Sound';
import Menu from './Menu';
import Chapitrefin from './Chapitrefin';
import {UserContext} from './Nextcontext';
import Chapitre1 from './Chapitre1';
import Info from './Info';
import Ref from './Ref';


class Check extends Component {
    constructor(props) {
      super(props);
      this.background= null;
      this.state = {
        questionId:1,
        question: '',
        options: [],
        answer: '',
        answers:[],
        info:[],
        infoglobal:[],
        suite:[],
        questionsuite:"",
        type:'',
        incrementation:0,
        bg:'',
        reference:[],
        comptinfo:-1,
        cmpt:-1,
        toutref:"",
        chapitre:0,
        splash_screen:true,
        progress: 0,

  
      };

      this.gonext = this.nextQuestionHandler.bind(this);

    }

    /**********load question with options*********** */
    LoadQuiz = () => {
        const {questionId}= this.state;
        this.setState(()=> {
            return{
                question:QuizData[questionId].question,
                options:QuizData[questionId].options,
                answers:QuizData[questionId].answer,
                info:QuizData[questionId].info,
                infoglobal:QuizData[questionId].infoglobal,
                suite:QuizData[questionId].suite,
                type:QuizData[questionId].type,
                bg:QuizData[questionId].bg,
                reference:QuizData[questionId].reference,
                toutref:QuizData[questionId].toutref,
                chapitre:QuizData[questionId].chapitre,

            };
  
        })
    }
    

    componentWillMount(){
        this.LoadQuiz();
        this.changebg()
    };

  /**********change background*********** */

    changebg(){
      if(this.state.bg=='medecin')
        return('medecin image')

        else if(this.state.bg=='chaise')
        return('chaise image')

        else if(this.state.bg=='docteur')
        return('docteur image')

        else if(this.state.bg=='infirmier')
        return('infirmier image')

        else if(this.state.bg=='infirmiere')
        return('infirmiere image')
        
        else if(this.state.bg=='medecinzoome')
        return('medecinzoome image')

        else if(this.state.bg=='patient')
        return('patient image')

    };
  /**********change background*********** */
    nextQuestionHandler=()=> {
        const{questionId}=this.state;
        this.setState({
          questionId:questionId+1,
          answer:'',
          check : false,
          incrementation:0,    
        });
        this.setState(prevState => ({
          i: 1,   
       }));


    };
      
      componentDidUpdate(prevProp,prevState){
      const {questionId} = this.state;
        if(this.state.questionId !== prevState.questionId){
            this.setState(()=> {
                return{
                    disabled:true,
                    question:QuizData[questionId].question,
                    options:QuizData[questionId].options,
                    answers:QuizData[questionId].answer,
                    info:QuizData[questionId].info,
                    infoglobal:QuizData[questionId].infoglobal,
                    type:QuizData[questionId].type,
                    suite:QuizData[questionId].suite,
                    bg:QuizData[questionId].bg,
                    reference:QuizData[questionId].reference,
                    toutref:QuizData[questionId].toutref,
                    chapitre:QuizData[questionId].chapitre,
                    comptinfo:-1
                };
            }) 
        }
      } 
      componentDidMount() {
        var src = [
          "/static/media/chaise_v3-min.019f2ff8.png",
          "/static/media/patient_v3-min.45c15b6f.png",
          "/static/media/medecin_v3-min.6024ea2a.png",
          "/static/media/doctor_v3-min.33cb8d87.png",
          "/static/media/infirmiere_v3-min.112ba858.png",
          "/static/media/patient_v3-min.45c15b6f.png",
          "/static/media/infirmier_v3-min.d2362d80.png",
          "/static/media/tableau.53bd3353.png",
          "/static/media/tableau2-min.4cd2ea5f.png",
          "/static/media/suivant.fcd16eae.png",
          "/static/media/fleche-01.e84a6583.png",
          "/static/media/terminer.a72b4d5a.png",

          "/static/media/medecinzoome_v3-min.04212b9c.png",
        ];
       
        const addState =  (val) =>  {
          
          return () =>  { console.log("helooo");this.setState((prevState, props) => ({
                  progress: prevState.progress + val,
                
                }));
          if (this.state.progress == 100){
                  this.setState((prevState, props) => ({
                    splash_screen: false
            
          }));
          }}; 
          
        }
        document.addEventListener("DOMContentLoaded", function(event) {
          // - Code to execute when all DOM content is loaded. 
          // - including fonts, images, etc.
          // this.background=document.querySelectorAll(".image").length;
          
          window.loadIMage(src , 
            addState( ( 1 / src.length) * 100))

          })

          
      }
/*******************return information related with option *********************** */
      infobtn=(cmpt)=>{
        this.setState({
          comptinfo: cmpt, 
          });
      }


/***********reload the quiz************** */

      reload() {
        window.location.reload();
        }

  render() {
    const {comptinfo,incrementation,type,questionsuite,suite,infoglobal,info,question ,answer,options,questionId,answers,reference} = this.state;
    return (
          /**********use context ***********/
          <UserContext.Consumer> 
          { value => ( 

            <div className="App">
{/************************splash screen***************************/} 
               {
                   this.state.splash_screen===true&&
                   <div className="splash image">
                  
                     <div className="myProgress">
                         <div id="myBar" style={{width: this.state.progress + "%"}}>

                           <div class='loading'><span class="load">{ this.state.progress + "%"}</span></div>
                               </div>
                              
                     </div>

                       </div>

                }
{/************************progress indicator  ***************************/} 

                { 
                  this.state.splash_screen==false && <Menu questionId={this.state.questionId}   chapitre={this.state.chapitre}  /> 
                }
{/************************Chapiter 1 Introduction ***************************/} 

               { (questionId in [0,1,2,3]) && this.state.splash_screen==false &&

                <div className= {this.changebg()}>
                      <div>
                        <Chapitre1  questionId ={questionId}
                                    suite ={suite}
                                    questionsuite={questionsuite}
                                    question ={question}
                                    incrementation={incrementation}
                                    gonext={this.gonext}
                                    chapitre={this.state.chapitre}
                                    splash_screen={this.state.splash_screen}/>

                      </div>

               
                  </div>
                  

                }
{/************************other chapter questions ***************************/} 

                { questionId >= 4 &&  questionId != 26  &&
                        
                    <div className= {`image ${this.changebg()}`}>  
                        <Questions
                                answer ={answer} 
                                options ={options}
                                question ={question}
                                questionId ={questionId} 
                                answers ={answers} 
                                info={info}
                                infoglobal={infoglobal}
                                suite={suite}
                                type ={type} 
                                incrementation={incrementation}
                                gonext={this.gonext}
                                reference={reference}
                                infobtn={this.infobtn}
                                chapitre={this.state.chapitre}/>  

                        {/************************chapters with Ref ***************************/} 
 
                        { ((this.state.questionId==7) ||(this.state.questionId==8)||(this.state.questionId==21) ||(this.state.questionId==9) )    &&   
                              <div >             
                          <Ref    comptinfo={comptinfo}
                                  reference={this.state.reference}
                                  index={value.index} 
                                  toutref={this.state.toutref}
                                  questionId ={questionId} />

                          </div>
                        }
                        <Info  comptinfo={comptinfo}
                        infoglobal={this.state.infoglobal}
                        index={value.index}
                        toutref={this.state.toutref} 
                        questionId ={questionId} 
                        />
                        <Fiche  questionId={questionId}
                        suite={this.state.suite}
                        question={question}/>  

                    </div >   
                }  
                <Next gonext={this.nextQuestionHandler}
                      questionId={questionId}/>
               <Sound/>

{/**************************last chapter *************************/} 

                {questionId === 26  &&
                  <div className= {this.changebg()}>
                    <Chapitrefin    questionId ={questionId}
                                    suite ={suite}
                                    questionsuite={questionsuite}
                                    question ={question}
                                    incrementation={incrementation}
                                    reload={this.reload}
                                    gonext={this.gonext}
                                    />
                    
                   
                  </div>
                } 


            </div>
          )}
        </UserContext.Consumer>
      );

    }
  }
    
    export default Check;

