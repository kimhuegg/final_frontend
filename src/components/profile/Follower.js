import React from 'react'

import {
    Container,
    Box,
    Button,
    Grid,
    Avatar,
    Typography
} from '@mui/material'

import FollowerItem from './FollowerItem'

function Follower() {
    return (
        <>
            <Box sx={{
                // width: '100%',
                border: '1px solid #bdbdbd',
                borderRadius: 3,
                padding: 3
            }}>
                <FollowerItem />
                <FollowerItem />
                <FollowerItem />
            </Box>
        </>
    )
}

export default Follower