import React, {useState} from 'react'

import {
    Container,
    Box,
    Button,
    Grid,
    Avatar,
    Typography
} from '@mui/material'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fontSize } from '@mui/system';

function FollowerItemButton() {
    const [isFollow, setFollow] = useState(false)

    const handleFollow = () => {
        setFollow(!isFollow)
    }
    return (
        <Button variant="contained"
            style={{

                padding: 3,
                borderRadius: 5,
                backgroundColor: '#fff',
                border: '1px solid black',
                fontSize: 'small'

            }}
            endIcon={isFollow? <CheckCircleIcon style={{ color: '#32CD32' }} /> : <RadioButtonUncheckedOutlinedIcon />}
            onClick={handleFollow}
            >
            {isFollow ? 'đang theo dõi' : 'theo dõi'}
        </Button>
    )
}

function FollowerItem() {
    return (
        <Box style={{
            // width: '100%',
            border: '1px solid #bdbdbd',
            borderRadius: 3,
            boxShadow: 'rgb(232 234 235) 7px 7px 7px',
            marginBottom: 20,
            padding: 15

        }}>
            <Grid container spacing={2} justifyContent={'space-between'}>
                <Grid item xs={1}>
                    <Avatar />

                </Grid>
                <Grid item xs={8} style={{
                    textAlign: 'left'
                }}>
                    <Typography style={{
                        fontWeight: 'bold'
                    }}>Lê thị huế</Typography>
                    <Typography style={{
                        color: 'rgb(189, 189, 189)'
                    }}>@kmhueff</Typography>
                </Grid>
                <Grid item  xs={3}>
                    <FollowerItemButton />
                </Grid>
            </Grid>
        </Box>
    )
}

export default FollowerItem