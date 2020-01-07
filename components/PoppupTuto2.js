import React from 'react';  

class Popup extends React.Component { 

  componentWillMount(i){
    var classes=[['soundpng_animation','infopng'],['sound_arrow_animation','info_arrow'],['sound_arrow_animation','infoTuto'],       
    ['fichepng_animation','menupng'], ['fiche_arrow_animation','debloque_arrow'],['fiche_arrow_animation','debloqueTuto'],
    ['suivant_animation','suivant']] 
  
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
      if((i>3)&&(i<6)){
        setTimeout(() => {
          
          var s = document.getElementsByClassName(t);
          s[0].classList.add(c);

          setTimeout(() => {
            try{
              s[0].parentElement.style.opacity = "0";
            }catch(e){
              console.log("patientez SVP")
            }
          },(5000))

      },(1000*(i)))
    }
    if((i==6)){
      setTimeout(() => {
        try{
          var s = document.getElementsByClassName(t);
          s[0].classList.add(c);
        }catch(e){
          console.log("patientez SVP")
        }
      },(9000))
      }
    });
  }  

  render() {  
    return (  
      <div className='popupTuto'>  
           <div className='tutodiv'>
            <div className='menuPopup2'>
              <div className='menupng'></div>
              <div className='debloqueTuto'>Bravo. Vous avez débloqué le stage suivant.</div>  
              <div className="debloque_arrow"></div>
            </div>
            <div className='infoPopup'>
              <div className='infopng'></div>
              <div className='infoTuto'>  Appuyez sur le bouton « i », pour avoir plus d’informations.</div>   
              <div className="info_arrow"></div>
            </div>

            <div className='suivant'onClick={this.props.closePopup}></div>  
            </div>
      </div>  
    );  
  }  
}  

export default Popup;






