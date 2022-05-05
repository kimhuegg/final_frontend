import React, { useEffect, useState } from 'react'
import { Alert, CssBaseline, Container,  Avatar,  Typography, Grid, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useNavigate, Link } from 'react-router-dom';


import LoginForm from './LoginForm';

export default function SignIn() {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <br />
         {/* <Alert severity="error">This account is unauthorized!</Alert>  */}

        <Box sx={{ mt: 1 }}>
          <LoginForm />

          <Grid container>
            <Grid item xs={12}>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
}


