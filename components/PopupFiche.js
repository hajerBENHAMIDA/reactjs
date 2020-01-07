import React,{ useContext } from 'react';  
import {FicheData} from './QuizData';
import {QuizData} from './QuizData';
import {UserContext} from './Nextcontext';

class PopupFiche extends React.Component { 
    static contextType = UserContext;

    constructor(props){ 
 
        super(props);  
        this.z=[];

        this.state = { 
            title:FicheData[0].title,
            contenu:FicheData[0].fiche,
            qid:FicheData[0].qid,
            questionId:props.questionId,
            ficheId:FicheData[0].id
          
        };  

      }  
    componentWillReceiveProps(props) {
        this.setState({ficheId: props.ficheId});
        this.setState({fiche: props.fiche});
        this.setState({questionId: props.questionId});

    }
    
    componentDidMount(){
        let x;
        /****************first click on tne fiche button ****************** */
            if (this.state.questionId===1){
                x=FicheData[0].fiche
            }else if (this.state.questionId===2){
                x=FicheData[0].fiche + FicheData[1].fiche
            }else if (this.state.questionId===3){
                x=FicheData[0].fiche + FicheData[1].fiche + FicheData[2].fiche
                if(this.context.nextsuitechap===0){
                    x=FicheData[0].fiche + FicheData[1].fiche + FicheData[2].fiche+FicheData[2].suitefiche[0]
                }
                if(this.context.nextsuitechap===1){
                    x=FicheData[0].fiche + FicheData[1].fiche + FicheData[2].fiche+FicheData[2].suitefiche[0]+FicheData[2].suitefiche[1]
                }
                if(this.context.nextsuitechap===2){
                    x=FicheData[0].fiche + FicheData[1].fiche + FicheData[2].fiche+FicheData[2].suitefiche[0]+FicheData[2].suitefiche[1]+FicheData[2].suitefiche[2]
                }
                if(this.context.nextsuitechap===3){
                    x=FicheData[0].fiche + FicheData[1].fiche + FicheData[2].fiche+FicheData[2].suitefiche[0]+FicheData[2].suitefiche[1]+FicheData[2].suitefiche[2]+FicheData[2].suitefiche[3]
                }
            }else if (this.state.questionId>=3){
                x=FicheData[0].fiche + FicheData[1].fiche + FicheData[2].fiche+FicheData[2].suitefiche[0]+FicheData[2].suitefiche[1]+FicheData[2].suitefiche[2]+FicheData[2].suitefiche[3]
            }
            this.setState({
                title:FicheData[0].title,
                contenu:x,
            });

            /**************** style button changes****************** */

            var  get =document.getElementsByClassName('icon_fiche_1');
          
            get[0].classList.add("icon_onglet_1");
            get[0].classList.remove("icon_onglet_2");
            get[0].classList.remove("icon_onglet_3");
            get[0].classList.remove("icon_onglet_4");
            if (this.state.questionId >=5){
                var target =document.getElementsByClassName('fiche_2');
                target[0].classList.add('fiche_2_click');
            } 
            if (this.state.questionId >=11){
                var target =document.getElementsByClassName('fiche_3');
                target[0].classList.add('fiche_3_click');
            }
            if (this.state.questionId >=16){
                var target =document.getElementsByClassName('fiche_4');
                target[0].classList.add('fiche_4_click');
            }

    }

