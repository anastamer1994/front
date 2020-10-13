import React from 'react';
import { MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: '60ch',
  },
}));
const  CompteAuthentification = (props) => {
        
  const classes = useStyles();

        return (
          <MDBCol md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Compte Authentification</strong></h3>

                <form className={classes.root} noValidate autoComplete="off">
                  <TextField required id="standard-search" label="Email Professionnel" type="text" />
                  <TextField required id="standard-search" label="Mot de passe" type="password" />
                  <TextField required id="standard-search" label="Confirmer votre mot de passe " type="password" />
                </form>

                <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox" />
                <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
                <MDBBtn color="mdb-color" rounded className="float-left" onClick={props.handleBack}>Retour</MDBBtn>
                <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>Suivant</MDBBtn>
          </MDBCol>
        )
    
}

export default CompteAuthentification;
