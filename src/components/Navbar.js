import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArticleIcon from '@mui/icons-material/Article';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Container, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SearchBar from "material-ui-search-bar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import React from 'react';
import { Link, Outlet } from "react-router-dom";
import NotificationButton from './NotificationButton';


function Navbar() {
    const [value, setValue] = React.useState('')
    const categories = ['bữa sáng', 'bữa tối', 'bữa trưa', 'đồ ăn chay', 'đồ uống', 'đồ dùng nhà bếp', 'bánh ngọt']

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleNotification = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div style={{
                boxShadow: 'rgb(204 207 209) 0px 0px 9px',
                zIndex: 1000
            }}>
                <Container >
                    <Grid container spacing={1} justifyContent={'space-between'} alignItems={'center'} style={{
                        paddingTop: 5,
                        paddingBottom: 5
                    }}>
                        <Grid item xs={3} style={{
                            textAlign: 'left'
                        }}>
                            <Typography>Logo</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <SearchBar
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                onRequestSearch={() => { console.log("request") }}
                            />
                        </Grid>

                        <Grid item xs={4} style={{
                            textAlign: 'right'
                        }} >

                            <Tooltip title="Concern">
                                <IconButton style={{
                                    padding: 15
                                }} variant="text"><ArticleIcon /></IconButton>
                            </Tooltip>




                            <IconButton style={{
                                padding: 15
                            }} variant="text"
                                onClick={handleNotification}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsNoneIcon />
                                </Badge>

                            </IconButton>

                            <IconButton style={{
                                padding: 15
                            }} variant="text">
                                <AddCircleOutlineIcon />
                            </IconButton>
                            <Link to={'/profile'} style={{
                                textDecoration: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <IconButton style={{
                                    padding: 15
                                }} variant="text">
                                    <PersonOutlineIcon />
                                </IconButton></Link>
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
                                categories.map((item) => (
                                    <Grid item>
                                        <Typography><Link to={"/homepage"}>{item}</Link></Typography>
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
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        width: 150,
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Avatar />My account
                </MenuItem>

            </Menu>
            <NotificationButton />

        </>

    )
}

export default Navbar