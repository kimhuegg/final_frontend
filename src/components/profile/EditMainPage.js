import React from 'react'
import {
    Container,
    Box,

    Grid,
    Typography,
    Divider,
} from '@mui/material'
import { Alert, TextField, Button, FormControlLabel, Checkbox, } from '@mui/material';
// import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';


import pic from './pic.jpg'
import { useNavigate } from 'react-router-dom';

function EditMainPage() {
    const navigate = useNavigate()
    const previewFile = (event) => {
        const [file] = event.target.files
        const preview = document.getElementById('preview')
        console.log(preview)
        preview.removeChild(preview.firstChild)
        const reader = new FileReader()

        reader.onload = e => {
            const img = document.createElement('img')
            img.src = e.target.result
            img.id = 'preview-img'
            img.style = "object-fit: cover; width : 100% ; height : 250"
            preview.appendChild(img)
        }

        reader.readAsDataURL(file)
    }

    const previewAvatar = (event) => {
        const [file] = event.target.files
        const preview = document.getElementById('preview-avatar')
        console.log(preview)
        preview.removeChild(preview.firstChild)
        const reader = new FileReader()

        reader.onload = e => {
            const img = document.createElement('img')
            img.src = e.target.result
            img.id = 'preview-img'
            img.style = "object-fit: cover; width : 100% ; height : 100%"
            preview.appendChild(img)
        }
        reader.readAsDataURL(file)
    }

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
                <Typography variant='h5'>Chỉnh sửa trang cá nhân</Typography>
                <Divider />
                <Box style={{
                    padding: 20,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <input id="contained-button-file" type={'file'} onChange={previewFile} style={{
                        display: 'none'
                    }} />
                    <label htmlFor="contained-button-file" style={{
                        position: 'absolute'
                    }}>
                        {/* <Fab component="span" > */}
                        <AddPhotoAlternateIcon />
                        {/* </Fab> */}
                    </label>

                    <Box id="preview" style={{
                        width: '100%',
                        backgroundColor: '#bdbdbd',
                        height: 250,
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}>
                        <img src={pic} style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover'
                        }} />
                    </Box>
                </Box>
                <Box style={{
                    padding: 20,
                    textAlign: 'right'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Box style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%'
                            }}>
                                <input id="avatar-file" type={'file'} onChange={previewAvatar} style={{
                                    display: 'none'
                                }} />
                                <label htmlFor="avatar-file" style={{
                                    position: 'absolute'
                                }}>
                                    {/* <Fab component="span" > */}
                                    <AddPhotoAlternateIcon />
                                    {/* </Fab> */}
                                </label>

                                <div id="preview-avatar" style={{
                                    width: 200,
                                    backgroundColor: '#bdbdbd',
                                    height: 200,
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    borderRadius: '50%'
                                }}>
                                    <img src={pic} style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }} />
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={9} container style={{

                        }}>
                            <Box sx={{
                                border: '1px solid #bdbdbd',
                                borderRadius: 3,
                                padding: 3,
                                marginBottom: 3
                            }}>
                                <TextField
                                    label="Mô tả"
                                    multiline
                                    rows={4}
                                    // defaultValue=""
                                    fullWidth
                                />
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField fullWidth margin="dense" id="outlined-basic" label="Họ và tên" variant="standard" />
                                        <TextField fullWidth margin="dense" id="filled-basic" label="Username" variant="standard" />
                                        <TextField fullWidth margin="dense" id="standard-basic" label="Email" variant="standard" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                margin="dense"
                                                variant="standard"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                label="Age"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Nam</MenuItem>
                                                <MenuItem value={11}>Nữ</MenuItem>

                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <label for="meeting-time">Sinh nhật</label>

                                            <input type="datetime-local" id="meeting-time"
                                                name="meeting-time" value="2018-06-12T19:30"
                                                min="2018-06-07T00:00" max="2018-06-14T00:00" />
                                        </FormControl>
                                    </Grid>
                                </Grid>


                            </Box>
                        </Grid>

                    </Grid>
                    <Button onClick={cancleChange} >Hủy</Button>
                    <Button variant="contained">Lưu</Button>
                </Box>
            </Box>
        </>
    )
}

export default EditMainPage