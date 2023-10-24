import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import { Edit, Delete, Logout, AccountCircle } from '@mui/icons-material';
import { deleteUser } from '../../store/thunks/UserThunks';

interface ProfileProps {
  anchorEl: any;
  open: boolean;
  handleClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ anchorEl, open, handleClose }) => {
  const dispatch = useDispatch();
  
  // @ts-ignore
  const { data } = useSelector((state) => state.users);

  const handleDelete = useCallback(async () => {
    // @ts-ignore
    await dispatch(deleteUser(data?.user._id));
    localStorage.clear();
    window.location.replace('/');
  }, [dispatch, data]);

  const handleLogout = useCallback(() => {
    localStorage.clear();
    window.location.replace('/');
  }, []);

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          Update Account
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          Delete Account
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Profile
