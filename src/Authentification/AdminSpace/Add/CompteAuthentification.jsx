import React from 'react';
import { MDBCol, MDBBtn, MDBInput } from "mdbreact";

const  CompteAuthentification = (props) => {
   
        return (
          <MDBCol md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Compte Authentification</strong></h3>
                <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox" />
                <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
                <MDBBtn color="mdb-color" rounded className="float-left" onClick={props.handleBack}>previous</MDBBtn>
                <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>next</MDBBtn>
          </MDBCol>
        )
    
}

export default CompteAuthentification;
