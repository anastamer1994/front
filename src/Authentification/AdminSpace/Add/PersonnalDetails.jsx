import React, { Component } from 'react';
import {MuiThemeProvider,makeStyles} from '@material-ui/core/styles';
import {TextField,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titleTypography : {
        textAlign : 'center',
        paddingTop : 80,
        color: 'black',
        fontFamily: "Comic Sans MS, Comic Sans, cursive",
      }
   }));
export class PersonnalDetails extends Component {
    
    // Validation

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError : '',
            lastNameError : ''
        };
    
        if(this.props.values.firstName.length < 5){
            isError = 'true';
            errors.firstNameError = "Le nom est obligatoire ";
        }
    
        if(this.props.values.lasttName.length < 5){
            isError = 'true';
            errors.lastNameError = "Le prenom est obligatoire";
        }
    
        if(isError){
            this.setState({
                ...this.state,
                ...errors
            });
        }
    
        return isError; 
      } 
      


    render() {
        const { values,handleChange } = this.props;
       /// const classes = useStyles();
        return (
            <div className = "container">

                <Typography variant="h4">
                    Nouveau Administrateur
                </Typography>

                <form>

                     <div className="form-group">
                            <MuiThemeProvider >
                                <React.Fragment>
                                <TextField 
                                    id="standard-input"
                                    name="firstName"
                                    label = "Nom Label" 
                                    hintText="Hint Nom" 
                                    floatingLabelText="Name Floating"
                                    errorText={values.firstNameError}
                                    defaultValue ={values.firstName}
                                    onChange={handleChange('firstName')} floatingLabelFixed />
                                </React.Fragment>
                           </MuiThemeProvider>
                     </div>

                     <div className="form-group">
                           <MuiThemeProvider >
                              <React.Fragment>
                                <TextField 
                                    id = "standard-input"
                                    name="lastName" 
                                    label = "Prenom Label" 
                                    hintText="Hint Prenom" 
                                    floatingLabelText="Prenom Floating"
                                    errorText={values.lastNameError}
                                    defaultValue ={values.lastName}
                                    onChange={handleChange('lastName')} floatingLabelFixed />
                               </React.Fragment>
                           </MuiThemeProvider>
                     </div>
                
                </form>
            </div>
        )
    }
}

export default PersonnalDetails;