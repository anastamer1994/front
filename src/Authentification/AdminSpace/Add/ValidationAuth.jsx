import React from 'react';
import { MDBCol, MDBBtn } from "mdbreact";

const ValidationAuth = (props) => {
    
        return (
          <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Validation Authentification</strong></h3>
            <h2 className="text-center font-weight-bold my-4">Registration completed!</h2>
            <MDBBtn color="mdb-color" rounded className="float-left" onClick={props.handleBack}>previous</MDBBtn>
            <MDBBtn color="success" rounded className="float-right" onClick={props.handleSubmission}>submit</MDBBtn>
          </MDBCol>
        )
    
}

export default ValidationAuth;
