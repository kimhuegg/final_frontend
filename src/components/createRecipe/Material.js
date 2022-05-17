import React, { useState } from 'react'
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Material() {
    const [listMaterial, setListMaterial] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCalo, setTotalCalo] = useState(0)
    const [inputMaterial, setInputMaterial] = useState('')
    const [inputUnit, setInputUnit] = useState('')
    const [inputQuantity, setInputQuantity] = useState(1)


    const handleChangeMaterial = (e) => {
        setInputMaterial(e.target.value)
    }
    const handleChangeUnit = (e) => {
        setInputUnit(e.target.value)
    }
    const handleChangeQuantity = (e) => {
        setInputQuantity(e.target.value)
    }

    const addMaterial = () => {
        console.log(listMaterial)
        const newMaterial = {
            name: inputMaterial,
            quantity: inputQuantity,
            unit: inputUnit,
            calo: 150,
            price: 200
        }
        setInputMaterial('')
        setInputQuantity('')
        setInputUnit(1)
        listMaterial.push(newMaterial)
        setListMaterial([...listMaterial])
        setTotalCalo(totalCalo + newMaterial.calo)
        setTotalPrice(totalPrice + newMaterial.price)

    }
    return (
        <Box>
            <Typography variant='h6'>Nguyên liệu</Typography>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 20
            }}>
                <DensityMediumIcon />
                <TextField
                    label="số lượng"
                    id="filled-hidden-label-small"
                    defaultValue={inputQuantity}
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={handleChangeQuantity}
                />
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label3">Đơn vị</InputLabel>
                    <Select
                        labelId="demo-simple-select-label3"
                        id="demo-simple-select3"
                        value={inputUnit}
                        label="Đơn vị"
                        onChange={handleChangeUnit}
                    >
                        <MenuItem value={10}>kg</MenuItem>
                        <MenuItem value={20}>ml</MenuItem>
                        <MenuItem value={30}>g</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label2">Tên nguyên liệu</InputLabel>
                    <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select2"
                        value={inputMaterial}
                        label="Tên nguyên liệu"
                        onChange={handleChangeMaterial}
                    >
                        <MenuItem value={10}>Thịt bò</MenuItem>
                        <MenuItem value={20}>Rau xà lách</MenuItem>
                        <MenuItem value={30}>Chanh</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box style={{ textAlign: 'right' }}>
                <Button variant='contained' onClick={addMaterial} >+ Thêm nguyên liệu</Button>
            </Box>
            <Box style={{
                marginTop: 20,
                textAlign: 'right'
            }}>
                <List dense={true}>
                    {
                        listMaterial.map((item, index) => (
                            <ListItem key={index}>
                                <Grid container justifyContent={"end"} style={{
                                    textAlign: 'right'
                                }}>
                                    <Grid item style={{
                                        width: 100
                                    }}>
                                        {item.quantity} {item.unit}
                                    </Grid>
                                    <Grid item style={{
                                        width: 100
                                    }}>
                                        {item.name}
                                    </Grid>
                                    <Grid item style={{
                                        width: 100
                                    }}>
                                        150 cal
                                    </Grid>
                                    <Grid item style={{
                                        width: 100
                                    }}>
                                        $ 23 k
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))
                    }

                </List>
                <Typography variant='h6'>Tổng số -- {totalCalo}calo -- ${totalPrice}</Typography>
            </Box>
        </Box>
    )
}

export default Material