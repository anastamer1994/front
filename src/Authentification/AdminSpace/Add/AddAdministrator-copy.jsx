import React, { Component } from 'react';
import PersonalDetails from './PersonnalDetails';
import GlobalDetails from './GlobalDetails';
import CompteAuthentification from './CompteAuthentification';
import ValidationAuth from './ValidationAuth';
 
export default class AddAdministrator extends Component{

    state = {
        step : 1,
        firstName : '',
        lastName : '',
        bithDate : '',
        bithPlace : '',
        gender : '',
        codePostal : '',
        city : '',
        adresse : '',
        cellPhone : '',
        phone : '',
        contry : '',
        cin : '',
        nationality : '',
        province : '',
        region : '',
        academy : '',
        matricule : '',
        fonctionality : '',
        etablName : '',
        schoolLevel : '',
        email : '',
        password : '',
        confirmPassword : '',
        photo : '',
        firstNameError : '',
        lastNameError : ''
        
    }
  
    nextStep = () => {
        const {step} =this.state;
        this.setState({
            step : step + 1
        })
    };

    prevStep  = () => {
        const {step} =this.state;
        this.setState({
            step : step - 1
        })
    };

    handleChange = input => e => {
        this.setState({ [input] : e.target.value}); 
    }

    render(){
    
        const {step} = this.state;
        const { firstName ,lastName ,bithDate ,bithPlace ,gender ,codePostal ,city ,adresse ,cellPhone ,phone ,contry ,cin ,nationality ,
        province ,region ,academy , matricule ,fonctionality ,etablName,schoolLevel ,email ,password ,confirmPassword, photo,firstNameError,lastNameError} = this.state;
        const values = { firstName ,lastName ,bithDate ,bithPlace ,gender ,codePostal ,city ,adresse ,cellPhone ,phone ,contry ,cin ,nationality ,
            province ,region ,academy , matricule ,fonctionality ,etablName,schoolLevel ,email ,password ,confirmPassword, photo,firstNameError,lastNameError};
        
        switch(step) {
            case 1 : return (
                <PersonalDetails 
                    nextStep = {this.nextStep} 
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
            case 2 : return (
                <GlobalDetails />
            )
            case 3 : return (
                <CompteAuthentification />
            )
            case 4 : return (
                <ValidationAuth />
            )
            default : return (
                <h2> Succes Message </h2>
            )
        }
    }
    
}   