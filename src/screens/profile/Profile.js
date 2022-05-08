import React from 'react'
import {
    Container,
    Box,
    Button,
    Grid
} from '@mui/material'
import luch from './lunch.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FollowButton from '../../components/profile/FollowButton';
import CardAvatar from '../../components/profile/CardAvatar';
import CardOtherInfo from '../../components/profile/CardOtherInfo';

import {Outlet} from 'react-router-dom'

function Profile() {
    return (
        <Container>
            <Box style={{
                height: 300,
                overflow: 'hidden',
                backgroundImage: `url(${luch})`,
                marginTop: 15,
                borderRadius: 20,
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
                padding: 20
            }}>
                <FollowButton />
            </Box>
            <Box style={{
                marginTop : 20

            }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <CardAvatar />
                        <CardOtherInfo />
                    </Grid>
                    <Grid item xs={8}>
                        <Outlet />
                    </Grid>

                </Grid>
                
            </Box>


        </Container>
    )
}

export default Profile