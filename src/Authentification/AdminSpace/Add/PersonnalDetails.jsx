import React from "react";
import { MDBBtn } from "mdbreact";
import { TextField,MenuItem,Select } from '@material-ui/core';
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
  const [selectedDate,setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [lieu, setLieu] = React.useState('');

  const handleChange = (event) => {
    setLieu(event.target.value);
  };
  
  return (
       <>
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Personal Informations</strong></h3>
            
              <form className={classes.root} noValidate autoComplete="off">
              
              <TextField id="standard-search" label="Nom" type="text" />
              <TextField id="standard-search" label="Prénom" type="text" />
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
              <TextField id="standard-search" label="Search field" type="search" />
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

              
              <TextField id="standard-search" label="Search field" type="search" />
              <TextField id="standard-search" label="Search field" type="search" />
              <TextField id="standard-search" label="Search field" type="search" />
              <TextField id="standard-search" label="Search field" type="search" />
              <TextField id="standard-search" label="Search field" type="search" />
              <TextField id="standard-search" label="Search field" type="search" />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />

              </form>
          
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={props.handleNext}>next</MDBBtn>
      </>
    );
}

export default PersonnalDetails;