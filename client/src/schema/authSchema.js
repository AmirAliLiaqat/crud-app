import * as Yup from 'yup'

export const registerSchema = Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter your first name"),
    lastname: Yup.string().min(2).max(25).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).max(12).required("Please enter a password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Confrim passwords must match')
      .required('Please confirm your password')
});

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter you email"),
    password: Yup.string().min(6).max(12).required(),
});

export const updateSchema = Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter your first name"),
    lastname: Yup.string().min(2).max(25).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
});
