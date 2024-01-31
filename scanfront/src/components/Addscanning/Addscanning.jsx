// Addscanning.jsx

import baseUrl from '../../Api';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Addscanning.css';
import axios from 'axios';
import Adsidebar from '../Navbar/Adsidebar';
import Adnavbar from '../Navbar/Adnavbar';
import Loader from '../Loader';


function Addscanning() {
  const [loader, setLoader] = useState(false);
  const [inputs, setInputs] = useState({
    sid: '', // Assuming sid is the ID field
    sname: '',
    sdescription: '',
    samount: '',
    Status: 'ACTIVE',
  });

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const savedata = () => {
    setLoader(true); // Set loader to true before making the request
    console.log(inputs);
    axios.post(baseUrl + '/scan/scannew', inputs)
      .then((response) => {
        alert('Record Saved');
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false); // Set loader to false once the request is completed (whether success or failure)
      });
  };

  return (
    <div className="form-container1">
      {loader && <Loader/>}
      <Adnavbar />
      <Box height={20}>
        <Box sx={{ display: 'flex' }}>
          <Adsidebar />
          <Grid className='grid-container'>
            <Paper elevation={10} className='paperstyle'>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1 className="form-heading1">ADD A SCANNING</h1>

                <TextField
                  className="form-field1"
                  id="outlined-basic"
                  placeholder="Id"
                  name="sid"
                  value={inputs.sid}
                  onChange={inputhandler}
                  variant="outlined"
                /><br />
                <TextField
                  className="form-field1"
                  id="outlined-basic"
                  placeholder="Name"
                  name="sname"
                  value={inputs.sname}
                  onChange={inputhandler}
                  variant="outlined"
                />
                <br />
                <textarea
                  className="form-field1"
                  id="outlined-basic"
                  placeholder="Description"
                  name="sdescription"
                  value={inputs.sdescription}
                  onChange={inputhandler}
                  variant="outlined"
                />
                <br />
                <TextField
                  className="form-field1"
                  type="number"
                  id="outlined-basic"
                  placeholder="Amount"
                  name="samount"
                  value={inputs.samount}
                  onChange={inputhandler}
                  variant="outlined"
                />
                <br />
                <label>Status:&nbsp;&nbsp;</label>
                <select name="Status" value={inputs.Status} onChange={inputhandler}>
                  <option value="ACTIVE">AVAILABLE</option>
                  <option value="INACTIVE">NOT-AVAILABLE</option>
                </select>
                <br />
                <input type="file" placeholder="Choose an image" />
                <br />
                <Button className="form-button1" variant="contained" onClick={savedata}>
                  DONE
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Addscanning;
