import React from 'react'
import {
    Container,
    Box,
    Button,
    Grid,
    Typography,
    Divider
} from '@mui/material'

function EditProfile() {
    const previewFile = (event) => {
        const [file] = event.target.files
        const preview = document.getElementById('preview')
        const reader = new FileReader()

        reader.onload = e => {
            const img = document.createElement('img')
            img.src = e.target.result
            img.width = 200
            img.height = 200
            img.alt = 'file'

            preview.appendChild(img)
        }

        reader.readAsDataURL(file)
    }
    return (
        <Container>
            <Box sx={{
                width: '100%',
                border: '1px solid #bdbdbd',
                borderRadius: 3,
                marginTop: 3
            }}>
                <Typography variant='h5'>Chỉnh sửa trang cá nhân</Typography>
                <input type={'file'} onChange={previewFile} />
                <Divider />
                <div id="preview"></div>
            </Box>

        </Container>
    )
}

export default EditProfile