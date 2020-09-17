import React from 'react';
import { MDBCol, MDBBtn, MDBInput } from "mdbreact";

const  GlobalDetails = (props) => {
    
        return (
        <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Global Informations</strong></h3>
            <MDBInput label="First Name" className="mt-3" />
            <MDBInput label="Second Name" className="mt-3" />
            <MDBInput label="Surname" className="mt-3" />
            <MDBInput label="Address" type="textarea" rows="2" />
            <MDBBtn color="mdb-color" rounded className="float-left" onClick={props.handleBack}>previous</MDBBtn>
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>next</MDBBtn>
        </MDBCol>
        )
}
export default GlobalDetails;
