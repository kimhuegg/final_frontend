import React from 'react'
import {
    Container,
    Box,

    Grid,
    Typography,
    Divider,
} from '@mui/material'
import { Alert, TextField, Button, FormControlLabel, Checkbox, } from '@mui/material';
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import pic from './pic.jpg'
import { useNavigate} from 'react-router-dom';
function EditOtherInfomation() {
    const navigate = useNavigate()
    const cancleChange = () => {
        navigate('/profile/post')
    }
    return (
        <>
            <Box sx={{
                width: '100%',
                border: '1px solid #bdbdbd',
                borderRadius: 3,
                marginTop: 3,

            }}>
                <Typography variant='h5'>Chỉnh sửa thông tin</Typography>
                <Divider />

                <Box style={{
                    padding: 20,
                    textAlign: 'right'
                }}>
                    <TextField fullWidth margin="dense" id="outlined-basic" label="Công việc hiện tại" variant="standard" />

                    <TextField fullWidth margin="dense" id="filled-basic" label="Nơi ở hiện tại" variant="standard" />
                    <TextField fullWidth margin="dense" id="standard-basic" label="Quê quán" variant="standard" />
                    <Button onClick={cancleChange} >Hủy</Button>
                    <Button variant="contained">Lưu</Button>
                </Box>
            </Box>
        </>
    )
}

export default EditOtherInfomation