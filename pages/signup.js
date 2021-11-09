import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import FormContainer from '../components/FormContainer';
import { Formik, Form } from 'formik';
import Input from '../components/Input';
import Button from '../components/Button';
import { signUpFields } from '../constants/inputFieldData';
import { signuUpSchema } from '../constants/validationSchema';
import { useRouter } from 'next/router';

const Signup = () => {
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
                        <p className='text-3xl text-gray-600 font-semibold'>Sign Up</p>
                        <p className='text-gray-300 text-sm'>Already have an account? <span className='text-pink-400 cursor-pointer'><Link href='/login'>Log In</Link></span></p>
                    </div>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={signuUpSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                            router.push('/login');
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                {signUpFields.map(({name, label, type}, idx) => (
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

export default Signup;
