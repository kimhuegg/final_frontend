import { Box, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';

import React from 'react';
import Hastag from '../../components/createRecipe/Hastag';
import HeaderRecipe from '../../components/createRecipe/HeaderRecipe';
import Step from '../../components/createRecipe/Step';
import Material from '../../components/createRecipe/Material';

function CreateRecipe() {

    return (
        <Container style={{
            width: 1000
        }}>
            <Box style={{
                border: '1px solid rgb(232 234 235)',
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 20,
            }} >
                <Typography variant='h5'>Tạo công thức nấu ăn mới</Typography>
                <Divider />
                <Box style={{
                    padding: 20
                }}>
                    <HeaderRecipe />
                    <Hastag />
                    <Grid container spacing={8} style={{paddingBottom: 20}}>
                        <Grid item xs={3}>
                            <FormControl sx={{ mt: 3, minWidth: 200 }} fullWidth size="small">
                                <InputLabel id="demo-simple-select-autowidth-label">Khẩu phần</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={''}
                                    // onChange={handleChange}
                                    autoWidth
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>1 người</MenuItem>
                                    <MenuItem value={21}>2 người</MenuItem>
                                    <MenuItem value={22}>3 người</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={9}>
                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 20
                            }}>
                                <Typography>Thời gian chuẩn bị</Typography>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                                <Typography>Giờ</Typography>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                                <Typography>Phút</Typography>
                            </Box>
                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 20
                            }}>
                                <Typography>Thời gian chế biến</Typography>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                                <Typography>Giờ</Typography>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                                <Typography>Phút</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Material />
                    <Divider />
                    <Step />
                </Box>
            </Box>
        </Container>
    )
}

export default CreateRecipe