import React from 'react'
import { Container, Typography, Box, Button, Grid, Avatar } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import NotificationButton from '../NotificationButton'
import { Outlet } from 'react-router-dom'
import Rating from '@mui/material/Rating';


function CardUserItem() {

    return (<>
      <Grid container style={{
          marginTop: 30
      }}>
        <Grid item style={{
            marginRight: 15
        }}>
          <Avatar />
        </Grid>
        <Grid item style={{
          textAlign : 'left'
        }}>
          <Typography>Lê Thị Huế</Typography>
          <Typography style={{
            fontSize: 12
          }}>7 giờ trước</Typography>

        </Grid>
      </Grid>
    </>)
  }

  export default CardUserItem
  