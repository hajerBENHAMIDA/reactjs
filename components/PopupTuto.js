import React from 'react';  

class Popup extends React.Component {  
  constructor (props){
    super(props);
    this.state = {
    nb_animation:0
  }
}
 

     
componentDidMount(){
    var classes=[['soundpng_animation','soundpng'],['sound_arrow_animation','sound_arrow'],['sound_animation','soundTuto'],       
          ['fichepng_animation','fichepng'],['fiche_arrow_animation','fiche_arrow'],['fiche_animation','ficheTuto'],    
          ['suite_animation','suitepng'] ,['suite_animation','suite_arrow'], ['suite_arrow_animation','SuiteTuto'] ,  
          ['menu_arrow_animation','menu_arrow'], ['menu_animation','menuTuto'], 
          ['suivant_animation','suivant'], ['suivant_arrow_animation','suivant_arrow'], ['suivant_arrow_animation','suivantTuto']   
        ] 
    classes.forEach(function(element,i,x) {

      var[c,t]=element;
      if(i<=2){
              setTimeout(() => {
                
                var s = document.getElementsByClassName(t);
                s[0].classList.add(c);
                setTimeout(() => {
                  s[0].parentElement.style.opacity = "0";
    
                 },(4000))

            },(500*(i)))
          }
        if(i==3){
            setTimeout(() => {
              
              var s = document.getElementsByClassName(t);
              s[0].classList.add(c);
             
   

          },(4000))
        }
        /*15000*/
        if((i>3)&&(i<6)){
          setTimeout(() => {
            
            var s = document.getElementsByClassName(t);
            s[0].classList.add(c);
  
            setTimeout(() => {
              s[0].parentElement.style.opacity = "0";
  
             },(5000))

        },(1000*(i)))
      }
      if((i==6)){
        setTimeout(() => {
          
          var s = document.getElementsByClassName(t);
          s[0].classList.add(c);

   

      },(9000))
      }
      if((i>6)&&(i<9)){
        setTimeout(() => {
          
          var s = document.getElementsByClassName(t);
          s[0].classList.add(c);
          setTimeout(() => {
            s[0].parentElement.style.opacity = "0";

          },(2000))
  

        },(10000))
      }
    if(((i>=9)&&(i<11))){
    
      setTimeout(() => {
        
        var s = document.getElementsByClassName(t);
        s[0].classList.add(c);
        setTimeout(() => {
          s[0].parentElement.style.opacity = "0";

        },(7000))
      },(12000))
    
    }
    if((i==11)){
        
      setTimeout(() => {
          
        var s = document.getElementsByClassName(t);
        s[0].classList.add(c);

      },(19000))

    }
    if((i>11)){

        setTimeout(() => {
          try{
          var s = document.getElementsByClassName(t);
          s[0].classList.add(c);
        }catch(e){
          console.log("patientez SVP")
        } 
        },(19500))

    }

  });
        

} 

  render() {  
    return (  
      <div className='popupTuto'>  
        <div className='tutodiv'>
          <div className="soundPopup">
            <div className='soundpng'></div> 
            <div className='soundTuto text_Popup'  >Appuyez sur le bouton volume, pour couper ou rétablir le son.</div> 
            <div className="sound_arrow"></div>
          </div>
          <div className="fichePopup">
          <div className='fichepng'></div> 
            <div className='ficheTuto text_Popup'>  Pour afficher le dossier du patient, appuyez sur cette icone.</div>
            <div className="fiche_arrow"></div>
          </div>
          <div className="suitePopup">
          <div className='suitepng'></div> 
            <div className='SuiteTuto text_Popup'>Cliquez ici pour visualiser la scène suivante.</div>  
            <div className="suite_arrow"></div>
          </div>
          <div className="menuPopup">
            <div className='menuTuto text_Popup'>Plusieurs cadenas représentent les différentes étapes par lesquelles le joueur doit passer (présentation du cas, examens, diagnostic…)</div> 
            <div className="menu_arrow"></div>
          </div>
          <div className="suivantPopup">
          <div className='menupng'></div> 
            
            <div className='suivantTuto text_Popup'>Appuyez ici pour passer à l’étape suivante.</div>  
            <div className="suivant_arrow"></div>
           
          </div>
            <div className='suivant'onClick={this.props.closePopup}></div>  

         </div>  
         
      </div>  

    );  
  }  
}  

export default Popup;



