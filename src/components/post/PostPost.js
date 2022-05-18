import React from 'react'
import { Container, Typography, Box, Button, Grid, Avatar, IconButton } from '@mui/material';
import PostHeader from '../recipe/PostHeader';

import pic from '../profile/pic.jpg'
import PostBody from '../post/PostBody';

function PostPost() {

    return (
        <Box style={{
            border: '1px solid rgb(232 234 235)',
            // borderRadius: 20,
            marginTop: 20,
            marginBottom: 20,
            paddingBottom : 20

        }}>
            <PostHeader />
            <Box style={{
                height: 300,
                overflow: 'hidden',
                mage: `url(${pic})`,
            }}>
                
            </Box>
            <PostBody />
        </Box>
    )
}

export default PostPost