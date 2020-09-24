import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './Form.css'








const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '25ch',
      },
      
    }
    
  }));

const Form = () => {
    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log('Form submitted', data)
    };

    const [selectedDate, setSelectedDate] = React.useState(
      new Date('2020-03-18T12:00:00')
      );

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };


    return (
        
    <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

      <lable id="booking" >Origin</lable>
      <input className="input-filed" name="origin" ref={register({ required: true })} /> 
      {errors.origin && <span className="error">Name is required</span>}
      <br/>
      <lable id="booking" >Destination</lable>
      <input className="input-filed" name="destination" ref={register({ required: true })} /> 
      {errors.destination && <span className="error">Name is required</span>}
      {/* {/* <input type="submit" /> */}

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container >
        <Grid item xm={12} sm={6} justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="From"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </Grid>
        <Grid item>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="To"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </Grid>
        
        
      </Grid>
    </MuiPickersUtilsProvider>


      <Button variant="contained" color= "#f9A51A" className="btn-submit" onClick={onSubmit}>
        Start booking
        </Button>
      
    </form>
    );
};

export default Form;