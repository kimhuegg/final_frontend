import React, { useState } from 'react'
import {
    Container,
    Box,
    Button
} from '@mui/material'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function FollowButton() {
    const [isFollow, setFollow] = useState(false)

    const handleFollow = () => {
        setFollow(!isFollow)
    }
    return (
        <Button variant="contained" style={{

            padding: 10,
            borderRadius: 10,
            backgroundColor: '#fff',
            boxShadow: 'rgb(0 0 0 / 87%) -8px 6px 20px',
            border: '1px solid black',
            color: 'black'

        }}
            endIcon={isFollow? <CheckCircleIcon style={{ color: '#32CD32' }} /> : <RadioButtonUncheckedOutlinedIcon />}
            onClick={handleFollow}
        >
            {isFollow ? 'đang theo dõi' : 'theo dõi'}
        </Button>
    )
}

export default FollowButton