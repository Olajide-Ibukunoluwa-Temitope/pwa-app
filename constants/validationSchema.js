import * as Yup from 'yup';

export const signuUpSchema = Yup.object().shape({
    fullName: Yup.string()
        .matches(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/, 'please fill in your full name')
        .required('this field is required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'password must be at lest 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'at least one uppercase letter, one lowercase letter, one number and one special character')
        .required('this field is required'),
    confirmPassword: Yup.string()
        .required('this field is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('this field is required'),
    password: Yup.string()
        .min(8, 'password must be at lest 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'at least one uppercase letter, one lowercase letter, one number and one special character')
        .required('this field is required'),
});