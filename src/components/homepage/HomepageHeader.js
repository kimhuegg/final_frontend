import React from 'react'

import { Container, Box, Typography, Divider, IconButton, TextField, Grid } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import pic from '../logo123.png'
import LikeShareComment from '../common/LikeShareComment';

function HomepageHeader() {
    return (
        <Box style={{
            border: '1px solid #bdbdbd',
            marginTop: 20,
            boxShadow: 'rgb(232 234 235) 5px 5px 7px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'

        }}>
            <IconButton>
                <ArrowBackIosNewIcon style={{
                    fontSize: 50,
                    fontWeight: 'bold'
                }} />

            </IconButton>
            <Grid container spacing={.5}>
                <Grid item xs={4}>
                    <Box style={{
                        backgroundImage: `url(${pic})`,
                        height: 250,
                        display: 'flex',
                        alignItems: 'end'
                    }}>
                        <Box style={{
                            padding: 10,
                            backgroundColor: 'rgb(0 0 0 / 47%)',
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            width: '100%',
                            '&:hover': {
                                visibility: 'hidden'
                            }
                        }}>
                            <Typography variant='h6'>Tiêu đề bài viết</Typography>
                            <Typography style={{
                                fontSize: 12
                            }}>1/1/2022</Typography>
                            <LikeShareComment />
                            
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{
                        backgroundImage: `url(${pic})`,
                        height: 250,
                        display: 'flex',
                        alignItems: 'end'
                    }}>
                        <Box style={{
                            padding: 10,
                            backgroundColor: 'rgb(0 0 0 / 47%)',
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            width: '100%',
                            // visibility: 'hidden',
                            '&:hover': {
                                visibility: 'hidden'
                            }
                        }}>
                            <Typography variant='h6'>Tiêu đề bài viết</Typography>
                            <Typography style={{
                                fontSize: 12
                            }}>1/1/2022</Typography>
                            <LikeShareComment />
                            
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{
                        backgroundImage: `url(${pic})`,
                        height: 250,
                        display: 'flex',
                        alignItems: 'end'
                    }}>
                        <Box style={{
                            padding: 10,
                            backgroundColor: 'rgb(0 0 0 / 47%)',
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            width: '100%',
                            // visibility: 'hidden',
                            "&:hover": {
                                visibility: 'hidden'
                            }
                        }}>
                            <Typography variant='h6'>Tiêu đề bài viết</Typography>
                            <Typography style={{
                                fontSize: 12
                            }}>1/1/2022</Typography>
                            <LikeShareComment />
                            
                        </Box>

                    </Box>
                </Grid>
            </Grid>
            <IconButton>
                <ArrowForwardIosIcon style={{
                    fontSize: 50,
                    fontWeight: 'bold'
                }} />

            </IconButton>

        </Box>
    )
}

export default HomepageHeader