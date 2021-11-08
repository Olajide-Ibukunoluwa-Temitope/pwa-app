import React from 'react';
import { useField } from 'formik';

const Input = ({label, name, type}) => {
    const [field, meta] = useField(name);
    return (
        <div>
            <p className='text-sm text-gray-600'>{label}</p>
            <div className='my-4'>
                <input name={name} type={type} className='w-full rounded-lg border h-11 px-4 text-gray-500' {...field} />
                {meta.error && meta.touched && <p className='text-red-400 m-0 text-xs'>*{meta.error}</p>}
            </div>    
        </div>
    )
}

export default Input;
