import React from 'react'

import { Container, Box, Typography, Divider, IconButton, TextField , Grid} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomepageHeader from '../../components/homepage/HomepageHeader';
import ForYou from '../../components/homepage/ForYou';
import SuggestUser from '../../components/homepage/SuggestUser';

function Homepage() {
  return (
    <Container>
      <HomepageHeader />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ForYou />
        </Grid>
        <Grid item xs={4}>
          <SuggestUser />
        </Grid>
      </Grid>
      
      

    </Container>
  )
}

export default Homepage