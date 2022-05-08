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

import pic from './lunch.jpg'
import EditMainPage from '../../components/profile/EditMainPage';
import EditOtherInfomation from '../../components/profile/EditOtherInfomation';

function EditProfile() {
  
    return (
        <Container>
            <EditMainPage />
            <EditOtherInfomation/>
        </Container>
    )
}

export default EditProfile