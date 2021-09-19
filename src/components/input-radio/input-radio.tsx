import React from 'react';
import './input-radio.scss'

type InputTextProps = {
    value?: string;
    label?: string;
    name: string;
    selected: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const InputRadio = ({value, label, name, selected, onChange }: InputTextProps) => {
    return (
        <div className="inputradio">
            <label className="inputradio__label">{label}
                <input 
                    type="radio" 
                    className="inputradio__input" 
                    name={name}
                    value={value}
                    checked={value === selected}
                    onChange={onChange}
                />
                <span className="inputradio__checkmark"></span>
            </label>
        </div>
    )
}

export default InputRadio
