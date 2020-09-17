import React from 'react';
import PersonalDetails from './PersonnalDetails';
import GlobalDetails from './GlobalDetails';
import CompteAuthentification from './CompteAuthentification';
import ValidationAuth from './ValidationAuth';


const SwitchCases = (props) => {
    console.log(props.ActifStep);
    switch(props.ActifStep) {
        case 1 : return (
            <PersonalDetails handleNext={props.handleNext} />
        )
        case 2 : return (
            <GlobalDetails handleNext={props.handleNext} handleBack={props.handleBack} />
        )
        case 3 : return (
            <CompteAuthentification handleNext={props.handleNext} handleBack={props.handleBack} />
        )
        case 4 : return (
            <ValidationAuth handleSubmission={props.handleSubmission} handleBack={props.handleBack} />
        )
        default : return (
            <h2> Succes Message </h2>
        )
    }

}

export default SwitchCases;
