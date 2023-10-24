import React, { useCallback, useMemo, useEffect } from 'react';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSchema } from '../../schema/authSchema';
import { loginUser } from '../../store/thunks/UserThunks';
import { setLocalStorageValue } from '../../utils/localStorage';
import { Component, Container, Title, InputFields, LinkTag } from '../../styled/Account';

interface InitialValuesInter {
  email: string,
  password: string
}

const initialValues: InitialValuesInter = {
  email: '',
  password: '',
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // @ts-ignore
  const { data } = useSelector((state) => state.users);

  const handleSubmit = useCallback(
    async (values: InitialValuesInter) => {
      // @ts-ignore
      await dispatch(loginUser(values));
    }, [dispatch]
  );

  useEffect(() => {
    if (data?.token && data?.user) {
      setLocalStorageValue('token', data.token);
      setLocalStorageValue('user', data.user);
      navigate('/dashboard');
    }
  }, [data, navigate]);

  const formikProps = useMemo(() => ({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  }), [handleSubmit]);

  return (
    <Component>
      <Container>
        <Title>Login</Title>
        <Formik {...formikProps}>
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <InputFields
                fullWidth
                variant='outlined'
                name='email'
                label='Email'
                autoComplete='off'
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={formik.touched.email ? formik.errors.email : ''}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              <InputFields
                fullWidth
                variant='outlined'
                name='password'
                label='Password'
                autoComplete='off'
                type='password'
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={formik.touched.password ? formik.errors.password : ''}
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
              <Button fullWidth variant='contained' type='submit' style={{ margin: '10px 0' }}>
                Login
              </Button>
              <LinkTag to='/register'>If you don't have an account</LinkTag>
            </form>
          )}
        </Formik>
      </Container>
    </Component>
  );
};

export default Login;
