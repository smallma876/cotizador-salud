import React from 'react';
import './input-text.scss'

type InputTextProps = {
    value: string;
    label?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const InputText = ({value, onChange, label }: InputTextProps) => {
    return (
        <div className="inputtext">
            <input type="text" className="inputtext__input" placeholder="  " value={value} onChange={onChange}/>
            <label className="inputtext__label">{label}</label>
        </div>
    )
}

export default InputText
