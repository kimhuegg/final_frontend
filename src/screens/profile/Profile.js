import React from 'react'
import {
    Container,
    Box,
    Button
} from '@mui/material'
import luch from './lunch.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Profile() {
    return (
        <Container>
            <Box style={{
                height: 300,
                overflow: 'hidden',
                backgroundImage: `url(${luch})`,
                marginTop: 15,
                borderRadius: 20
            }}>

                <Button variant="contained" style={{

                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    boxShadow: 'rgb(0 0 0 / 87%) -8px 6px 20px'

                }}
                    endIcon={<CheckCircleIcon style={{ color: '#32CD32' }} />}
                >Đang theo dõi</Button>
            </Box>


        </Container>
    )
}

export default Profile