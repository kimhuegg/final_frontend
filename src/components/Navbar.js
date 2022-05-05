import React from 'react'
import { Outlet } from "react-router-dom"
import { Container, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import SearchBar from "material-ui-search-bar";
import ArticleIcon from '@mui/icons-material/Article';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Tooltip from '@mui/material/Tooltip';


function Navbar() {
    const [value, setValue] = React.useState('')
    return (
        <>
            <div style={{
                boxShadow: 'rgb(204 207 209) 0px 0px 9px'
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
                        }}>
                            <Tooltip title="Concern">
                                <Button style={{
                                    padding: 15
                                }} variant="text"><ArticleIcon /></Button>
                            </Tooltip>

                            <Button style={{
                                padding: 15
                            }} variant="text"><NotificationsNoneIcon /></Button>
                            <Button style={{
                                padding: 15
                            }} variant="text"><AddCircleOutlineIcon /></Button>
                            <Button style={{
                                padding: 15
                            }} variant="text"><PersonOutlineIcon /></Button>
                        </Grid>
                    </Grid>

                </Container>

            </div>
            <Outlet />
        </>

    )
}

export default Navbar