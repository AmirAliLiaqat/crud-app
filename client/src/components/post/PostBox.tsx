import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styled/Account';
import { Alert, Box, IconButton, Button, styled, Collapse } from '@mui/material';
import { createPost } from '../../store/thunks/postThunks';
import { getLocalStorageValue } from '../../utils/localStorage';
import { Close } from '@mui/icons-material';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '17%',
    },
}));

const textAreaStyle = {
    width: '100%',
    display: 'block',
    marginBottom: '10px',
    padding: '10px 0 0 10px'
}

const Post: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState('');
    const [post, setPost] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        setPost(e.target.value);
    }

    const handleSubmit = useCallback(async (e: any) => {
        e.preventDefault();

        try {
            const user = getLocalStorageValue('user');
            const userId = user._id;

            // @ts-ignore
            const response = await dispatch(createPost({ userId, post }));

            if (response) {
                setOpen(true);

                setTimeout(() => {
                    setAlert('Post added successfully');
                    setOpen(false);
                }, 2000);

                setPost('');
            }
        } catch (error) {
            setAlert('Error while adding post');
            setOpen(true);
        }
    }, [dispatch, post]);

    return (
        <Component>
            <Container>
                <Collapse in={open}>
                    <Alert
                        severity="success"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <Close fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {alert}
                    </Alert>
                </Collapse>
                <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <textarea
                        rows={7}
                        placeholder="What's on your mind?"
                        style={textAreaStyle}
                        value={post}
                        onChange={handleChange}
                    />
                    <Button variant='contained' type="submit">Post</Button>
                </form>
            </Container>
        </Component>
    )
}

export default Post
