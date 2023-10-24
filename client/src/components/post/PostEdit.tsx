import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../store/thunks/postThunks';

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

const textAreaStyle = {
  width: '100%',
  display: 'block',
  margin: '10px 0 20px 0',
  padding: '10px 0 0 10px'
}

const PostEdit = ({ postId }) => {
    const [post, setPost] = useState('');
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e: any) => {
        setPost(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const updateItem = async () => {
            // @ts-ignore
            const response = await dispatch(updatePost({ postId, post }));
            if(response) {
                console.log('post updated successfully');
                setOpen(false);
            } else {
                console.log('error while updating the post');
            }
        }
        updateItem();
    }

    return (
        <>
            <Button variant='contained' onClick={handleOpen}><Edit/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Post
                    </Typography>
                    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                        <textarea
                            rows={10}
                            style={textAreaStyle}
                            value={post}
                            onChange={handleChange}
                        />
                        <Box style={{ textAlign: 'end' }}>
                            <Button onClick={handleClose}>Cancle</Button> {" "}
                            <Button variant='contained' type='submit' onSubmit={handleSubmit}>Edit</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default PostEdit;
