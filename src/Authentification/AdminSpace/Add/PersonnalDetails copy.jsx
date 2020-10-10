import React from "react";
import { MDBCol, MDBBtn, MDBInput } from "mdbreact";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 540,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const PersonnalDetails = (props) => {
  
  const classes = useStyles();

  return (
        <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Personal Informations</strong></h3>
            
            <div className="form-row">
              <div className="col">
                <MDBInput label="Nom" className="mt-4" />
              </div>
              <div className="col">
                <MDBInput label="Prénom" className="mt-4" />
              </div>
            </div>
            <div className="form-row">
              <div className="col mt-4">
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="AAAA-MM-JJ"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="col mt-4">
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="age-native-helper">Lieu de naissance</InputLabel>
                <NativeSelect
                  value=""
                  onChange=""
                  inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
              </div>
              <div className="col mt-4">
                <MDBInput label="Sexe (M/F)" className="mt-4" />
              </div>
            </div>
            <div className="form-row">
              <div className="col mt-4">
                <MDBInput label="Sexe (M/F)" className="mt-4" />
              </div>
              <div className="col mt-4">    
                <MDBInput label="Pays" className="mt-4" />
              </div>
            </div>

            <div className="form-row">
              <div className="col mt-4">
                <MDBInput label="Ville" className="mt-4" />
              </div>
              <div className="col mt-4">
                <MDBInput label="Code postal" className="mt-4" />
              </div>
            </div>
            <div className="form-row">
              <div className="col mt-4">
                <MDBInput label="Adresse" className="mt-4" />
              </div>
              <div className="col mt-4">
                <MDBInput label="CIN" className="mt-4" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="col mt-4">
                <MDBInput label="Nationalité" className="mt-4" />
              </div>
              <div className="col mt-4">
                  <MDBInput label="Numéro TEL" className="mt-4" />
              </div>
            </div>
          
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>next</MDBBtn>
        </MDBCol>
    );
}

export default PersonnalDetails;