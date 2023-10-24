import React, { useState, useCallback, useMemo } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Alert, IconButton, Collapse } from '@mui/material';
import { Close } from '@mui/icons-material';
import { updateSchema } from '../../schema/authSchema';
import { updateUser } from '../../store/thunks/UserThunks';
import { Component, Container, Title, InputFields } from '../../styled/Account';
import { getLocalStorageValue } from '../../utils/localStorage';

const user = getLocalStorageValue('user');

interface InitialValuesInter {
  firstname: string,
  lastname: string,
  email: string,
}

const initialValues: InitialValuesInter = {
  firstname: user.firstname,
  lastname: user.lastname,
  email: user.email,
}

const Update: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState('');
  const dispatch = useDispatch();

  const userId = user._id;

  const handleSubmit = useCallback(
    async (values: InitialValuesInter, action: any) => {
      try {
        // @ts-ignore: Unreachable code error
        dispatch(updateUser({userId, values}));

        setTimeout(() => {
          setAlert('User updated successfully');
          setOpen(false);
        }, 2000);
        
        setOpen(true);
      } catch (error) {
        setAlert('Error while updating user');
        setOpen(true);
      }
    },
    [dispatch, userId]
  );

  const formikProps = useMemo(() => ({
    initialValues,
    validationSchema: updateSchema,
    onSubmit: handleSubmit,
  }), [handleSubmit]);

  return (
    <Component>
      <Container>
        <Title>Update</Title>
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
        <Formik {...formikProps}>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <InputFields
                fullWidth
                variant='outlined'
                name='firstname'
                label='First Name'
                autoComplete='off'
                value={values.firstname}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.firstname ? errors.firstname : ""}
                error={touched.firstname && Boolean(errors.firstname)}
              />
              <InputFields
                fullWidth
                variant='outlined'
                name='lastname'
                label='Last Name'
                autoComplete='off'
                value={values.lastname}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.lastname ? errors.lastname : ""}
                error={touched.lastname && Boolean(errors.lastname)}
              />
              <InputFields
                fullWidth
                variant='outlined'
                name='email'
                label='Email'
                autoComplete='off'
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
              />
              <Button fullWidth variant='contained' type='submit'>Update</Button>
            </form>
          )}
        </Formik>
      </Container>
    </Component>
  );
};

export default Update;
