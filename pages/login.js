import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FormContainer from '../components/FormContainer';
import { Formik, Form } from 'formik';
import Input from '../components/Input';
import Button from '../components/Button';
import { loginFields } from '../constants/inputFieldData';
import { loginSchema } from '../constants/validationSchema';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Signup</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='h-full w-full flex justify-center items-center'>
                <FormContainer>
                    <div className='mb-8'>
                        <p className='text-3xl text-gray-600 font-semibold'>Login</p>
                        <p className='text-gray-300 text-sm'>Don't have an account? <span className='text-pink-400 cursor-pointer'><Link href='/signup'>Sign Up</Link></span></p>
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={loginSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                            // router.push('/gallery')
                        }}
                    >
                        {() => (
                            <Form>
                                {loginFields.map(({name, label, type}, idx) => (
                                    <Input
                                        key={idx}
                                        name={name} 
                                        label={label}
                                        type={type}
                                    />
                                ))}
                                <div className='flex w-full justify-center mt-8'>
                                    <Button  />
                                </div>   
                            </Form>
                        )}
                    </Formik>
                </FormContainer>
            </div>
        </div>
    )
}

export default Login;
