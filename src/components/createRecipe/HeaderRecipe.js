import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';

import { Container, Box, Typography, IconButton, TextField, Grid, Divider } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize';

import CameraAltIcon from '@mui/icons-material/CameraAlt';


import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

function HeaderRecipe() {

    const previewPicture = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];
        const preview = document.getElementById('preview-picture')
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
    return (
        <>
            <Box style={{
                marginBottom: 30
            }}>
                <input type='text' style={{
                    border: 'none',
                    outline: 'none',
                    fontSize: 20,
                    width: '100%',
                }}
                    placeholder="Nhập tên công thức..."
                // value={titlePost}
                // onChange={handleTitle}
                />
            </Box>
            <Box style={{
                height: 300,
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(232 234 235)',
                position: 'relative',
                marginBottom: 20
            }}>

                <Box style={{
                    zIndex: 0,
                    postion: 'absolute',
                }} id={"preview-picture"}>
                    {/* <img src={pic} /> */}
                </Box>
                <Box style={{
                    zIndex: 1000,
                    postion: 'absolute',
                }}>
                    <input
                        id="create-recipe-picture"
                        type={'file'}
                        accept="image/png, image/jpeg"
                        style={{
                            // display: 'none'
                        }}
                        onChange={previewPicture}
                    />
                    <label htmlFor="create-recipe-picture" style={{
                        postion: 'absolute',
                        left: '50%'
                        // left: 0
                    }}><CameraAltIcon /></label>
                </Box>

            </Box>
            <TextField
                label="Mô tả"
                multiline
                rows={4}
                // defaultValue=""
                fullWidth
            />
        </>
    )
}

export default HeaderRecipe