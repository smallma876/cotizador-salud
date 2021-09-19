import React from 'react';
import './input-dropdown.scss'

type InputTextProps = {
    value: string;
    valueselect: string;
    label?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onChangeSelect(event: React.ChangeEvent<HTMLSelectElement>): void;
};

const InputDropdown = ({value, onChange, onChangeSelect, label,valueselect }: InputTextProps) => {
    return (
        <div className="inputdropdown">
            
            <select className="inputdropdown__select" onChange={onChangeSelect} value={valueselect}>
                <option className="inputdropdown__option" value="dni">DNI</option>
                <option className="inputdropdown__option" value="ce">CE</option>
            </select>
            <input  type="text" className="inputdropdown__text" placeholder=" " value={value} onChange={onChange}/>
            <label className="inputdropdown__label">{label}</label>
        </div>
    )
}

export default InputDropdown
