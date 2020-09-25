import React from 'react';
import { MDBContainer, MDBRow} from "mdbreact";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import SwitchCases from './SwitchCases';
import {useHistory } from 'react-router-dom';

const  AddAdministrator = () => {
     
      const [activeStep, setActiveStep] = React.useState(0);
      const history = useHistory();

      const getSteps = () => {
        return ['Personal Informations', 'Global Informations', 'Compte Authentification','Validation'];
      }
      
      const handleSubmission = (e,url) => {
        e.preventDefault();
        history.push(url);
      }
      
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
          
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const steps = getSteps();
 
      return(
        <MDBContainer>
            <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Registration form</strong></h2>
            
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <form >
                <MDBRow>
                    <SwitchCases 
                        ActifStep = {activeStep} 
                        handleNext={handleNext} 
                        handleBack={handleBack} 
                        handleSubmission={(e) => handleSubmission(e,'/')} />
                </MDBRow>
            </form>         
        </MDBContainer> 
       
      )
     }
    
   

export default AddAdministrator;