import React from 'react'
import { Container, Typography, Box, Button, Grid, Avatar, IconButton } from '@mui/material';
import PostHeader from './PostHeader';

import pic from '../profile/pic.jpg'
import PostBody from './PostBody';

function RecipePost() {

  return (
    <Box style={{
      border: '2px dashed grey',
      borderRadius: 20,
      marginTop: 20,
      marginBottom: 20

    }}>
      <PostHeader />
      <Box style={{
        height: 300,
        overflow: 'hidden',
        backgroundImage: `url(${pic})`,
      }}>
      </Box>
      <PostBody />
    </Box>
  )
}

export default RecipePost