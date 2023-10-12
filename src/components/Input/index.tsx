import React, { FC, ChangeEventHandler } from 'react';
import './style.scss';

export type TInputProps = {
    /**
     * Is this the text you want to add to the input placeholder
     */
    placeholder?: string
    /**
     * Is this the value of the input
     */
    value?: string
    /**
     * Is this the onChange event of the input
     */
    onChange?: ChangeEventHandler<HTMLInputElement>
};

export const Input:FC<TInputProps> = ({
    placeholder = '',
    value = '',
    onChange = (e) => {}
}) => {
    return(
        <input className='input' value={value} placeholder={placeholder} type='text' onChange={onChange} />
    )
}