import React from 'react';
import {  MDBBtn } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';

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
const  GlobalDetails = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Directeur');

    const handleChangeRadio = (event) => {
      setValue(event.target.value);
    };
    const [lieu, setLieu] = React.useState('');

    const handleChange = (event) => {
      setLieu(event.target.value);
    };
        return (
        
            <>
            <h3 className="font-weight-bold pl-0 my-4">
                <strong>Global Informations</strong>
            </h3>

            <form className={classes.root} noValidate autoComplete="off">
              
              <FormLabel component="legend">Fonctionnalité sur l'école</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio} row>
                <FormControlLabel value="Directeur" control={<Radio  />} label="Directeur" />
                <FormControlLabel value="Professeur" control={<Radio  />} label="Professeur" />
              </RadioGroup>

              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Région</InputLabel>   
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={lieu}
                  onChange={handleChange}
                  className={classes.formControl}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Casablanca</MenuItem>
                  <MenuItem value={20}>Rabat</MenuItem>
                  <MenuItem value={30}>El Jadida</MenuItem>
                </Select>                
              </FormControl>
 
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Province</InputLabel>   
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={lieu}
                  onChange={handleChange}
                  className={classes.formControl}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Casablanca</MenuItem>
                  <MenuItem value={20}>Rabat</MenuItem>
                  <MenuItem value={30}>El Jadida</MenuItem>
                </Select>                
              </FormControl>

                

              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Académie</InputLabel>   
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={lieu}
                  onChange={handleChange}
                  className={classes.formControl}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Casablanca</MenuItem>
                  <MenuItem value={20}>Rabat</MenuItem>
                  <MenuItem value={30}>El Jadida</MenuItem>
                </Select>                
              </FormControl>

              <FormControl required className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Poste (Nom d'école)</InputLabel>   
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={lieu}
                  onChange={handleChange}
                  className={classes.formControl}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Casablanca</MenuItem>
                  <MenuItem value={20}>Rabat</MenuItem>
                  <MenuItem value={30}>El Jadida</MenuItem>
                </Select>                
              </FormControl>
              
              <FormControl required className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Matière</InputLabel>   
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={lieu}
                  onChange={handleChange}
                  className={classes.formControl}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Français</MenuItem>
                  <MenuItem value={20}>Arabe</MenuItem>
                  <MenuItem value={30}>Isslamique</MenuItem>
                  <MenuItem value={30}>Mathématique</MenuItem>
                  <MenuItem value={30}>Physique</MenuItem>
                </Select>                
              </FormControl>

              <TextField id="standard-search" label="Matricule" type="text" />
            </form>
            <MDBBtn color="mdb-color" rounded className="float-left" onClick={props.handleBack}>Retour</MDBBtn>
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>Suivant</MDBBtn>
            </>
        )
}
export default GlobalDetails;
