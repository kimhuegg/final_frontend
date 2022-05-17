import React from 'react'
import { Container, Typography, Box, Button, Grid, Avatar, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import NotificationButton from '../NotificationButton'
import { Outlet } from 'react-router-dom'
import CardUserItem from './CardUserItem';
import Rating from '@mui/material/Rating';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PostHeader() {
  const [value, setValue] = React.useState(2);
  const [isSave, setSave] = React.useState(true);
  const [like, setLike] = React.useState(100);
  const [isLike, setIsLike] = React.useState(false)

  const handleLike = () => {
    setIsLike(!isLike)
    if(isLike){
      setLike(like-1)
    }else{
      setLike(like +1)
    }
  }

  const handleSave = () => {
    setSave(!isSave)
  }

  return (

    <Grid container style={{
      padding: 20
    }}>
      <Grid item xs={8} style={{
        textAlign: 'left'
      }}>
        <Typography variant='h5'>Tiêu đề bài viết | <span style={{
          fontSize: 12
        }}>category</span></Typography>
        <CardUserItem />
        <Box style={{
          color: 'rgb(116 112 112)',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
          <IconButton onClick={handleLike}>
            {
              isLike? <FavoriteIcon style={{
                color: 'red'
              }}/> : <FavoriteBorderOutlinedIcon />
            }
            
          </IconButton><Typography >{like}</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <ChatBubbleOutlineOutlinedIcon /><Typography > 1.5k &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          <RemoveRedEyeOutlinedIcon /><Typography > 1.5k &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        </Box>
        <Typography>#hastag</Typography>
      </Grid>
      <Grid item xs={4} style={{
        textAlign: 'right'
      }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Box>
          <IconButton color="primary" aria-label="upload picture" component="span" style={{
            display: 'ab'
          }}
            onClick={handleSave}
          >
            {
              isSave ? <BookmarkIcon style={{
                color: '#faaf00'
              }} /> : <BookmarkBorderIcon />
            }
          </IconButton>
        </Box>



      </Grid>

    </Grid>
  )
}

export default PostHeader