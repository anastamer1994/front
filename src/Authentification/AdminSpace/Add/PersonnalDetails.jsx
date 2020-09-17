import React from "react";
import { MDBCol, MDBBtn, MDBInput } from "mdbreact";

const PersonnalDetails = (props) => {
    
  return (
        <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Personal Informations</strong></h3>
            <MDBInput label="Email" className="mt-4" />
            <MDBInput label="Username" className="mt-4" />
            <MDBInput label="Password" className="mt-4" />
            <MDBInput label="Repeat Password" className="mt-4" />
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>next</MDBBtn>
        </MDBCol>
    );
}

export default PersonnalDetails;