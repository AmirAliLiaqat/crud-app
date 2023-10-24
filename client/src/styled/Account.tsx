import { Link } from 'react-router-dom';
import { Box, Typography, TextField, styled } from '@mui/material';

export const Component = styled(Box)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Container = styled(Box)`
    background: beige;
    width: 30%;
    border-radius: 5px;
    text-align: center;
    padding: 40px 20px;
`;

export const Title = styled(Typography)`
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const InputFields = styled(TextField)`
    margin: 10px 0;
`;

export const LinkTag = styled(Link)`
    text-decoration: none;
    color: inherit;
    text-transform: capitalize;
    &: hover {
        color: #1976d2;
    }
`;

export const errorStyle = {
  color: 'red', 
  textAlign: 'left'
}