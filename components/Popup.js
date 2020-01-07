import React from 'react';  
/************ uses  for Info and Ref Components **************** */
class Popup extends React.Component {  
  render() {  
    return (  
      <div className="popupinfo">
          <div className='popup'>  
            <div className='popup_inner'>  
{/*************dangerouslySetInnerHTML ====> innerHTML*******************/}                
              <div dangerouslySetInnerHTML={{ __html: this.props.infoglobal}}></div>  
            </div>  
          </div> 
          <div className='close_popup' onClick={this.props.closePopup}></div>  
      </div>
    );  
  }  
}  

export default Popup;