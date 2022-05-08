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
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function CardOtherInfo() {
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate('/edit-profile')
    }
    return (
        <Box variant="outlined" style={{
            borderRadius: 10,
            border: '1px solid #bdbdbd',
            padding: 20,
            paddingTop: 10,
            marginTop: 20,
            textAlign: 'left'
        }}>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Typography variant='h5'>Thông tin</Typography>
                <IconButton color="primary" aria-label="upload picture" component="span" style={{
                    display: 'ab'
                }} onClick={handleEdit}>
                    <DriveFileRenameOutlineOutlinedIcon />
                </IconButton>
            </Box>
            <Typography> <HomeIcon />Hanoi university</Typography>
            <Typography><HomeIcon />đến từ Thanh Hóa</Typography>
            <Typography><HomeIcon />Ngày sinh 16/10/1999</Typography>
            <Typography> <HomeIcon />Sinh viên</Typography>


        </Box>
    )
}

export default CardOtherInfo