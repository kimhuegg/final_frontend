import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Box, Grid, Typography, Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Link } from 'react-router-dom';

function CreateButtonItem({ icon, content }) {
    return (
        <Box style={{
            minWidth: 200
        }}>
            <Grid container>
                <Grid item xs={2} style={{
                    paddingTop: 5,
                    paddingBottom: 5
                }}>
                    {icon}
                </Grid>
                <Grid item xs={8}>
                    <Box style={{
                        width: 200
                    }}>
                        <Typography>{content}</Typography>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default function ButtonCreate() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleCreateButton = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>

            <IconButton style={{
                padding: 15
            }} variant="text"
                onClick={handleCreateButton}
                aria-controls={open ? 'create-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <AddCircleOutlineIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                id="create-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        maxWidth: 200,
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
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
                    <Link to={'/create-post'}>
                        <CreateButtonItem icon={<PostAddIcon />} content={'Tạo bài viết'} />

                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Link to={"/create-recipe"}>
                        <CreateButtonItem icon={<PostAddIcon />} content={'Tạo công thức'} />

                    </Link>
                </MenuItem>
            </Menu>

        </React.Fragment>
    );
}