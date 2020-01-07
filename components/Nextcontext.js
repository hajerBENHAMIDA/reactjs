import React, { createContext, Component } from "react"; 

/*****************the context************************** */
export const UserContext = createContext({
    index: false,
    nextsuitechap:-1,
    choix_fiche:-1,
    tableau_choix:[],
    array_choix:[],
    toggleindex  :() => {},
    incrimente  :() => {},
    choix  :() => {},
    remplir_tab  :() => {},
    remplir_array  :() => {},


});
/*****************the context provider ************************** */

class Nextcontext extends Component {
    constructor(props) {
    super(props);

/******************** contain of examen clinique onglet in popup fiche **************************** */  
    this.remplir_tab=(c) =>{
        this.setState(state => ({
            tableau_choix: [...this.state.tableau_choix, c]
        }));    
    };

/******************** contain of examen complementaire onglet in popup fiche **************************** */  

    this.remplir_array=(c) =>{
        this.setState(state => ({
            array_choix: [...this.state.array_choix, c]
        }));    
    };
    this.choix=(x) =>{
        this.setState(state => ({
            choix_fiche: x
        }));    
    };
/*****************button suite to next chapter ********************** */   
    this.incrimente=() =>{
        this.setState(state => ({
            nextsuitechap: this.state.nextsuitechap+1
        }));    
    };
/*****************button suivant to next chapter ********************** */   

        this.toggleindex=() =>{
            this.setState(state => ({
                index: !state.index
            }));
        };


        this.state = {
            index: false,
            nextsuitechap:-1,
            choix_fiche:-1,
            tableau_choix:[],
            array_choix:[],

            toggleindex : this.toggleindex,
            incrimente : this.incrimente,
            choix  :this.choix,
            remplir_tab  :this.remplir_tab,
            remplir_array:this.remplir_array,

            };
    };

    render() {
      return (
        <UserContext.Provider value={this.state}>
          {this.props.children}
        </UserContext.Provider>
      );
    }
  }
  
  export default Nextcontext;