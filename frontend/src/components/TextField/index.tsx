import React, { HTMLAttributes } from 'react';
import './index.scss'
import clsx from 'clsx'

interface TextFieldProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    value: string;
    isMultiline?: boolean;
    onChangeText: (value: string) => void;
}

export default function TextField ({ value, onChangeText, label, isMultiline, ...props }: TextFieldProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeText(event.target.value)
    }
    const { className, ...inputProps } = props;
    return <div className={clsx("text-field", className)}>
        <label className="text-field__label">
            <span className="text-field__label-text">{label}</span>
            { isMultiline
                ? <textarea {...inputProps} onChange={handleChange} className="text-field__textarea"></textarea>
                : <input {...inputProps} onChange={handleChange} className="text-field__input"/>
            }
        </label>
    </div>
}