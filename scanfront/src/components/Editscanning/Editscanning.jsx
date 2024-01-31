// Editscanning.jsx

import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Editscanning.css'; 
import baseUrl from '../../Api';
import axios from 'axios';
import Adsidebar from '../Navbar/Adsidebar';
import Adnavbar from '../Navbar/Adnavbar';
import Loader from '../Loader';

const Editscanning = (props) => {
  const [loader, setLoader] = useState(false);
  const [inputs, setInputs] = useState(props.data || {
    sid: '',
    sname: '',
    sdescription: '',
    samount: 0,
    Status: 'ACTIVE',
  });

  useEffect(() => {
    setInputs(props.data || {
      sid: '',
      sname: '',
      sdescription: '',
      samount: 0,
      Status: 'ACTIVE',
    });
  }, [props.data]);

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const savedata = () => {
    setLoader(true); // Set loader to true before making the request
    if (props.method === 'put' && inputs && inputs._id) {
      axios.put(baseUrl + '/scan/scanedit/' + inputs._id, inputs)
        .then((response) => {
          setLoader(false); // Set loader to false once the request is completed
          alert("Updated");
          window.location.reload(false);
        })
        .catch(err => {
          setLoader(false); // Set loader to false in case of an error
          console.log(err);
        });
    } else {
      setLoader(false); // Set loader to false if the condition is not met
      alert('Invalid data. Cannot perform the update.');
    }
  };

  return (
    <div className="form-container">
      {loader && <Loader/>}
      <Adnavbar/>                         
      <Box height={20}>
        <Box sx={{ display: 'flex' }}>
          <Adsidebar />
          <Grid className='grid-container'>
            <Paper elevation={10} className='paperstyle'>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1 className="form-heading">EDIT SCANNING</h1>

                <TextField
                  className="form-field"
                  id="outlined-basic"
                  placeholder="Id"
                  name="sid"
                  value={inputs.sid}
                  onChange={inputhandler}
                  variant="outlined"
                />
                <br /><br />
                <TextField
                  className="form-field"
                  id="outlined-basic"
                  placeholder="Name"
                  name="sname"
                  value={inputs.sname}
                  onChange={inputhandler}
                  variant="outlined"
                />
                <br /><br />
                <textarea
                  className="form-field"
                  id="outlined-basic"
                  placeholder="Description"
                  name="sdescription"
                  value={inputs.sdescription}
                  onChange={inputhandler}
                  variant="outlined"
                />
                <br /><br />
                <TextField
                  className="form-field"
                  type='number'
                  id='outlined-basic'
                  placeholder='Amount'
                  name='samount'
                  value={inputs.samount}
                  onChange={inputhandler}
                  variant='outlined'
                />
                <br /><br />
                Status: &nbsp;&nbsp;
                <select name="Status" value={inputs.Status} onChange={inputhandler}>
                  <option value="ACTIVE">AVAILABLE</option>
                  <option value="INACTIVE">NOT-AVAILABLE</option>
                </select>
                &nbsp; <Button variant="contained" className='form-button1 form-button1-left' onClick={savedata}>SAVE</Button>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Editscanning;
