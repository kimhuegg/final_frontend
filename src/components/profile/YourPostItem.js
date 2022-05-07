import * as React from 'react';
import {
    Container,
    Box,
    Button,
    Grid,
    Typography
} from '@mui/material'

import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import pic from './pic.jpg'

function YourPostItem() {
    const [value, setValue] = React.useState(2);
    return (
        <Box style={{
            width: '100%',
            border: '1px solid #bdbdbd',
            borderRadius: 3,
            boxShadow: 'rgb(232 234 235) 7px 7px 7px',
            marginBottom: 20
        }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Box style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        backgroundImage: `url(${pic})`,
                        backgroundSize: 'cover'
                    }}>
                    </Box>

                </Grid>
                <Grid item xs={8} style={{
                    textAlign: 'left',
                }}>
                    <Box style={{
                        marginTop: 10,
                        marginRight: 15
                    }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography style={{
                                    color: 'rgb(116 112 112)'
                                }}>Nồi chiên không dầu</Typography>
                            </Grid>
                            <Grid item xs={6} style={{
                                textAlign : 'right'
                            }}>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Grid>

                        </Grid>

                        <Typography variant='h6'>Review Nồi chiên không dầu </Typography>
                        <Typography variant='span'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span>...</span>
                            <Link to={'#'}>xem tiếp</Link>
                        </Typography>

                    </Box>
                    <Box style={{
                        color: 'rgb(116 112 112)',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems : 'center',
                        marginTop : 15,
                        marginBottom : 10
                    }}>
                        <FavoriteBorderOutlinedIcon/><Typography > 1.5k &nbsp;</Typography>
                        <ChatBubbleOutlineOutlinedIcon/><Typography > 1.5k &nbsp;</Typography>
                        <RemoveRedEyeOutlinedIcon/><Typography > 1.5k &nbsp;</Typography>
                    </Box>



                </Grid>

            </Grid>


        </Box>
    );
}

export default YourPostItem