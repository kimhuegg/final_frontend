import React from 'react'
import {Box, Typography} from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function LikeShareComment() {
  return (
    <Box style={{
        // color: 'rgb(116 112 112)',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        // marginTop: 15,
        // marginBottom: 10,
        
    }}>
        <FavoriteBorderOutlinedIcon style={{fontSize: 14}}/><Typography  style={{fontSize: 13}}> 1.5k &nbsp;</Typography>
        <ChatBubbleOutlineOutlinedIcon style={{fontSize: 14}}/><Typography style={{fontSize: 13}}> 1.5k &nbsp;</Typography>
        <RemoveRedEyeOutlinedIcon style={{fontSize: 14}}/><Typography style={{fontSize: 13}}> 1.5k &nbsp;</Typography>
    </Box>
  )
}

export default LikeShareComment