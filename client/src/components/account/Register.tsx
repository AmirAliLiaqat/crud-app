import React, { useState, useCallback, useMemo } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Alert, IconButton, Collapse } from '@mui/material';
import { Close } from '@mui/icons-material';
import { registerSchema } from '../../schema/authSchema';
import { registerUser } from '../../store/thunks/UserThunks';
import { Component, Container, Title, InputFields, LinkTag } from '../../styled/Account';

interface InitialValuesInter {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  confirmPassword: string,
}

const initialValues: InitialValuesInter = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Register: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (values: InitialValuesInter, action: any) => {
      try {
        // @ts-ignore
        dispatch(registerUser(values));

        setOpen(true);

        setTimeout(() => {
          setAlert('User registered successfully');
          setOpen(false);
        }, 2000);
        action.resetForm();
      } catch (error) {
        setAlert('Error while registering user');
        setOpen(true);
      }
    },
    [dispatch]
  );

  const formikProps = useMemo(() => ({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  }), [handleSubmit]);

  return (
    <Component>
      <Container>
        <Title>Register</Title>
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
                helperText={touched?.firstname ? errors?.firstname : ""}
                error={touched?.firstname && Boolean(errors?.firstname)}
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
                helperText={touched?.lastname ? errors?.lastname : ""}
                error={touched?.lastname && Boolean(errors?.lastname)}
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
                helperText={touched?.email ? errors?.email : ""}
                error={touched?.email && Boolean(errors?.email)}
              />
              <InputFields
                fullWidth
                variant='outlined'
                name='password'
                label='Password'
                autoComplete='off'
                type='password'
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched?.password ? errors?.password : ""}
                error={touched?.password && Boolean(errors?.password)}
              />
              <InputFields
                fullWidth
                variant='outlined'
                name='confirmPassword'
                label='Confirm Password'
                autoComplete='off'
                type='password'
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched?.confirmPassword ? errors?.confirmPassword : ""}
                error={touched?.confirmPassword && Boolean(errors?.confirmPassword)}
              />
              <Button fullWidth variant='contained' type='submit' style={{ margin: '10px 0' }}>Register</Button>
              <LinkTag to="/">If already have an account</LinkTag>
            </form>
          )}
        </Formik>
      </Container>
    </Component>
  );
};

export default Register;
