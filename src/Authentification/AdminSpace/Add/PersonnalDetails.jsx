import React from "react";
import { MDBBtn } from "mdbreact";
import { TextField,MenuItem,Select, FormLabel,RadioGroup,Radio,FormControlLabel,InputLabel,FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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

const PersonnalDetails = (props) => {
  
  const classes = useStyles();
  const [selectedDate,setSelectedDate] = React.useState();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [lieu, setLieu] = React.useState('');

  const handleChange = (event) => {
    setLieu(event.target.value);
  };
  const [value, setValue] = React.useState('female');

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };
  
  return (
       <>
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Personal Informations</strong></h3>
            
              <form className={classes.root} noValidate autoComplete="off">
             
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio} row>
                <FormControlLabel value="female" control={<Radio  />} label="Female" />
                <FormControlLabel value="male" control={<Radio  />} label="Male" />
              </RadioGroup>

              <TextField required id="standard-search" label="Nom" type="text" />
             
              <TextField  required id="standard-search" label="Prénom" type="text" />
             
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date de naissance"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                />
              </MuiPickersUtilsProvider>
             
              <FormControl required className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Lieu de Naissance</InputLabel>   
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
              <InputLabel id="demo-simple-select-helper-label">Ville</InputLabel>   
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
      
              <FormControl  required className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Pays</InputLabel>
                <Select
                label="Pays"
                id="demo-simple-select-helper"
                value={lieu}
                onChange={handleChange}
                className={classes.formControl}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Maroc</MenuItem>
                <MenuItem value={20}>France</MenuItem>
                <MenuItem value={30}>Algérie</MenuItem>
              </Select>
            </FormControl>

            <TextField id="standard-search" label="Code Postal" type="text" />
 
            <TextField required  id="standard-search" label="Adresse" type="text" />
 
            <TextField required id="standard-search" label="CIN" type="text" />
 
            <TextField id="standard-search" label="Nationalité" type="text" />
 
            <TextField required id="standard-search" label="Numéro Téléphone" type="number" />
 
            <TextField id="standard-search" label="Numéro Fix" type="number" />

           
          </form>
          <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>Suivant</MDBBtn>
      </>
    );
}

export default PersonnalDetails;