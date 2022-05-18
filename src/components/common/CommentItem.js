import React from 'react'
import { Container, Typography, Box, Button, Grid, Avatar, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CommentItem({content}) {
    const [like, setLike] = React.useState(100);
    const [isLike, setIsLike] = React.useState(false)

    const handleLike = () => {
        setIsLike(!isLike)
        if (isLike) {
            setLike(like - 1)
        } else {
            setLike(like + 1)
        }
    }
    return (

        <Box style={{
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'space-between',
            // flexWrap: 'wrap'
        }}>

            <Box >
                <Avatar style={{
                    height: 50,
                    width: 50
                }} />
            </Box>
            <Box>
                <Box style={{
                    textAlign: 'left',
                    border: '1px solid #bdbdbd',
                    borderRadius: 10,
                    padding: 15,
                    width: 700
                }}>

                    <Typography style={{
                        wordWrap: 'break-word'
                    }}>{content}</Typography>



                </Box>
                <Box style={{
                    color: 'rgb(116 112 112)',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                }}>
                    <IconButton onClick={handleLike}>
                        {
                            isLike ? <FavoriteIcon style={{
                                color: 'red'
                            }} /> : <FavoriteBorderOutlinedIcon />
                        }

                    </IconButton><Typography >{like}</Typography> &nbsp;&nbsp;&nbsp;
                    <Typography style={{
                        fontSize: 12
                    }}>2 giờ trước</Typography>

                </Box>
            </Box>




        </Box>


    )
}

export default CommentItem