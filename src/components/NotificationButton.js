import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Container, Typography, Box, Button, Grid } from '@mui/material';

function NotificationItem(){
  return (
    <Box style={{
      minWidth: 400
    }}>
      <Grid container>
        <Grid item xs={2}>
          <Avatar style={{
            width: 50,
            height: 50
          }}/>
        </Grid>
        <Grid item xs={8}>
          <Box style={{
            width: 300
          }}>
            <Typography>Lê Thị Huế</Typography>
            <Typography style={{
              fontSize: 12
            }}>vừa thích bài viết</Typography>
            <Typography style={{
              fontSize: 12,
              fontWeight: 'bold'
            }}>Tên bài viết</Typography>
          </Box>
          
          

        </Grid>
      </Grid>
    </Box>
  )
}

export default function NotificationButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleNotification = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>

      <Tooltip title="Notification">
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
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            maxWidth: 300,
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
          <NotificationItem />
        </MenuItem>
        <MenuItem>
          <NotificationItem />
        </MenuItem>
        <MenuItem>
          <NotificationItem />
        </MenuItem>
      </Menu>

    </React.Fragment>
  );
}