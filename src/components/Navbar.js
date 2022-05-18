import React, { useState } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArticleIcon from '@mui/icons-material/Article';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import SearchBar from '../components/navbar/SearchBar';
import NotificationButton from './NotificationButton';
import ButtonCreate from './navbar/ButtonCreate';
import LogoText from './navbar/LogoText';

import { Link, Outlet } from "react-router-dom";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ['bữa sáng', 'bữa tối', 'bữa trưa', 'đồ ăn chay', 'đồ uống', 'đồ dùng nhà bếp', 'bánh ngọt']

    return (
        <>
            <div style={{
                boxShadow: 'rgb(204 207 209) 0px 0px 9px',
            }}>
                <Container >
                    <Grid container spacing={1} justifyContent={'space-between'} alignItems={'center'} style={{
                        paddingTop: 5,
                        paddingBottom: 5
                    }}>
                        <Grid item xs={3} style={{
                            textAlign: 'left'
                        }}>
                            <LogoText />
                        </Grid>
                        <Grid item xs={5}>

                            {/* <SearchBar
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                    onRequestSearch={() => { console.log("request") }}
                                /> */}

                            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


                        </Grid>

                        <Grid item xs={4} style={{
                            textAlign: 'right'
                        }} >

                            <Tooltip title="Concern">
                                <IconButton style={{
                                    padding: 15
                                }} variant="text"><ArticleIcon /></IconButton>
                            </Tooltip>

                            <NotificationButton />

                            <ButtonCreate />


                            <Link to={'/profile/your-post'} style={{
                                textDecoration: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <IconButton style={{
                                    padding: 15
                                }} variant="text">
                                    <PersonOutlineIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} justifyContent={'space-between'} alignItems={'center'} style={{
                        paddingTop: 15,
                        paddingBottom: 10
                    }}>
                        <Grid item xs={1} style={{
                            textAlign: 'left'
                        }}>
                            <Typography><Link to={"/homepage"} style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: 'black'
                            }}>Tất cả</Link> |</Typography>

                        </Grid>
                        <Grid item xs={11} style={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }} container>
                            <Grid item>
                                <IconButton>
                                    <ArrowBackIosNewIcon />
                                </IconButton>
                            </Grid>
                            {
                                categories.map((item, index) => (
                                    <Grid item key={index}>
                                        <Typography><Link to={"/category"}>{item}</Link></Typography>
                                    </Grid>
                                ))
                            }
                            <Grid item>
                                <IconButton>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </div>
            <Outlet />
           
        </>

    )
}

export default Navbar