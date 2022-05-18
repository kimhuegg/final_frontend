import React from 'react'
import { Container, Box, Typography, Divider, IconButton, TextField, Grid, Button, Avatar } from '@mui/material'


function SuggestUser() {
    return (
        <Box style={{
            border: '1px solid #bdbdbd',
            marginTop: 20,
            boxShadow: 'rgb(232 234 235) 5px 5px 7px',
            padding: 20


        }}>
            <Box style={{
                border: '1px solid #bdbdbd',
                marginBottom: 20,
                padding: 5,
                boxShadow: 'rgb(232 234 235) 5px 5px 7px',
                display: 'flex',
                justifyContent: 'start',
            }}>
                <Avatar />
                <Box style={{
                    marginLeft: 5
                }}>
                    <Typography>My name</Typography>
                    <Typography style={{
                        color: '#bdbdbd'
                    }}>@Myame</Typography>
                </Box>


            </Box>
            <Box style={{
                border: '1px solid #bdbdbd',
                marginBottom: 20, 
                padding: 5,
                boxShadow: 'rgb(232 234 235) 5px 5px 7px',
                display: 'flex',
                justifyContent: 'start',
            }}>
                <Avatar />
                <Box style={{
                    marginLeft: 5
                }}>
                    <Typography>My name</Typography>
                    <Typography style={{
                        color: '#bdbdbd'
                    }}>@Myame</Typography>
                </Box>
            </Box>
            <Box style={{
                border: '1px solid #bdbdbd',
                marginBottom: 20,
                padding: 5,
                boxShadow: 'rgb(232 234 235) 5px 5px 7px',
                display: 'flex',
                justifyContent: 'start',
            }}>
                <Avatar />
                <Box style={{
                    marginLeft: 5
                }}>
                    <Typography>My name</Typography>
                    <Typography style={{
                        color: '#bdbdbd'
                    }}>@Myame</Typography>
                </Box>


            </Box>
        </Box>
    )
}

export default SuggestUser