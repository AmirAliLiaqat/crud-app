import React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

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

const CommentBox = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant='contained' onClick={handleOpen}>Comment</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Share your thoughts
                </Typography>
                <textarea 
                    rows={10} 
                    placeholder="What's on your mind?"
                    style={textAreaStyle}
                />
                <Box style={{ textAlign: 'end' }}>
                    <Button onClick={handleClose}>Cancle</Button> &nbsp;
                    <Button variant='contained'>Comment</Button>
                </Box>
                </Box>
            </Modal>
        </>
    )
}

export default CommentBox
