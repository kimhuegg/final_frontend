import React, {useState} from 'react'
import { Container, Typography, Box, Button, Grid, Avatar, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CommentItem from './CommentItem';

function CommentBox() {
    const [comment, setComment] = useState([0, 0, 0])
    const [inputComment, setInputComment] = useState('')

    const handleComment = () => {
        comment.unshift(inputComment)
        console.log(comment)
        setComment([...comment])
    }

    const handleInput = (e) => {
        setInputComment(e.target.value)
    }

    return (
        <Box style={{
            border: '1px solid #bdbdbd',
            borderRadius: 20,
            marginTop: 20,
            padding: 20,
            boxShadow: 'rgb(232 234 235) 5px 5px 7px'

        }}>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 50
            }}>
                <TextField 
                id="comment" 
                label="Chia sẻ cảm nghĩ của bạn..." 
                variant="standard" 
                fullWidth 
                onChange={handleInput}
                value={inputComment}
                />
                <IconButton color='primary' onClick={handleComment}>
                    <SendIcon />
                </IconButton>
            </Box>
            <Box style={{
                width: '100%'
            }}>
                {
                    comment.map((item, index) =>{
                        console.log(item)
                        return (<CommentItem key={index} content={item}/>)
                    } )
                }
                
            </Box>
            <Button>Xem thêm</Button>
            {/* <Typography></Typography> */}

        </Box>
    )
}

export default CommentBox