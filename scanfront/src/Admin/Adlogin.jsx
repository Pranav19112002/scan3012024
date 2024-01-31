import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import MasksIcon from '@mui/icons-material/Masks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

function Adlogin() {
  const [inputs, setInputs] = useState({ "email": '', "password": '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const navigate = useNavigate();

  const checkData = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3500/admin/login",
        { email: inputs.email, password: inputs.password, });
      setLoading(false);

      if (response.data.success) {
        setSuccess(true); // Set success to true on successful login
        setError(false); // Set error to false
        alert('Login successful');
        navigate('/panel');
      } else {
        setError(true); // Set error to true on invalid login
        setSuccess(false); // Set success to false
        alert('Invalid email and Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      setError(true); // Set error to true on error during login
      setSuccess(false); // Set success to false
      alert('Error occurred during login. Please try again.');
    }
  };

  const btstyle1 = { margin: '8px 0', backgroundColor: 'green', color: 'white' };
  const paperStyle = { padding: 20, height: '70vh', width: 400, margin: '20px auto' };
  const avatar1Style = { backgroundColor: 'green' };
  const linkStyle = { color: 'green', textDecoration: 'underline', marginRight: '4px' };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error/>}
      {success && <Success/>}
      <div>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatar1Style}><MasksIcon /></Avatar>
              <h2>Log in</h2>
            </Grid>

            <TextField id="filled-basic" label="Email" name="email" value={inputs.email} onChange={inputHandler} fullWidth />
            <TextField id="filled-basic" label="Password" type='password' name='password' value={inputs.password} onChange={inputHandler} fullWidth />
            <Button type='Submit' fullWidth variant='contained' style={btstyle1} onClick={checkData}>
              Login
            </Button>

            {error && (
              <Typography align='left' style={{ color: 'red' }}>
                Login failed. Invalid email or password.
              </Typography>
            )}

            <Typography align='left'>
              <Link href="#" style={linkStyle}>
                {'Forgot Password ?'}
              </Link>
            </Typography>
            <p align='left'>Do you have an account ?</p>
            <Typography align='left'>
              <Link href="#" style={linkStyle}>
                {'Sign up'}
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default Adlogin;
