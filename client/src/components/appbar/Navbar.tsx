import { useState, useCallback, useMemo } from 'react';
import { AppBar, Typography, Box, Avatar, IconButton, Tooltip } from '@mui/material';
import { CircleNotifications, Message, Settings } from '@mui/icons-material';
import { getLocalStorageValue } from '../../utils/localStorage';
import Profile from './Profile';

const AppStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  padding: '10px 20px',
};

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = useCallback((event: any) => {
      setAnchorEl(event.currentTarget);
    }, []);
  
    const handleClose = useCallback(() => {
      setAnchorEl(null);
    }, []);
  
    const user = useMemo(() => getLocalStorageValue('user'), []);

  return (
    <AppBar sx={AppStyle}>
        <Typography sx={{ fontSize: '28px' }}>Dashboard</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Typography sx={{ minWidth: 50 }}><Settings/></Typography>
          <Typography sx={{ minWidth: 50 }}><Message/></Typography>
          <Typography sx={{ minWidth: 50 }}><CircleNotifications/></Typography>
          {user?.firstname || ''} {user?.lastname || ''}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} src="https://tostatus.in/wp-content/uploads/2023/02/Single-Boy-for-Whatsapp-DP-Download-2023-1024x1024.jpg">M</Avatar>
            </IconButton>
          </Tooltip>
          <Profile anchorEl={anchorEl} open={open} handleClose={handleClose} />
        </Box>
    </AppBar>
  )
}

export default Navbar
