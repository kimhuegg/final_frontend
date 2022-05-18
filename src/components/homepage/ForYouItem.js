import * as React from 'react';
import {
    Container,
    Box,
    Button,
    Grid,
    Typography,
    Avatar
} from '@mui/material'

import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import pic from '../profile/pic.jpg'

function ForYouItem() {
    const [value, setValue] = React.useState(2);
    return (
        <Box style={{
            width: '100%',
            border: '1px solid #bdbdbd',
            borderRadius: 3,
            boxShadow: 'rgb(232 234 235) 7px 7px 7px',
            marginBottom: 20
        }}>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Box style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        padding: 10
                        // backgroundImage: `url(${pic})`,
                        // backgroundSize: 'cover'
                    }}>
                        <img src={pic} style={{width: '100%'}}/>
                    </Box>

                </Grid>
                <Grid item xs={8} style={{
                    textAlign: 'left',
                    // paddingLeft: 10
                }}>
                    <Box style={{
                        marginTop: 10,
                        marginRight: 15
                    }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography style={{
                                    color: 'rgb(116 112 112)',
                                    fontSize: 12
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
                            <Link to={'/recipe'}>xem tiếp</Link>
                        </Typography>

                    </Box>

                    <Box style={{
                        display: 'flex',
                        justifyContent: 'start',
                        marginTop: 10
                    }}>
                        <Avatar />
                        <Box style={{
                            margin: 2
                        }}>
                             <Typography >Lê Thị Huế</Typography>
                             <Typography style={{fontSize: 10,
                            color: '#bdbdbd' }}>16 phút trước</Typography>
                        </Box>
                       
                    </Box>

                    <Box style={{
                        color: 'rgb(116 112 112)',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems : 'center',
                        marginTop : 10,
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


export default ForYouItem