    check(e,tableau,tableau_comp){
      let x;
      /**************first onglet contain******************** */
        if (e.target.id==="fiche_1"){

            if (this.state.questionId===1){
                x=FicheData[0].fiche
            }else if (this.state.questionId===2){
                x=FicheData[0].fiche + FicheData[1].fiche
            }else if (this.state.questionId>=3){
                x=FicheData[0].fiche + FicheData[1].fiche + FicheData[2].fiche+FicheData[2].suitefiche[0]+FicheData[2].suitefiche[1]+FicheData[2].suitefiche[2]+FicheData[2].suitefiche[3]
            }

            this.setState({
                title:FicheData[0].title,
                contenu:x,
            });

            var  get =document.getElementsByClassName('icon_fiche_1');
          
            get[0].classList.add("icon_onglet_1");
            get[0].classList.remove("icon_onglet_2");
            get[0].classList.remove("icon_onglet_3");
            get[0].classList.remove("icon_onglet_4");

            var  get1 =document.getElementsByClassName('icon_fiche_4_1');
          
            get1[0].classList.remove("icon_onglet_4_1");

            var  get2 =document.getElementsByClassName('icon_fiche_4_2');
           
            get2[0].classList.remove("icon_onglet_4_2");
        }
      /**************second onglet contain******************** */

        if ((e.target.id==="fiche_2") && (this.state.questionId >= 5)) {

            this.setState({
                title:FicheData[3].title,
                contenu:tableau.join(''),
            });
            
             var  get =document.getElementsByClassName('icon_fiche_1');
           
             get[0].classList.add("icon_onglet_2");
             get[0].classList.remove("icon_onglet_1");
             get[0].classList.remove("icon_onglet_3");
             get[0].classList.remove("icon_onglet_4");


             var  get1 =document.getElementsByClassName('icon_fiche_4_1');
            
             get1[0].classList.remove("icon_onglet_4_1");

             var  get2 =document.getElementsByClassName('icon_fiche_4_2');
          
             get2[0].classList.remove("icon_onglet_4_2");

        }
      /**************third onglet contain******************** */

        if ((e.target.id==="fiche_3")&& (this.state.questionId >= 11)){
            this.setState({
                title:FicheData[5].title,
                contenu:tableau_comp.join('')
            });


             var  get =document.getElementsByClassName('icon_fiche_1');
            
             get[0].classList.add("icon_onglet_3");

             get[0].classList.remove("icon_onglet_1");
             get[0].classList.remove("icon_onglet_2");
             get[0].classList.remove("icon_onglet_4");

             var  get1 =document.getElementsByClassName('icon_fiche_4_1');
            
             get1[0].classList.remove("icon_onglet_4_1");

             var  get2 =document.getElementsByClassName('icon_fiche_4_2');
             
             get2[0].classList.remove("icon_onglet_4_2");

        }
      /**************forth onglet contain******************** */

        if ((e.target.id==="fiche_4")&& (this.state.questionId >= 16)){
            if ((this.state.questionId===16)||(this.state.questionId===17)){
                x=FicheData[7].fiche
            }else if (this.state.questionId===18){
                x=FicheData[7].fiche + FicheData[8].fiche
            }else if (this.state.questionId===19){
                x=FicheData[7].fiche + FicheData[8].fiche + FicheData[9].fiche
            }else if ((this.state.questionId===20)||(this.state.questionId===21)){
                x=FicheData[7].fiche + FicheData[8].fiche + FicheData[9].fiche+ FicheData[10].fiche
            }else if ((this.state.questionId===22)||(this.state.questionId===23)||(this.state.questionId===24)||(this.state.questionId===25)){
                x=FicheData[7].fiche + FicheData[8].fiche + FicheData[9].fiche+ FicheData[10].fiche+ FicheData[11].fiche
            }else if (this.state.questionId>=26){
                x=FicheData[7].fiche + FicheData[8].fiche + FicheData[9].fiche+ FicheData[10].fiche+ FicheData[11].fiche+ FicheData[12].fiche
            }
            this.setState({
                title:FicheData[7].title,
                contenu:x,
            });

            var  get =document.getElementsByClassName('icon_fiche_1');
            
            get[0].classList.add("icon_onglet_4");

             get[0].classList.remove("icon_onglet_1");
             get[0].classList.remove("icon_onglet_2");
             get[0].classList.remove("icon_onglet_3");




             var  get1 =document.getElementsByClassName('icon_fiche_4_1');
           
             get1[0].classList.add("icon_onglet_4_1");

             var  get2 =document.getElementsByClassName('icon_fiche_4_2');
             
             get2[0].classList.add("icon_onglet_4_2");
             
        }
        get=[];
  }




  render() {  
    return (  
        <UserContext.Consumer>
        { value => ( 
      <div className='popupfiche'>  
        <div className="grid">
            <div className="fiche_choix fiche_1" id="fiche_1" onClick={(e)=>this.check(e,value.tableau_choix,value.array_choix,value.remplir_array)}> <span className="style_onglet">Présentation du cas </span></div>
            <div className="fiche_choix fiche_2" id="fiche_2" onClick={(e)=>this.check(e,value.tableau_choix,value.array_choix,value.remplir_array)}> <span className="style_onglet">Examens Cliniques</span> </div>
            <div className="fiche_choix fiche_3" id="fiche_3" onClick={(e)=>this.check(e,value.tableau_choix,value.array_choix,value.remplir_array)}> <span className="style_onglet ">Examens complémentaires</span> </div>
            <div className="fiche_choix fiche_4" id="fiche_4" onClick={(e)=>this.check(e,value.tableau_choix,value.array_choix,value.remplir_array)}> <span className="style_onglet ">Prise en charge</span> </div>
        </div>

        <div className='popup_inner_fiche'>  
            <div className='fiche_contain'>
          
                <div className='title' dangerouslySetInnerHTML={{ __html:this.state.title}}></div>
                <div className='contenu'  dangerouslySetInnerHTML={{ __html:this.state.contenu}}></div>   
                <div className="icon_fiche_1 icon_onglet_1 icon_onglet_2 icon_onglet_3 icon_onglet_4 "></div>
                 <div className="icon_fiche_4_1 "></div>
                <div className="icon_fiche_4_2 "></div>

            </div>
        </div>  
        <div className="close_fiche" onClick={this.props.closePopup}></div>  

      </div>  
       )}
    </UserContext.Consumer>
    );  

  }  
}  

export default PopupFiche;