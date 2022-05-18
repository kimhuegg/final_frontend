import React, { useState } from 'react'
import { Box, Typography, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Divider , Button} from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Step() {
    const [listStep, setListStep] = useState([])
    const [inputStep, setInputStep] = useState('')
    const [inputDescription, setInputDescription] = useState('')

    const handleChangeStep = (e) => {
        setInputStep(e.target.value)

    }

    const handleChangeDescription = (e) => {
        setInputDescription(e.target.value)

    }

    const addStep = () => {
        const newStep = {
            step : inputStep,
            description : inputDescription
        }
        listStep.push(newStep)
        setListStep([...listStep])

    }
    return (
        <Box>
            <Typography variant='h6'>Các bước chế biến</Typography>
            <Grid container>
                <Grid item xs={1}>
                    <Box style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#1976D2',
                        borderRadius: '50%',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            fontWeight: 'bold'
                        }}>
                            {listStep.length + 1}
                        </span>
                    </Box>


                </Grid>
                <Grid item xs={11}>
                    <TextField
                        id=""
                        label="Bước"
                        value={inputStep}
                        fullWidth
                        size='small'
                        margin='dense'
                        onChange={handleChangeStep}
                    />
                    <TextField
                        id=""
                        label="Mô tả cụ thể bước"
                        value={inputDescription}
                        fullWidth
                        size='small'
                        margin='dense'
                        multiline
                        rows={4}
                        onChange={handleChangeDescription}
                    />
                </Grid>

            </Grid>
            <Box style={{ textAlign: 'right' }}>
                <Button variant='contained' onClick={addStep} >+ Thêm bước</Button>
            </Box>

            <Timeline position="right">
                {
                    listStep.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <span style={{
                                        width: 20,
                                    }}>{index +1}</span>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography>{item.step}</Typography>
                                <Typography style={{
                                    fontSize: 13,
                                    color: 'grey'
                                }}>{item.description}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }


            </Timeline>
            <Divider />
            <Box style={{ textAlign: 'right', marginTop: 20 }}>
                <Button variant='contained'>Tạo công thức</Button>
            </Box>
        </Box>

    )
}

export default Step