import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
    Container,
    Box,
    Button,
    Grid,
    Avatar,
    Divider,
    IconButton
} from '@mui/material'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { useNavigate } from 'react-router-dom';

function CardAvatar() {
    const navigate = useNavigate()

    const handleFollower = () => {
        navigate('/profile/follower')

    }

    const handleEdit = () => {
        navigate('/edit-profile')
    }
    return (
        <Box variant="outlined" style={{
            borderRadius: 10,
            border: '1px solid #bdbdbd',
            padding: 20,
            paddingTop: 10
        }}>
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Box style={{
                    display: 'flex',
                    justifyContent: 'end',
                    width: '100%'
                }}>
                    <IconButton color="primary" aria-label="upload picture" component="span" style={{
                        display: 'ab'
                    }} onClick={handleEdit}>
                        <DriveFileRenameOutlineOutlinedIcon />
                    </IconButton>
                </Box>

                <Avatar style={{
                    height: 150,
                    width: 150,
                    marginBottom: 20
                }} />
                <Typography variant="h5" style={{

                }}>Lê Thị Huế</Typography>
                <Typography variant="h6" style={{
                    color: '#bdbdbd',
                    marginBottom: 10
                }}>@kimhuegg</Typography>
                <Typography>tell something not special tell something not special</Typography>


            </Box>
            <Divider style={{
                marginTop: 20,
                marginBottom: 20
            }} />
            <Box>
                <Grid container spacing={0} >
                    <Grid item xs={6} style={{
                        border: '1px solid #bdbdbd',
                        borderRadius: 10,
                        padding: 10,
                        textTransform: 'uppercase',
                    }}>
                        <Button onClick={handleFollower} >Follower</Button>
                        <Typography>10</Typography>

                    </Grid>
                    <Grid item xs={6} style={{
                        border: '1px solid #bdbdbd',
                        borderRadius: 10,
                        padding: 10,
                        textTransform: 'uppercase',
                    }}>
                        <Button>Following</Button>
                        <Typography>10</Typography>

                    </Grid>
                </Grid>

            </Box>


        </Box>
    )
}

export default CardAvatar