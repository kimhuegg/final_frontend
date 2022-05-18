import React from 'react'
import { Container, Box, Typography, Divider, IconButton, TextField, Grid } from '@mui/material'
import pic from '../logo123.png'
import Rating from '@mui/material/Rating';


function CategoryItem() {
    return (
        <Box style={{
            border: '1px solid #bdbdbd',
            // marginTop: 20,
            boxShadow: 'rgb(232 234 235) 5px 5px 7px',
            // width : 300


        }}>
            <Box style={{
                width: '100%',
                backgroundColor: 'yellow',
                height: 150
            }}>
                <img />
            </Box>
            <Box style={{
                padding: 5,
                textAlign: 'left'
            }}>
                <Typography variant='h6'>Tiêu đề bài viết | <span style={{
                    fontSize : 12
                }}>bữa tối</span></Typography>
                <Typography style={{
                    color : '#bdbdbd',
                    fontSize : 12
                }}>10/10/2021</Typography>
                <Box style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Rating
                    name="simple-controlled"
                    value={4}
                    onChange={(event, newValue) => {
                        return 1;
                    }}
                />
                <Typography>$23.000</Typography>
                </Box>
                


            </Box>

        </Box>
    )
}

export default CategoryItem