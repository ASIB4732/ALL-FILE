import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { userId } from '../../App';
import Bookings from '../bookings/Bookings'
const MatarialUiON = () => {
    const [value, setValue] =useState({
      chakIn:new Date(),
      chakOut:new Date()
    });

    const handelChakIn=(date)=>{
      const newDates={...value}
      newDates.chakIn=date;
      setValue(newDates)
     }  
   const handelChakOut=(date)=>{
      const newDates={...value}
      newDates.chakOut=date;
      setValue(newDates)
     }



     const [user, setUser]=useContext(userId);
     const handelBooking=()=>{
         const newBooking={...user, ...value};
         console.log(user,value);
         fetch('http://localhost:5000/addBooking', {
           method : "POST",
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify(newBooking)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
    }
    return (
        <div style={{margin:"30px"}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label="Chak in date in time"
          value={value.chakIn}
          onChange={handelChakIn}
          minDateTime={new Date()}
        />
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label="Chak ont date in time"
          value={value.chakOut}
          onChange={handelChakOut}
          minDate={new Date('2020-02-14')}
          minTime={new Date(0, 0, 0, 8)}
          maxTime={new Date(0, 0, 0, 18, 45)}
        />
      </Stack>
      <Button onClick={handelBooking} variant="contained">book now</Button>
    </LocalizationProvider>
    <Bookings></Bookings>
        </div> 
    );
};

export default MatarialUiON;