import React from 'react'
import { IconButton, Box, Typography, Divider } from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Rating from '@mui/material/Rating';

import pic from '../logo123.png'

function MaybeYouLikeItem() {
    return (
        <Box style={{
            border: '1px solid #bdbdbd',
            width: 230
        }}>

            <img src={pic} style={{ height: 150, width: '100%', objectFit: 'cover' }} />
            <Box style={{
                padding: 5,
                textAlign: 'left'
            }}>
                <Typography variant='h6'>Ten bai viet <span style={{
                    fontSize: 10

                }}>| category</span></Typography>
                <Typography style={{
                    fontSize: 10
                }}>10/10/1220</Typography>
                <Rating
                    name="simple-controlled"
                    value={4}
                    onChange={(event, newValue) => {
                        return 1;
                    }}
                />
            </Box>
        </Box>
    )
}

function MaybeYouLike() {
    return (
        <Box style={{
            border: '1px solid #bdbdbd',
            borderRadius: 20,
            marginTop: 20,
            paddingBottom: 20,
            boxShadow: 'rgb(232 234 235) 5px 5px 7px',
            textAlign: 'left'


        }}>
            <Box style={{
                paddingLeft : 50,
                paddingTop : 10,
                paddingBottom : 10
            }}>
                <Typography variant='h5'>Có thể bạn quan tâm</Typography>

            </Box>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <Box>
                    <IconButton>
                        <ArrowBackIosNewIcon />

                    </IconButton>
                </Box>

                <MaybeYouLikeItem />
                <MaybeYouLikeItem />
                <MaybeYouLikeItem />

                <Box>
                    <IconButton>
                        <ArrowForwardIosIcon />

                    </IconButton>
                </Box>

            </Box>



        </Box>
    )
}

export default MaybeYouLike