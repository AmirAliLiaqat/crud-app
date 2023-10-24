import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/thunks/postThunks';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

const PostDelete = ({ postId }) => {
    const [open, setOpen] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        setDeleteItem(true);

        if(deleteItem === true) {
            // @ts-ignore
            dispatch(deletePost(postId));
            setOpen(false);
        }
    }

    return (
        <>
            <Button variant='contained' color='secondary' onClick={handleOpen}><Delete/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">Delete</Typography>
                <Typography my={2}>Are you sure you want to delete this post....</Typography>
                <Box style={{ textAlign: 'end' }}>
                    <Button onClick={handleClose}>Cancle</Button> {" "}
                    <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
                </Box>
                </Box>
            </Modal>
        </>
    )
}

export default PostDelete;
