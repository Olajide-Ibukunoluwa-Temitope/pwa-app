import React from 'react'

const FormContainer = ({children, leftSectionText}) => {
    return (
        <div className='w-11/12 h-11/12 md:w-3/4 md:h-5/6 shadow-2xl rounded-2xl flex'>
            <div className='w-1/2 hidden h-full h-full bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500 rounded-tl-2xl rounded-bl-2xl md:flex flex-col justify-center items-center text-white'>
                <p className='text-3xl mb-4'>Get Started!</p>
                <p className='w-3/4 p-2 text-center'>
                    To control the font family of an element at a specific breakpoint, add a  prefix to any existing font family utility class.
                </p>
            </div>
            <div className='w-full md:w-1/2 h-full flex justify-center p-4 md:p-16 flex-col'>
                {children}
            </div>
        </div>
    )
}

export default FormContainer;
