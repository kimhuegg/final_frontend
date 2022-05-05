import React, { useEffect } from 'react'

import { Alert, CssBaseline, Container, Avatar, Typography, Grid, Box } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment'
import { green, pink } from '@mui/material/colors';

import { Link } from 'react-router-dom';

import RegisterForm from './RegisterForm';
// import RegisterSuccess from '../components/RegisterSuccess';

function RegisterScreen() {

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Avatar sx={{ m: 1, bgcolor: green[500] }}>
                        <AssignmentIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <br />
                    <Box sx={{ mt: 1 }}>
                        <RegisterForm />
                        <Grid container>
                            <Grid item xs={12}>
                                <Link to="/login" variant="body2">
                                    {"Already have an account? Log in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>

    )
}

export default RegisterScreen